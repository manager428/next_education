import React from 'react'

import { createGlobalStyle } from 'styled-components'

import {
  MAP_REVIEWS,
  REVIEWS,
} from 'Containers/Pages/Landing/Languages/Russian/ForParents/reviews'
import { Container } from 'Containers/Pages/Landing/Languages/Russian/ForParents/styles'

import Reviews from 'Components/Blocks/Entities/Landing/Reviews'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import MapReviews from './Components/MapReviews'
import {
  Calendar,
  Contact,
  How,
  Learn,
  NewFriends,
  PerfectMatch,
  Pricing,
  Questions,
  Safety,
  Skills,
  TopSection,
  Video,
  WithUs,
} from './Components'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const ForParents: React.FC = () => (
  <Container width={1}>
    <GlobalStyle />

    <TopSection />

    <PerfectMatch />

    <WithUs />

    <Video />

    <How />

    <NewFriends />

    <Learn />

    <Skills />

    <Container pb={60} pt={60} width={1}>
      <Calendar />
    </Container>

    <Safety />

    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container width={1}>
        <MapReviews data={MAP_REVIEWS} />
      </Container>
    </Media>

    <Container width={1}>
      <Contact />
    </Container>

    <Container width={1}>
      <Pricing />
    </Container>

    <Container pb={60} pt={60} width={1}>
      <Reviews
        data={REVIEWS}
        title="Тысячи студентов делятся <span>своей любовью</span>"
      />
    </Container>

    <Container backgroundColor="#F7FAFF" pb={60} pt={60} width={1}>
      <Questions />
    </Container>
  </Container>
)

export default ForParents
