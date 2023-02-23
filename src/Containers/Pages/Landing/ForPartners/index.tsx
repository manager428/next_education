import React from 'react'

import { createGlobalStyle } from 'styled-components'

import {
  Contact,
  How,
  Partners,
  Sponsor,
  Subsidize,
  TopSection,
  Why,
} from './Components'
import { Container } from './styles'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const ForPartners: React.FC = () => (
  <Container width={1}>
    <GlobalStyle />

    <TopSection />

    <Partners />

    <Why />

    <How />

    <Sponsor />

    <Subsidize />

    <Contact />
  </Container>
)

export default ForPartners
