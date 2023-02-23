export interface IMessageCallback {
  error: null | string
  messages: Array<IMessage>
}

export interface IMessage {
  id: number
  userid: number
  username: string
  time: number
  messageType: string
  edited: number // 0 | 1
}
