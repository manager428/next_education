/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IAuthPayload, IAuthState } from './interfaces'

const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IAuthPayload>) => ({
      ...state,
      ...action.payload,
    }),
    reset: () => ({ ...initialState }),
  },
})

export const { set, reset } = authSlice.actions

export default authSlice.reducer
