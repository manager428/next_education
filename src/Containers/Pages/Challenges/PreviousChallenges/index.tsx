import React, { useEffect, useState } from 'react'

import Carousel from 'nuka-carousel'
import SimpleBarReact from 'simplebar-react'

import get from 'lodash/get'
import map from 'lodash/map'
import orderBy from 'lodash/orderBy'

import Loader from 'Components/UI/Loader'

import { challengesApi } from 'Services/Api/requests'
import { useScopedI18n } from 'Services/I18n'

import Arrow from './Arrow'
import {
  BlockPreviousChallenges,
  Container,
  Slide,
  WinnerTitle,
} from './styles'
import Winner from './Winner'

import 'simplebar/dist/simplebar.min.css'

const SLIDES = [
  {
    title: 'Cross-cultural iDialogue Challenge',
    date: '11 Feb 2019',
    image:
      'https://s3.eu-central-1.amazonaws.com/idialogue.io/app/challenges/images/1591557555-cross_cult_image.png',
  },
]

type Props = {
  handleOpenModal: (id: number) => void
  posts: []
}

const PreviousChallenges: React.FC<Props> = ({
  handleOpenModal,
  posts = [],
}) => {
  const s = useScopedI18n('challenges')

  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [participants, setParticipants] = useState([])
  const [winners, setWinners] = useState([])
  const [isLoadingParticipants, setLoadingParticipants] = useState(false)

  useEffect(() => {
    setWinners(posts)
  }, [posts])

  const renderWinnerTitle = (title: string) => (
    <WinnerTitle>{title}</WinnerTitle>
  )

  const renderOnlyWinners = (winnersPosts: any) => {
    const category = SLIDES[selectedSlide].title

    return map(winnersPosts[category], (item, index: number) => {
      if (index === 0 || index === 3) {
        return (
          <div key={index} style={{ marginBottom: '25px' }}>
            {index === 0
              ? renderWinnerTitle('Our Pick')
              : renderWinnerTitle("People's choice")}
            <Winner
              currentIndex={index}
              type="winner"
              winnerData={item}
              onOpen={handleOpenModal}
            />
          </div>
        )
      }
      return (
        <Winner
          currentIndex={index}
          key={index}
          type="winner"
          winnerData={item}
          onOpen={handleOpenModal}
        />
      )
    })
  }

  const loadAllParticipants = async () => {
    setLoadingParticipants(true)

    const category = SLIDES[selectedSlide].title
    const all = selectedTab === 0

    setSelectedTab(1)

    const response = await challengesApi.loadParticipants(category, all)

    const orderedParticipants = orderBy(
      get(response, 'data', []),
      participant => participant.place.length > 0,
      ['desc'],
    )

    setParticipants(orderedParticipants as [])
    setLoadingParticipants(false)
  }

  const renderParticipants = () =>
    participants.map((item: any) => (
      <Winner
        key={item.id}
        type="all"
        winnerData={item}
        onOpen={handleOpenModal}
      />
    ))

  const renderPosts = () => {
    if (selectedTab === 0) {
      return renderOnlyWinners(winners)
    }

    return renderParticipants()
  }

  const handleSelectSlide = (index: number) => {
    setSelectedSlide(index)
  }

  const moveNext = () => {
    const nextSlide = selectedSlide + 1
    if (nextSlide <= SLIDES.length - 1) {
      setSelectedTab(0)
      handleSelectSlide(nextSlide)
    }
  }

  const moveBack = () => {
    const backSlide = selectedSlide - 1

    if (backSlide >= 0) {
      setSelectedTab(0)
      handleSelectSlide(backSlide)
    }
  }

  const renderSlides = () =>
    map(SLIDES, (slide, index) => (
      <Slide key={index}>
        <div className="content">
          <div className="left-part">
            <img alt="" src={slide.image} />
          </div>
          <div className="right-part">
            <div className="tabs-wrapper">
              <button
                className={selectedTab === 0 ? 'sub-title active' : 'sub-title'}
                type="button"
                onClick={() => setSelectedTab(0)}
              >
                {s('winners')}
              </button>
              <button
                className={selectedTab === 1 ? 'sub-title active' : 'sub-title'}
                type="button"
                onClick={() => loadAllParticipants()}
              >
                {s('allParticipants')}
              </button>
            </div>

            {isLoadingParticipants && <Loader height={100} width={100} />}

            <SimpleBarReact style={{ maxHeight: '325px' }}>
              {renderPosts()}
            </SimpleBarReact>
          </div>
        </div>
        <div className="challenge-info">
          <div className="challenge-title">{slide.title}</div>
          <div className="challenge-date">{slide.date}</div>
        </div>
      </Slide>
    ))

  return (
    <BlockPreviousChallenges>
      <div className="title">{s('previousChallenges')}</div>
      <Container>
        <Carousel
          afterSlide={index => handleSelectSlide(index)}
          autoplay={false}
          initialSlideHeight={405}
          renderBottomCenterControls={null}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderTopCenterControls={null}
          slideIndex={selectedSlide}
        >
          {renderSlides()}
        </Carousel>
      </Container>
      <div className="slider-navigator">
        <button
          className={selectedSlide > 0 ? 'move-left active' : 'move-left'}
          type="button"
          onClick={() => moveBack()}
        >
          <Arrow />
        </button>
        <button
          className={
            selectedSlide < SLIDES.length - 1
              ? 'move-right active'
              : 'move-right'
          }
          type="button"
          onClick={() => moveNext()}
        >
          <Arrow />
        </button>
        <div className="count-items">
          <span className="active">0{selectedSlide + 1}</span>/0
          {SLIDES.length}
        </div>
      </div>
    </BlockPreviousChallenges>
  )
}

export default PreviousChallenges
