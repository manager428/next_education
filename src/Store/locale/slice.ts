/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchMe } from 'Store/me/thunks'

import { ILocaleState } from './interfaces'

const initialState: ILocaleState = {
  locale: 'en',
}

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ILocaleState>) => ({
      ...state,
      ...action.payload,
    }),
    reset: () => ({ ...initialState }),
  },
  extraReducers: builder => {
    builder.addCase(fetchMe.fulfilled, (state, { payload }) => {
      if (payload) {
        state.locale = payload.language_code ?? 'en'
      }
    })
  },
})

export const { set } = localeSlice.actions

export default localeSlice.reducer
