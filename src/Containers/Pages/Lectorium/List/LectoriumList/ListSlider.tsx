import React from 'react'

import { DateTime } from 'luxon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Carousel from 'nuka-carousel'

import get from 'lodash/get'
import map from 'lodash/map'

import { carouselGlyph, carouseNotActivelGlyph } from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'

import LectoriumPost from 'Components/Blocks/Entities/Lectorium/LectoriumPost'

import { SHARE_EXPERIENCE_COUNT } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

import _ from 'Services/I18n'

import {
  ListExploreButton,
  ListTitle,
  NextButton,
  PrevButton,
  Slider,
  SliderContainer,
} from './styles'

type Props = {
  posts: any[]
  title: string
  category?: string | null
}

const ListSlider: React.FC<Props> = ({ posts, title, category = null }) => {
  const router = useRouter()

  const renderSlides = () =>
    map(posts, (post, index) => {
      const author = get(post, 'author_data.full_name', '')
      const likesCount = get(post, 'likes_count', 0)
      const id = get(post, 'id', 0)
      const postTitle = get(post, 'title', '')
      const type = get(post, 'share_experience', '')
      const postsAmount = get(post, SHARE_EXPERIENCE_COUNT[type], 0)
      const createdAt = DateTime.fromISO(get(post, 'created_at'))
      const preview = get(post, 'preview_url', '')
      const date = createdAt.toFormat('dd MMM yyyy')
      const postProgressStatus = get(post, 'post_progress_status', '')
      const privacy = get(post, 'privacy')
      const isLiked = get(post, 'is_liked', false)

      return (
        <LectoriumPost
          author={author}
          date={date}
          isLiked={isLiked}
          key={index}
          likes={likesCount}
          postsAmount={postsAmount}
          preview={preview}
          privacy={privacy}
          status={postProgressStatus}
          title={postTitle}
          type={type}
          onHandleClick={() => router.push(PUBLIC_PATHS.LECTORIUM_POST(id))}
        />
      )
    })

  if (posts.length === 0) return null

  return (
    <SliderContainer>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb={20}
        width={1}
      >
        <ListTitle>{title}</ListTitle>
        {category && (
          <Link href={`/lectorium?category=${category}`} passHref>
            <ListExploreButton>{_('buttons.exploreAll')}</ListExploreButton>
          </Link>
        )}
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
                  disabled={isDisabled}
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
          {renderSlides()}
        </Carousel>
      </Slider>
    </SliderContainer>
  )
}

export default ListSlider
