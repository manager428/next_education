import { IMeResponse } from 'Services/Api/requests/auth/interfaces'

export type MeNotifications = {
  chat: boolean
  friends: boolean
  notifications: boolean
}

export interface IMeState {
  readonly isLoggedIn: boolean
  readonly theme: string
  readonly me?: IMeResponse
}
