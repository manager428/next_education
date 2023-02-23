import { createAsyncThunk } from '@reduxjs/toolkit'

import { authApi } from 'Services/Api/requests'

export const fetchMe = createAsyncThunk('ME/fetch', async () => {
  const request = await authApi.me()

  return request?.data
})
