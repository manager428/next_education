import styled from 'styled-components'
import {
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  lineHeight,
  LineHeightProps,
  width,
} from 'styled-system'

import { blogLikeGlyph } from 'Assets/svg/blog'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
`

export const PostImage = styled.img`
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;

  ${width}
  ${height}
`

export const PostInfo = styled(Flex)<FontWeightProps & FontSizeProps>`
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
})<LineHeightProps & FontSizeProps>`
  color: #071d40;
  font-weight: 600;
  line-height: 36px;

  ${fontSize};
  ${lineHeight};
`

export const PostDescription = styled(Flex)<LineHeightProps & FontSizeProps>`
  color: #828282;

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
  fill: '#D3DAE8',
})``
