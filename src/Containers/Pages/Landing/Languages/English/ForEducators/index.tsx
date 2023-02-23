import React from 'react'

import { createGlobalStyle } from 'styled-components'

import MapReviews from 'Components/Blocks/Entities/Landing/MapReviews'
import MoneyBack from 'Components/Blocks/Entities/Landing/MoneyBack'
import Reviews from 'Components/Blocks/Entities/Landing/Reviews'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import {
  BringLessons,
  Collaborate,
  Grow,
  Help,
  How,
  Pricing,
  StreamLine,
  TopSection,
} from './Components'
import { MAP_REVIEWS, REVIEWS } from './reviews'
import { Container } from './styles'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const ForEducators: React.FC = () => (
  <Container width={1}>
    <GlobalStyle />

    <TopSection />

    <Help />

    <How />

    <StreamLine />

    <Collaborate />

    <BringLessons />

    <Grow />

    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container width={1}>
        <MapReviews data={MAP_REVIEWS} />
      </Container>
    </Media>

    <Container pb={80} pt={60} width={1}>
      <Pricing />
    </Container>

    <Container backgroundColor="#F7FAFF" pb={80} pt={60} width={1}>
      <MoneyBack />
    </Container>

    <Container pb={80} pt={60} width={1}>
      <Reviews
        data={REVIEWS}
        title="Thousands of educators <span>share their love</span>"
      />
    </Container>
  </Container>
)

export default ForEducators
