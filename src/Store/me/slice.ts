/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchMe } from 'Store/me/thunks'

import { IMeState, MeNotifications } from './interfaces'

const initialState: IMeState = {
  isLoggedIn: false,
  theme: 'main',
}

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IMeState>) => ({
      ...state,
      ...action.payload,
    }),
    setNotifications: (
      state,
      action: PayloadAction<Partial<MeNotifications>>,
    ) => {
      if (state.me) {
        state.me.notifications = {
          ...state.me.notifications,
          ...action.payload,
        }
      }
    },
    reset: () => ({ ...initialState }),
  },
  extraReducers: builder => {
    builder.addCase(fetchMe.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoggedIn = true
        state.me = payload
      } else {
        state.isLoggedIn = false
        state.me = undefined
      }
    })
  },
})

export const { set, reset, setNotifications } = meSlice.actions

export default meSlice.reducer
