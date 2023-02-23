import styled, { css } from 'styled-components'
import {
  fontSize,
  fontWeight,
  FontWeightProps,
  lineHeight,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { blogLikeGlyph } from 'Assets/svg/blog'

import { Flex, Icon } from 'Components/UI'

export const PostContainer = styled(Flex)`
  align-items: flex-start;
  align-content: flex-start;
  width: 470px;
  flex-wrap: wrap;

  pointer-events: all !important;
  user-select: all !important;
`

export const RelativeCont = styled(Flex)`
  position: relative;
`

export const EventDate = styled(Flex)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 10px 0 14px;
  font-weight: 600;
  font-size: 22px;
  color: #071d40;
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px 20px;
`

export const PostImage = styled.img`
  object-fit: cover;
  border-radius: 10px;

  width: 470px;
  height: 282px;
  align-self: flex-start;
`

export const PostInfo = styled(Flex)<FontWeightProps>`
  font-size: 16px;
  color: #6e46ff;

  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  ${fontSize};
  ${fontWeight};
`

export const PostTitle = styled(Flex).attrs({
  as: 'h2',
})`
  color: #071d40;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`

export const PostDescription = styled(Flex)`
  color: #828282;
  font-size: 18px;
  line-height: 24px;

  ${fontSize};
  ${lineHeight}
`

export const ReadMoreButton = styled.a`
  font-weight: 600;
  font-size: 16px;
  color: #6e46ff;
  text-decoration: none;
`

export const BlogLikeIcon = styled(Icon).attrs({
  icon: blogLikeGlyph,
  width: 22,
  height: 18,
})<{ isLiked?: boolean }>`
  fill: ${themeGet('colors.blueMid2')};

  ${props =>
    props.isLiked &&
    css`
      fill: ${themeGet('colors.green')};
    `}
`
