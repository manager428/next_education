/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useStore } from 'react-redux'
import { IntercomProvider } from 'react-use-intercom'
import { YMInitializer } from 'react-yandex-metrika'

import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'

import Main from 'Containers/Layout/Main'

import { INTERCOM_ID, IS_PRODUCTION, YANDEX_METRIC_KEY } from 'Config'

import useBoot from 'Hooks/useBoot'
import useLocale from 'Hooks/useLocale'
import usePageRoleProtect from 'Hooks/usePageRoleProtect'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'

import { fetchMe } from 'Store/me/thunks'
import { storeWrapper } from 'Store/Store'

import { LocaleRenderer } from 'Services/I18n'

import { GlobalStyle, MediaContextProvider, theme, ThemeProvider } from 'Theme'

import NotFound from './404'

function App({ Component, pageProps }: AppProps) {
  useBoot()

  const dispatch = useAppDispatch()
  const isAllowed = usePageRoleProtect()
  const store = useStore()
  const locale = useLocale()

  const auth = useAppSelector(state => state.auth)

  const RenderComponent = isAllowed ? Component : NotFound

  useEffect(() => {
    if (auth.accessToken) {
      dispatch(fetchMe())
    }
  }, [auth.accessToken])

  return (
    <>
      {IS_PRODUCTION && (
        <YMInitializer
          accounts={[+YANDEX_METRIC_KEY]}
          options={{ webvisor: true }}
        />
      )}

      <NextHead>
        {theme.webfonts.map(font => (
          <link
            crossOrigin="anonymous"
            href={`https://fonts.googleapis.com/css?family=${font}&display=swap`}
            key={font}
            rel="stylesheet"
          />
        ))}
      </NextHead>

      <PersistGate
        loading={null}
        // eslint-disable-next-line no-underscore-dangle,@typescript-eslint/ban-ts-comment
        // @ts-ignore
        persistor={store.__persistor}
      >
        {() => (
          <ThemeProvider theme={theme}>
            <GlobalStyle locale={locale} />
            <LocaleRenderer key={locale}>
              <IntercomProvider
                appId={INTERCOM_ID}
                autoBoot
                shouldInitialize={IS_PRODUCTION}
              >
                <MediaContextProvider>
                  <Main>
                    <RenderComponent {...pageProps} />
                  </Main>
                </MediaContextProvider>
              </IntercomProvider>
            </LocaleRenderer>
          </ThemeProvider>
        )}
      </PersistGate>
    </>
  )
}

export default storeWrapper.withRedux(App)
