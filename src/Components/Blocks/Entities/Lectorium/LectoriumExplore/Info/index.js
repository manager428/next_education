import React from 'react'
import PropTypes from 'prop-types'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  Author,
  Category,
  Container,
  Date,
  Dot,
  LikeIcon,
  Likes,
  Text,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/Info/styles'

import { Media } from 'Theme'

import { MEDIA_SIZES } from '../../../../../../Constants/media'

const Info = ({
  category,
  level,
  duration,
  date,
  likesAmount,
  partners,
  isLiked,
  onLike,
}) => (
  <Container>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Flex alignContent="center" alignItems="center">
        <Category>{category.toUpperCase()}</Category>
        <Dot />
        <Text>{level}</Text>
        <Dot />
        <Text>{duration}</Text>
      </Flex>
      <Flex alignContent="center" alignItems="center">
        <Date>{date}</Date>
        <Likes>
          <LikeIcon liked={isLiked} onClick={onLike} />
          {likesAmount}
        </Likes>
      </Flex>
    </Media>
    <Media lessThan={MEDIA_SIZES.DESKTOP}>
      <Flex alignContent="center" alignItems="center">
        <Category>{category.toUpperCase()}</Category>
        <Dot />
        <Text>{level}</Text>
        <Dot />
        <Text>{duration}</Text>
      </Flex>
      <Flex alignContent="center" alignItems="center">
        <Date>{date}</Date>
        <Likes>
          <LikeIcon liked={isLiked} onClick={onLike} />
          {likesAmount}
        </Likes>
      </Flex>
    </Media>
    <Flex mt={14} width={1}>
      {map(partners, item => {
        const logo = get(item, 'logo')
        const name = get(item, 'name', '')
        const link = get(item, 'web_url', '')
        const isRounded = get(item, 'isRounded', false)

        return (
          <Author
            href={link}
            isRounded={isRounded}
            key={item.id}
            target="_blank"
          >
            {logo && <img alt="logo" src={logo} />}
            by {name}
          </Author>
        )
      })}
    </Flex>
  </Container>
)

Info.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired,
  likesAmount: PropTypes.number.isRequired,
  partners: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
}
export default Info
