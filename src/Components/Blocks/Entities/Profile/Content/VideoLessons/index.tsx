import React from 'react'

import { DateTime } from 'luxon'
import { useRouter } from 'next/router'
import Carousel from 'nuka-carousel'

import get from 'lodash/get'
import map from 'lodash/map'

import LectoriumPost from 'Components/Blocks/Entities/Lectorium/LectoriumPost'
import {
  BlockTitle,
  BlockTitleViewAllText,
  ContentTitleText,
} from 'Components/Blocks/Entities/Profile/styles'

import { SHARE_EXPERIENCE_COUNT } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

import _, { useScopedI18n } from 'Services/I18n'

import { Container, Dot, SliderArrow, SliderButton } from './styles'

type Props = {
  onViewAll: () => void
  posts: Array<any>
  totalCount: number
}

const VideoLessons: React.FC<Props> = ({ onViewAll, posts, totalCount }) => {
  const router = useRouter()
  const s = useScopedI18n('profile.content.videoLessons')

  const renderSlides = () =>
    map(posts, (post, index) => {
      const author = get(post, 'author_data.full_name', '')
      const likesCount = get(post, 'likes_count', 0)
      const title = get(post, 'title', '')
      const type = get(post, 'share_experience', '')
      const postsAmount = get(post, SHARE_EXPERIENCE_COUNT[type], 0)
      const preview = get(post, 'preview_url', '')
      const date = DateTime.fromISO(get(post, 'created_at')).toFormat(
        'dd MMM yyyy',
      )
      const id = get(post, 'id', 0)
      const status = get(post, 'status', 0)
      const privacy = get(post, 'privacy', '')
      const isLiked = get(post, 'is_liked', false)

      return (
        <LectoriumPost
          author={author}
          color={null}
          date={date}
          isLiked={isLiked}
          key={index}
          likes={likesCount}
          postsAmount={postsAmount}
          preview={preview}
          privacy={privacy}
          status={status}
          title={title}
          type={type}
          onHandleClick={() => router.push(PUBLIC_PATHS.LECTORIUM_POST(id))}
        />
      )
    })

  return (
    <Container>
      <BlockTitle>
        <ContentTitleText>
          {s('title')} <Dot /> {totalCount}
        </ContentTitleText>
        <BlockTitleViewAllText onClick={onViewAll}>
          {_('buttons.viewAll')}
        </BlockTitleViewAllText>
      </BlockTitle>

      {posts && posts.length > 0 ? (
        <Carousel
          autoplay={false}
          initialSlideHeight={288}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide, currentSlide }) => (
            <SliderButton
              active={currentSlide !== 0}
              type="prev"
              onClick={previousSlide}
            >
              <SliderArrow />
            </SliderButton>
          )}
          renderCenterRightControls={({ nextSlide, currentSlide }) => (
            <SliderButton
              active={currentSlide !== posts.length - 2 && posts.length > 2}
              type="next"
              onClick={nextSlide}
            >
              <SliderArrow />
            </SliderButton>
          )}
          renderTopCenterControls={null}
          slideIndex={0}
          slideWidth="335px"
          slidesToShow={2}
        >
          {renderSlides()}
        </Carousel>
      ) : (
        s('noLectoriumFound')
      )}
    </Container>
  )
}

export default VideoLessons
