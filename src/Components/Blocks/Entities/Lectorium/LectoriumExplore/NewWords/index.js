import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'
import Carousel from 'nuka-carousel'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import Checkbox from 'Components/UI/Checkbox'

import {
  Card,
  CheckBoxWrapper,
  Container,
  Description,
  GotIt,
  NextButton,
  PrevButton,
  Slider,
  Title,
  Word,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/NewWords/styles'
import { SignIn } from 'Components/Blocks/Popups'

import { Media } from 'Theme'

import { MEDIA_SIZES } from '../../../../../../Constants/media'
import useWindowDimensions from '../../../../Header/Hooks/useWindowSize'

const NewWords = ({ data, isFinished, isLogged, onFinish }) => {
  const [words, setWords] = useState(
    map(data, word => ({ ...word, isRead: isFinished })),
  )

  useEffect(() => {
    setWords(map(data, word => ({ ...word, isRead: isFinished })))
  }, [data])

  const [isShowSignIn, setShowSignIn] = useState(false)

  const handleReadWord = id => {
    if (!isLogged) {
      setShowSignIn(true)

      return
    }

    if (isFinished) return

    const updatedWords = map(words, word => {
      if (id === word.id) {
        return { ...word, isRead: !word.isRead }
      }
      return word
    })
    const readeWordsCount = filter(updatedWords, word => word.isRead).length

    if (readeWordsCount === updatedWords.length) {
      onFinish()
    }

    setWords(updatedWords)
  }

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const renderSlides = () =>
    map(words, (word, index) => {
      const id = get(word, 'id')
      const isRead = get(word, 'isRead', false)
      const title = get(word, 'word', '')
      const description = get(word, 'description', '')

      return (
        <Card className={`word${index}`} key={index}>
          <Word>{title}</Word>
          <Description>
            <InnerHTML html={description} />
          </Description>
          <GotIt checked={isRead} onClick={() => handleReadWord(id)}>
            <CheckBoxWrapper>
              <Checkbox
                checked={isRead}
                id={`newWord-checkbox-${id}`}
                value=""
              />
            </CheckBoxWrapper>
            <span>GOT IT</span>
          </GotIt>
        </Card>
      )
    })
  const { width } = useWindowDimensions()
  const [responsive, setResponsive] = useState(false)

  useEffect(() => {
    if (width && width < 560) {
      setResponsive(true)
    } else {
      setResponsive(false)
    }
  }, [width])
  const readeWords = filter(words, word => word.isRead).length
  return (
    <Container>
      {isShowSignIn && (
        <SignIn bottom="10px" isOpen left="400px" onClose={handleCloseSignIn} />
      )}

      <Title>
        Learn New Words: {readeWords}/{words.length}
      </Title>
      <Slider>
        <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
          <Carousel
            className="carousel-container"
            dragging={false}
            initialSlideHeight={320}
            renderBottomCenterControls={null}
            renderCenterLeftControls={({ previousSlide, currentSlide }) => (
              <PrevButton
                disabled={currentSlide === 0}
                prev
                onClick={previousSlide}
              />
            )}
            renderCenterRightControls={({ nextSlide, currentSlide }) => (
              <NextButton
                disabled={currentSlide === 3 || words.length <= 3}
                onClick={nextSlide}
              />
            )}
            renderTopCenterControls={null}
            slidesToShow={3}
            width="850px"

            // slideIndex={selectedSlide}
          >
            {renderSlides()}
          </Carousel>
        </Media>
        {!responsive ? (
          <Media lessThan={MEDIA_SIZES.DESKTOP}>
            <Carousel
              className="carousel-container"
              dragging={false}
              initialSlideHeight={320}
              renderBottomCenterControls={null}
              renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                <PrevButton
                  disabled={currentSlide === 0}
                  prev
                  onClick={previousSlide}
                />
              )}
              renderCenterRightControls={({ nextSlide, currentSlide }) => (
                <NextButton
                  disabled={currentSlide === 3 || words.length <= 3}
                  onClick={nextSlide}
                />
              )}
              renderTopCenterControls={null}
              slidesToShow={2}
              width="850px"

              // slideIndex={selectedSlide}
            >
              {renderSlides()}
            </Carousel>
          </Media>
        ) : (
          <Media lessThan={MEDIA_SIZES.DESKTOP}>
            <Carousel
              className="carousel-container"
              dragging={false}
              initialSlideHeight={320}
              renderBottomCenterControls={null}
              renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                <PrevButton
                  disabled={currentSlide === 0}
                  prev
                  onClick={previousSlide}
                />
              )}
              renderCenterRightControls={({ nextSlide, currentSlide }) => (
                <NextButton
                  disabled={currentSlide === 3 || words.length <= 3}
                  onClick={nextSlide}
                />
              )}
              renderTopCenterControls={null}
              slidesToShow={1}
              width="280px"

              // slideIndex={selectedSlide}
            >
              {renderSlides()}
            </Carousel>
          </Media>
        )}
      </Slider>
    </Container>
  )
}

NewWords.defaultProps = {
  isFinished: false,
  isLogged: true,
  onFinish: () => null,
}

NewWords.propTypes = {
  data: PropTypes.array.isRequired,
  isFinished: PropTypes.bool,
  isLogged: PropTypes.bool,
  onFinish: PropTypes.func,
}

export default NewWords
