import io from 'socket.io-client'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'

import { API } from 'Config'

import {
  CHAT_EMIT_EVENTS,
  CHAT_SUBSCRIBE_EVENTS,
  NOTIFICATION_SUBSRIBE_EVENTS,
} from 'Services/Socket/constants'

export default class SocketService {
  private static instance: SocketService

  private static socket

  private statusSubscriptions: any[] = []

  private token: string | undefined

  private isConnected = false

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService()
    }

    return SocketService.instance
  }

  public getSocket = () => SocketService.socket

  public static isOpen() {
    if (!SocketService.socket) return false

    return SocketService.socket?.readyState === SocketService.socket?.OPEN
  }

  public initiateSocket = async (accessToken: string) => {
    this.token = accessToken

    if (!SocketService.socket) {
      SocketService.socket = io(`${API.WS}`, {
        autoConnect: false,
        query: {
          token: accessToken,
        },
        transports: ['websocket'],
        rejectUnauthorized: false,
        jsonp: false,
      })
    }

    SocketService.socket.on('connect', () => {
      this.isConnected = true
      this.triggerStatusChangeCallbacks()
    })

    SocketService.socket.on('disconnect', () => {
      this.isConnected = false
      this.triggerStatusChangeCallbacks()
    })

    SocketService.socket.on('error', async error => {
      if (error === 'jwt expired' || error === 'jwt not active') {
        this.updateToken(this.token)
      }
    })

    SocketService.socket.connect()

    SocketService.socket.emit(CHAT_EMIT_EVENTS.SET_PLATFORM, 'desktop')
  }

  public updateToken = accessToken => {
    this.token = accessToken

    if (this.getSocket()) {
      SocketService.socket.io.opts.query.token = accessToken
      SocketService.socket.disconnect().connect()
    }
  }

  public disconnectSocket = (): void => {
    SocketService.socket?.disconnect()
    SocketService.socket = undefined
  }

  public removeSubscriptions = () => {
    if (!SocketService.isOpen()) return

    SocketService.socket.removeAllListeners()
  }

  public subscribe = (
    event: CHAT_SUBSCRIBE_EVENTS | NOTIFICATION_SUBSRIBE_EVENTS,
    callback: (data?: any) => void,
  ) => {
    if (!SocketService.socket) return

    SocketService.socket.on(event, data => {
      if (!data) return callback()
      const parsedMessage = JSON.parse(data)

      return callback(parsedMessage)
    })
  }

  public onSubscribeStatusChange(callback, id) {
    this.statusSubscriptions.push({ id, callback })

    this.triggerStatusChangeCallbacks()
  }

  public offSubscribeStatusChange(callbackId) {
    this.statusSubscriptions = filter(
      this.statusSubscriptions,
      ({ id }) => id !== callbackId,
    )
  }

  private triggerStatusChangeCallbacks() {
    forEach(this.statusSubscriptions, ({ callback }) => {
      callback.call(this, this.isConnected)
    })
  }
}
