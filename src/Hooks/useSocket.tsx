import { useEffect, useState } from 'react'

import shortId from 'shortid'

import { useAppSelector } from 'Hooks/useStore'

import SocketService from 'Services/Socket'

function useSocket() {
  const socket = SocketService.getInstance().getSocket()
  const auth = useAppSelector(state => state.auth)

  const [isConnected, setIsConnected] = useState(false)
  const [callbackId] = useState(shortId.generate())

  useEffect(() => {
    SocketService.getInstance().onSubscribeStatusChange(
      setIsConnected,
      callbackId,
    )

    return () => {
      SocketService.getInstance().offSubscribeStatusChange(callbackId)
    }
  }, [])

  useEffect(() => {
    if (auth.accessToken) {
      if (!SocketService.getInstance().getSocket()) {
        SocketService.getInstance().initiateSocket(auth.accessToken)
      }

      if (!SocketService.isOpen()) {
        SocketService.getInstance().updateToken(auth.accessToken)
      }
    }
  }, [auth.accessToken])

  return {
    isConnected,
    socket,
  }
}

export default useSocket
