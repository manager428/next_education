import React, { useCallback } from 'react'
import Masonry from 'react-masonry-css'

import InnerHTML from 'dangerously-set-html-content'
import Image from 'next/image'

import map from 'lodash/map'

import { Element, Flex } from 'Components/UI'

import {
  Container,
  Inner,
  MasonryBrick,
  Title,
} from 'Components/Blocks/Entities/Landing/Reviews/styles'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

type Review = {
  id: number
  avatar: string
  author: string
  country: string
  text: string
}

type Props = {
  data: Review[]
  title: string
}

// TODO rewrite!!!
const COLORS = {
  1: theme.colors.greenLight,
  2: theme.colors.white,
  3: theme.colors.orangeSecondary,
  4: theme.colors.white,
  5: theme.colors.greenLight,
  6: theme.colors.white,
  7: theme.colors.orangeSecondary,
  8: theme.colors.white,
  9: theme.colors.greenLight,
  10: theme.colors.white,
  11: theme.colors.orangeSecondary,
  12: theme.colors.white,
}

const Reviews: React.FC<Props> = ({ data, title }) => {
  const renderData = useCallback(
    () =>
      map(data, review => (
        <MasonryBrick backgroundColor={COLORS[review.id]} key={review.id}>
          <Flex>
            <Flex flexShrink={0} width={36}>
              <Image
                height={36}
                layout="fixed"
                objectFit="cover"
                src={review.avatar}
                unoptimized
                width={36}
              />
            </Flex>
            <Flex alignItems="center" flexWrap="wrap" ml="10px">
              <Element color="#333333" fontSize={18} fontWeight={600} width={1}>
                {review.author}
              </Element>
              {review.country && (
                <Element
                  color="#333333"
                  fontSize={14}
                  fontWeight={600}
                  mt="4px"
                  width={1}
                >
                  {review.country}
                </Element>
              )}
            </Flex>
          </Flex>
          <Element
            color="#333333"
            fontSize={14}
            lineHeight="20px"
            mt="10px"
            width={1}
          >
            {review.text}
          </Element>
        </MasonryBrick>
      )),
    [data],
  )
  return (
    <Container>
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Inner margin="0 auto" maxWidth={980}>
          <Title
            fontSize={36}
            justifyContent="center"
            lineHeight="36px"
            mb={32}
            textAlign="center"
            width={1}
          >
            <InnerHTML html={title} />
          </Title>

          <Masonry
            breakpointCols={3}
            className="my-gallery-class"
            columnClassName="my-masonry-grid_column"
          >
            {renderData()}
          </Masonry>
        </Inner>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Inner margin="0 auto" maxWidth={650}>
          <Title justifyContent="center" mb={32} textAlign="center" width={1}>
            <InnerHTML html={title} />
          </Title>

          <Masonry
            breakpointCols={2}
            className="my-gallery-class"
            columnClassName="my-masonry-grid_column"
          >
            {renderData()}
          </Masonry>
        </Inner>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Inner margin="0 auto" maxWidth={288}>
          <Title justifyContent="center" mb={32} textAlign="center" width={1}>
            <InnerHTML html={title} />
          </Title>

          <Masonry
            breakpointCols={1}
            className="my-gallery-class"
            columnClassName="my-masonry-grid_column"
          >
            {renderData()}
          </Masonry>
        </Inner>
      </Media>
    </Container>
  )
}

export default Reviews
