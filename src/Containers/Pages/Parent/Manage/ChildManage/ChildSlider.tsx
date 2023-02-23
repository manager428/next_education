import React, { useCallback, useEffect } from 'react'

import Carousel from 'nuka-carousel'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  Avatar,
  AvatarWrapper,
  Slide,
  SliderArrow,
  SliderContainer,
  SlideTitle,
} from './styles'
import { SlideType } from './types'

type Props = {
  selected: null | SlideType
  slides: Array<SlideType>
  locale: string
  onClick: (value: SlideType) => void
}

const ChildSlider: React.FC<Props> = ({ selected, slides, onClick }) => {
  useEffect(() => {
    if (slides.length > 1) {
      onClick(slides[0])
    }
  }, [slides])

  const renderSlides = useCallback(
    () =>
      map(slides, (slide, index) => {
        const isActive = !selected?.id ? false : selected.id === slide?.id

        return (
          <Slide key={index} onClick={() => onClick(slide)}>
            <AvatarWrapper active={isActive}>
              <Avatar src={slide.avatar} />
            </AvatarWrapper>
            <SlideTitle>{slide.title}</SlideTitle>
          </Slide>
        )
      }),
    [slides, selected],
  )

  return (
    <SliderContainer mt={28}>
      {slides.length > 4 ? (
        <Carousel
          dragging={false}
          initialSlideHeight={120}
          initialSlideWidth={210}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide, currentSlide }) => (
            <button type="button" onClick={previousSlide}>
              <SliderArrow disabled={currentSlide === 0} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide, currentSlide }) => (
            <button type="button" onClick={nextSlide}>
              <SliderArrow disabled={currentSlide === slides.length - 4} next />
            </button>
          )}
          renderTopCenterControls={null}
          slidesToShow={4}
          wrapAround={false}
        >
          {renderSlides()}
        </Carousel>
      ) : (
        <Flex justifyContent="center">{renderSlides()}</Flex>
      )}
    </SliderContainer>
  )
}

export default ChildSlider
