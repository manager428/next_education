import React from 'react'

import Link from 'next/link'
import Carousel from 'nuka-carousel'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import BlogPost, {
  BlogPostType,
} from 'Components/Blocks/Entities/Blog/BlogPost'

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
  posts: Array<BlogPostType>
  title: string
  category: string
  showExplore?: boolean
}

const PostsSlider: React.FC<Props> = ({
  posts,
  title,
  category,
  showExplore = true,
}) => {
  const renderSlides = (): React.ReactNode =>
    map(posts, post => (
      <BlogPost
        category={post?.category}
        date={post?.date}
        description={post?.description}
        eventDate={post?.eventDate}
        id={post?.id}
        image={post?.image}
        isLiked={post?.isLiked}
        key={post?.id}
        likes={post?.likes}
        title={post?.title}
      />
    ))

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
        {category && showExplore && (
          <Link href={`${PUBLIC_PATHS.BLOG_CATEGORY(category)}`} passHref>
            <ListExploreButton>{_('buttons.exploreAll')}</ListExploreButton>
          </Link>
        )}
      </Flex>

      <Slider>
        <Carousel
          dragging={false}
          initialSlideHeight={292}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide, currentSlide }) => (
            <PrevButton disabled={currentSlide === 0} onClick={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide, currentSlide }) => (
            <NextButton
              disabled={
                typeof posts[currentSlide + 2] === 'undefined' ||
                posts.length <= 2
              }
              onClick={nextSlide}
            />
          )}
          renderTopCenterControls={null}
          slideWidth="510px"
          slidesToShow={2}
          width="980px"
        >
          {renderSlides()}
        </Carousel>
      </Slider>
    </SliderContainer>
  )
}

export default PostsSlider
