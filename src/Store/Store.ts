import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { APP_NAME } from 'Config'

import authReducer from './auth/slice'
import localeReducer from './locale/slice'
import meReducer from './me/slice'
import modalsReducer from './modals/slice'

const combinedReducers = combineReducers({
  me: meReducer,
  auth: authReducer,
  modals: modalsReducer,
  locale: localeReducer,
})

export const makeStore = () => {
  const persistConfig = {
    key: APP_NAME as string,
    whitelist: ['me', 'auth', 'locale'],
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, combinedReducers)

  const store = configureStore({
    devTools: process.env.NODE_ENV === 'development',
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  // eslint-disable-next-line no-underscore-dangle,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  store.__persistor = persistStore(store) // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

  return store
}

export const storeWrapper = createWrapper(makeStore as MakeStore)

const store = makeStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
