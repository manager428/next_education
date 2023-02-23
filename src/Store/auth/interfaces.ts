export interface IAuthState {
  readonly accessToken: string | null
  readonly refreshToken: string | null
}

export interface IAuthPayload {
  accessToken: string
  refreshToken: string
}
