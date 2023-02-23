import React from 'react'

import { createGlobalStyle } from 'styled-components'

import {
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
  student11,
  student12,
} from 'Assets/images/landing/reviews/students'

import {
  Calendar,
  Companies,
  How,
  Learn,
  NewFriends,
  PerfectMatch,
  Pricing,
  Questions,
  Safety,
  Skills,
  TopSection,
  WithUs,
} from 'Containers/Pages/Landing/Languages/English/ForParents/Components'
import { Container } from 'Containers/Pages/Landing/Languages/English/ForParents/styles'

import MapReviews from 'Components/Blocks/Entities/Landing/MapReviews'
import MoneyBack from 'Components/Blocks/Entities/Landing/MoneyBack'
import Reviews from 'Components/Blocks/Entities/Landing/Reviews'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const REVIEWS = [
  {
    id: 1,
    text:
      'When I log into iDialogue from India and read the posts of students from other countries...I think I better understand their mentality and this is very unusual, for me iDialogue is like a window to another dimension..',
    author: 'Rishab B.',
    country: 'India',
    avatar: student1.src,
  },
  {
    id: 2,
    text: 'To sum up my experience with iDialogue: Beyond my imagination!',
    author: 'Musana',
    country: 'Canada',
    avatar: student2.src,
  },
  {
    id: 3,
    text: 'This is an awesome platform! Thank you!',
    author: 'Diego H.',
    country: 'Spain',
    avatar: student3.src,
  },
  {
    id: 4,
    text:
      "I've been using this platform for a very long time. I want to say thanks to creators, I have found friends here, I love them, I'm eager to learn.",
    author: 'Johanna',
    country: 'Mexico',
    avatar: student4.src,
  },
  {
    id: 5,
    text:
      'My teacher loves giving us different activities. One day she said "You will make different friends». I was happy to hear that and it was true. Using iDialogue platform I made a new friend  who lives in another country. Thank you very much!!',
    author: 'Kartik K.',
    country: 'Indonesia',
    avatar: student5.src,
  },

  {
    id: 6,
    text: "My English is very good now and I've made many friends here.",
    author: 'Lam T.',
    country: 'Indonesia',
    avatar: student6.src,
  },

  {
    id: 7,
    text:
      'I like virtual tours. They allow me to see new places. And I can also learn a lot about other cultures.',
    author: 'Kim L.',
    country: 'Vietnam',
    avatar: student7.src,
  },
  {
    id: 8,
    text:
      'I was surprised to know that children who live far away are very interesting. They have the same interests, hobbies, and sometimes they share the same culture and traditions.',
    author: 'Annushka G.',
    country: 'India',
    avatar: student8.src,
  },
  {
    id: 9,
    text:
      'This platform helps me to share my country with others through letters and phone calls and find that I really like them too.',
    author: 'Valerio K.',
    country: 'Brazil',
    avatar: student9.src,
  },
  {
    id: 10,
    text:
      'The pandemic has made us stuck at home. But iDialogue helps to meet new people, visit different places and stay in touch with peers.',
    author: 'Sofia P.',
    country: 'USA',
    avatar: student10.src,
  },
  {
    id: 11,
    text:
      'I love iDialogue challenges because they help me to tell others about my country and learn more about the world.',
    author: 'Marry K.',
    country: 'Greece',
    avatar: student11.src,
  },
  {
    id: 12,
    text:
      'On one of the virtual tours, I was happy to explore the place I had just dreamed of! Thank you!',
    author: 'Camelia H.',
    country: 'Peru',
    avatar: student12.src,
  },
]

const MAP_REVIEWS = [
  {
    id: 1,
    review: 'To sum up my experience with iDialogue: Beyond my imagination!',
    author: 'Musana',
    avatar: student2.src,
    coords: {
      top: 113,
      left: 90,
    },
  },
  {
    id: 2,
    review:
      "I've been using this platform for a very long time. I want to say thanks to creators, I have found friends here, I love them, I'm eager to learn.",
    author: 'Johanna',
    avatar: student4.src,
    coords: {
      top: 200,
      left: 95,
    },
  },
  {
    id: 3,
    review:
      'On one of the virtual tours, I was happy to explore the place I had just dreamed of! Thank you!',
    author: 'Camelia H.',
    avatar: student12.src,
    coords: {
      top: 300,
      left: 150,
    },
  },
  {
    id: 4,
    review: 'This is an awesome platform! Thank you!',
    author: 'Diego H.',
    avatar: student3.src,
    coords: {
      top: 165,
      left: 300,
    },
  },
  {
    id: 5,
    review:
      'I love iDialogue challenges because they help me to tell others about my country and learn more about the world.',
    author: 'Marry K.',
    avatar: student11.src,
    coords: {
      top: 165,
      left: 375,
    },
  },
  {
    id: 6,
    review:
      'This platform helps me to share my country with others through letters and phone calls and find that I really like them too.',
    author: 'Valerio K.',
    avatar: student9.src,
    coords: {
      top: 290,
      left: 220,
    },
  },
  {
    id: 7,
    review:
      'My teacher loves giving us different activities. One day she said "You will make different friends». I was happy to hear that and it was true. Using iDialogue platform I made a new friend  who lives in another country. Thank you very much!!',
    author: 'Kartik K.',
    avatar: student5.src,
    coords: {
      top: 260,
      left: 530,
    },
  },
]

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const ForParents: React.FC = () => (
  <Container width={1}>
    <GlobalStyle />

    <TopSection />

    <Companies />

    <PerfectMatch />

    <WithUs />

    <How />

    <NewFriends />

    <Learn />

    <Skills />

    <Container backgroundColor="#F7FAFF" pb={60} pt={60} width={1}>
      <Calendar />
    </Container>

    <Safety />

    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container width={1}>
        <MapReviews data={MAP_REVIEWS} />
      </Container>
    </Media>

    <Container pb={60} pt={60} width={1}>
      <Pricing />
    </Container>

    <Container backgroundColor="#F7FAFF" pb={60} pt={60} width={1}>
      <MoneyBack />
    </Container>

    <Container pb={60} pt={60} width={1}>
      <Reviews
        data={REVIEWS}
        title="Thousands of students <span>share their love</span>"
      />
    </Container>

    <Container backgroundColor="#F7FAFF" pb={60} pt={60} width={1}>
      <Questions />
    </Container>
  </Container>
)

export default ForParents
