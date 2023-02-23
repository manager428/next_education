import React from 'react'

import Link from 'next/link'
import Carousel from 'nuka-carousel'

import get from 'lodash/get'
import map from 'lodash/map'

import { carouselGlyph, carouseNotActivelGlyph } from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'

import { PUBLIC_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

import {
  ListDescription,
  ListTitle,
  NextButton,
  PrevButton,
  ProjectImage,
  ProjectTitle,
  Slider,
  SliderContainer,
  SpecialProjectPost,
} from './styles'

type SpecialProject = {
  id: number
  name: string
  slug: string
  logo: string // url
}

type Props = {
  posts: Array<SpecialProject>
}

const SpecialProjectsSlider: React.FC<Props> = ({ posts }) => {
  const s = useScopedI18n('lectorium')
  const renderPosts = () =>
    map(posts, post => (
      <Link
        href={`${PUBLIC_PATHS.LECTORIUM_SPECIAL_PROJECT(post.slug)}`}
        key={post.id}
        passHref
      >
        <SpecialProjectPost>
          <ProjectImage height={1} src={post.logo} width={1} />
          <ProjectTitle>{get(post, 'name')}</ProjectTitle>
        </SpecialProjectPost>
      </Link>
    ))

  if (posts.length === 0) return null

  return (
    <SliderContainer withBorder={1}>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        mb={20}
        width={1}
      >
        <ListTitle>{s('view.specialProjects')}</ListTitle>
        <ListDescription>
          {s('view.specialProjectsDescription')}
        </ListDescription>
      </Flex>

      <Slider>
        <Carousel
          dragging={false}
          initialSlideHeight={286}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide, currentSlide }) => {
            const isDisabled = currentSlide === 0
            return (
              <button type="button" onClick={previousSlide}>
                <PrevButton
                  disabled={isDisabled}
                  icon={isDisabled ? carouseNotActivelGlyph : carouselGlyph}
                />
              </button>
            )
          }}
          renderCenterRightControls={({ nextSlide, currentSlide }) => {
            const isDisabled =
              typeof posts[currentSlide + 3] === 'undefined' ||
              posts.length <= 3

            return (
              <button type="button" onClick={nextSlide}>
                <NextButton
                  icon={isDisabled ? carouseNotActivelGlyph : carouselGlyph}
                />
              </button>
            )
          }}
          renderTopCenterControls={null}
          slideWidth="342px"
          slidesToShow={3}
          width="980px"
        >
          {renderPosts()}
        </Carousel>
      </Slider>
    </SliderContainer>
  )
}

export default SpecialProjectsSlider
