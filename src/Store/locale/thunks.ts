import { createAsyncThunk } from '@reduxjs/toolkit'

import { set as setLocale } from 'Store/locale/slice'

import { initTranslations } from 'Services/I18n'

export const setLocaleThunk = createAsyncThunk(
  'locale/setLocale',
  async (params: { locale: string }, ThunkAPI) => {
    const { locale } = params

    initTranslations(locale)
    ThunkAPI.dispatch(setLocale({ locale }))
  },
)
