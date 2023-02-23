import React, { useCallback, useState } from 'react'

import Carousel from 'nuka-carousel'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { useScopedI18n } from 'Services/I18n'

import {
  CommentsIcon,
  Container,
  CountryFlag,
  Dots,
  ItemComments,
  ItemCommentsLikes,
  LikeIcon,
  OurPickIcon,
  PlayButton,
  PostTitle,
  Slide,
  SlideName,
  SlidePreview,
  SlidePreviewContainer,
  Slider,
  SliderButton,
  SliderDot,
  SliderHeader,
  Title,
  UserChoiceIcon,
  WinnerAvatar,
  WinnerText,
} from './styles'

const CHOICE_CATEGORIES = {
  our_choice: 'Our Pick',
  peoples_choice: "People's Choice",
  users_choice: 'Special Awards',
}

type Props = {
  data?: Record<string, any>
  isLoading: boolean
  onClick: (id: number) => void
}

const Winners: React.FC<Props> = ({ data = {}, onClick, isLoading }) => {
  const s = useScopedI18n('challenges')
  const [slideIndex, setSlideIndex] = useState(0)
  const sortedData = {
    our_choice: data?.our_choice,
    peoples_choice: data?.peoples_choice,
  }

  const handleChangeSlide = (type?: string) => {
    const totalSlideLength = Object.values(data).length

    if (type === 'prev') {
      if (slideIndex - 1 < 0) {
        setSlideIndex(totalSlideLength - 1)
      } else {
        setSlideIndex(slideIndex - 1)
      }
    }

    if (slideIndex + 1 > totalSlideLength - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }

  const renderSlides = useCallback(
    () =>
      map(sortedData, (slide, index: string) => {
        const isOrderArray = index === 'peoples_choice'
        const isShowPlaces = true
        let WinnerIcon: any

        switch (index) {
          case 'our_choice':
            WinnerIcon = OurPickIcon
            break
          case 'peoples_choice':
            WinnerIcon = UserChoiceIcon
            break
          default:
            WinnerIcon = UserChoiceIcon
            break
        }

        return (
          <Flex
            className="wrap"
            justifyContent="space-between"
            key={index}
            width={1}
          >
            {map(slide, (post, ind: string | number) => {
              const previewImage = get(post, 'image')
              const id = get(post, 'id')
              const avatar = get(post, 'author_data.avatar')
              const title = get(post, 'title')
              const likesCount = get(post, 'likes_count', 0)
              const commentsCount = get(post, 'comments_count', 0)
              const countryFlag = get(post, 'author_data.country_flag', '')
              const fullName = get(post, 'author_data.full_name')

              let placeOriginal
              let place

              if (isOrderArray) {
                switch (ind) {
                  case 0:
                    placeOriginal = 2
                    place = '2nd Place'
                    break
                  case 1:
                    placeOriginal = 1
                    place = '1st Place'
                    break
                  default:
                    placeOriginal = 3
                    place = '3d Place'
                }
              } else {
                placeOriginal = get(post, 'place_original')
                place = get(post, 'place')
              }

              return (
                <Slide
                  firstplace={placeOriginal === 1 ? true : undefined}
                  key={ind}
                  onClick={() => onClick(id)}
                >
                  <SlidePreviewContainer>
                    <WinnerIcon
                      firstplace={placeOriginal === 1 ? 'true' : undefined}
                      winnerplace={placeOriginal || undefined}
                    />
                    <SlidePreview
                      firstplace={placeOriginal === 1 ? 'true' : undefined}
                      src={previewImage}
                    />
                    <PlayButton />
                    <WinnerAvatar src={avatar} />
                  </SlidePreviewContainer>
                  <Flex flexWrap="wrap" mt={20} width={1}>
                    <WinnerText fontWeight="600" mb={10}>
                      {isShowPlaces && place} <CountryFlag src={countryFlag} />
                    </WinnerText>
                    <PostTitle mb={10}>{title}</PostTitle>
                    <WinnerText fontWeight="400">{fullName}</WinnerText>
                  </Flex>
                  <Flex justifyContent="center" mt={14} width={1}>
                    <ItemCommentsLikes>
                      <LikeIcon fill="#DD85AD" />
                      {likesCount}
                    </ItemCommentsLikes>
                    <Flex ml="14px">
                      <ItemComments>
                        <CommentsIcon />
                        {commentsCount}
                      </ItemComments>
                    </Flex>
                  </Flex>
                </Slide>
              )
            })}
          </Flex>
        )
      }),
    [sortedData, slideIndex],
  )

  return (
    <Container>
      <Title>{s('previousWinners')}</Title>

      {isLoading ? (
        <Flex minHeight="500px" width={1}>
          <Loader height={100} width={100} />
        </Flex>
      ) : (
        <>
          <SliderHeader>
            <button type="button" onClick={() => handleChangeSlide('prev')}>
              <SliderButton type="left" />
            </button>

            <SlideName>
              {get(
                Object.values(CHOICE_CATEGORIES),
                [slideIndex],
                CHOICE_CATEGORIES.our_choice,
              )}
            </SlideName>
            <button type="button" onClick={() => handleChangeSlide()}>
              <SliderButton />
            </button>
          </SliderHeader>
          <Slider>
            <Carousel
              afterSlide={index => setSlideIndex(index)}
              autoplay={data.length > 1}
              autoplayInterval={3000}
              dragging={false}
              initialSlideHeight={260}
              renderBottomCenterControls={null}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              renderTopCenterControls={null}
              slideIndex={slideIndex}
              slidesToShow={1}
              width="980px"
            >
              {renderSlides()}
            </Carousel>
          </Slider>
          <Dots>
            {map(Object.keys(data), (it, index) =>
              get(data, it, []).length > 0 ? (
                <SliderDot
                  active={+index === slideIndex}
                  key={index}
                  onClick={() => setSlideIndex(index)}
                />
              ) : null,
            )}
          </Dots>
        </>
      )}
    </Container>
  )
}

export default Winners
