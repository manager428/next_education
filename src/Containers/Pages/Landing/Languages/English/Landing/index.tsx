import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { Container } from 'Containers/Pages/Landing/Languages/English/Landing/styles'

import {
  Companies,
  CorporateSocial,
  Discussions,
  Explore,
  PowerHours,
  Press,
  SaveEnvironment,
  Stats,
  TopSection,
  VirtualFields,
} from './Components'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const English: React.FC = () => (
  <Container backgroundColor="#F7FAFF" fullWidth={1}>
    <GlobalStyle />

    <TopSection />

    <Stats />

    <Press />

    <Explore />

    <SaveEnvironment />

    <VirtualFields />

    <PowerHours />

    <Discussions />

    <CorporateSocial />

    <Companies />
  </Container>
)

export default English
