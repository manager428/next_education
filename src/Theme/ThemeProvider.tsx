import React from 'react'

import styled, { ThemeProvider as BaseThemeProvider } from 'styled-components'

import theme from './defaultTheme'

const Base = styled.div`
  height: 100%;
  width: 100%;
`

type Props = {
  theme: {
    font: string
  }
}

const ThemeProvider: React.FC<Props> = props => (
  <BaseThemeProvider theme={{ ...theme, ...props.theme }}>
    <Base {...props} />
  </BaseThemeProvider>
)

export default ThemeProvider
