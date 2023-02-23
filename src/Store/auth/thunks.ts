import { createAsyncThunk } from '@reduxjs/toolkit'

import { reset as resetAuth } from 'Store/auth/slice'
import { set as setLocale } from 'Store/locale/slice'
import { reset as resetMe } from 'Store/me/slice'

import { authApi } from 'Services/Api/requests'
import AuthService from 'Services/Auth'
import SocketService from 'Services/Socket'

export const logout = createAsyncThunk(
  'auth/logout',
  async (params: { withApiLogout: boolean }, ThunkAPI) => {
    const Socket = SocketService.getInstance()

    if (params.withApiLogout) {
      await authApi.logOut()
    }

    await Socket.disconnectSocket()
    await AuthService.logout()

    if (params.withApiLogout) {
      await authApi.logOut()
    }

    ThunkAPI.dispatch(setLocale({ locale: 'en' }))
    ThunkAPI.dispatch(resetAuth())
    ThunkAPI.dispatch(resetMe())
  },
)
