import React from 'react'

import { createGlobalStyle } from 'styled-components'

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
} from 'Containers/Pages/Landing/Languages/Russian/Landing/Components'
import { Container } from 'Containers/Pages/Landing/Languages/Russian/Landing/styles'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const Russian: React.FC = () => (
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

export default Russian
