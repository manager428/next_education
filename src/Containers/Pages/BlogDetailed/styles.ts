import styled, { css } from 'styled-components'
import {
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  lineHeight,
  LineHeightProps,
  margin,
  MarginProps,
  width,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { blogLikeGlyph } from 'Assets/svg/blog'
import { unionGlyph } from 'Assets/svg/landing'

import { Flex, Icon } from 'Components/UI'

export const Background = styled.div<{ image?: string }>`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-repeat: repeat;
    `}
`

export const Container = styled(Flex)<MarginProps>`
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;

  ${margin}
`

export const Content = styled(Flex)`
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`

export const Category = styled(Flex)`
  background: #edf1fa;
  border-radius: 6px;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 10px;
`

export const PostAuthor = styled(Flex)`
  font-size: 18px;
  color: #071d40;
  flex-grow: 1;

  align-content: center;
  align-items: center;
`

export const Title = styled(Flex)`
  color: #071d40;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  justify-content: center;
  text-align: center;
`

export const LikesContainer = styled(Flex)`
  color: #071d40;
  font-size: 18px;
  align-items: center;
  align-content: center;
`

export const BlogLikeIcon = styled(Icon).attrs<any>({
  icon: blogLikeGlyph,
  width: 22,
  height: 18,
})<any>`
  fill: ${props =>
    props.isLiked ? themeGet('colors.green') : themeGet('colors.blueMid2')};
  cursor: pointer;
`

export const ShareButton = styled(Flex).attrs({
  as: 'button',
})`
  background: ${themeGet('colors.green')};
  border-radius: 5px;
  height: 22px;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  color: white;
  justify-content: space-between;
  border: 0px;
  padding: 0 8px;
  cursor: pointer;
  outline: 0px;
`

export const PostContent = styled(Flex)`
  flex-wrap: wrap;

  div {
    ul,
    li,
    a,
    p,
    span {
      font-size: 18px;
      line-height: 24px;
      color: #333333 !important;
      margin: 0 !important;
      font-family: 'Nunito Sans', sans-serif !important;
    }
  }
`

export const PostInfo = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  border-top: 2px solid #d3dae8;

  padding-top: 24px;
`

export const DateInfo = styled(Flex)`
  font-size: 14px;
  color: #071d40;
`

export const EventDate = styled(Flex)`
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  color: #071d40;
`

export const ContentSection = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 24px;

  white-space: pre-line;

  img {
    width: 100%;
    object-fit: contain;
  }
`

export const ContentHeader = styled(Flex).attrs({
  as: 'h3',
})`
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  font-family: 'Nunito Sans', sans-serif !important;

  span,
  strong,
  b,
  p,
  div {
    font-weight: 600 !important;
    font-size: 22px !important;
    line-height: 32px !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Nunito Sans', sans-serif !important;
  }
`

export const RelatedTitle = styled(Flex)`
  color: #071d40;
  font-weight: 600;
  font-size: 36px;
  justify-content: flex-start;
`

export const VideoSection = styled(Flex)`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
`

export const VideoWrap = styled(Flex)`
  width: 100%;
  height: 405px;
  font-size: 0;
  text-align: center;
  margin: 0 auto;
  position: relative;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;
  }

  video {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`

export const PostImage = styled.img`
  object-fit: cover;
  border-radius: 10px;

  ${width}
  ${height}
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

export const PostDescription = styled(Flex)<LineHeightProps>`
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

export const RelatedPostInfo = styled(Flex)<FontWeightProps>`
  font-size: 16px;
  color: #6e46ff;

  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  ${fontSize};
  ${fontWeight};
`

export const QuoteSection = styled(Flex)`
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 44px 40px;
  position: relative;
`

export const QuoteIcon = styled(Icon).attrs({
  icon: unionGlyph,
  fill: '#D3DAE8',
  height: 44,
  width: 25,
})<{
  rotated?: boolean
}>`
  transform: rotateY(180deg);

  ${props =>
    props.rotated &&
    css`
      transform: rotateX(180deg);
    `};
`

export const QuoteContent = styled(Flex)`
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  width: 100%;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  span,
  strong,
  b,
  p,
  div {
    font-weight: 600 !important;
    font-size: 22px !important;
    line-height: 32px !important;
    margin: 0;
    padding: 0;
  }
`

export const CommentResponseError = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 18px;
  color: rgb(255, 160, 140);
`

export const SocialContainer = styled(Flex)`
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  align-self: flex-start;

  a {
    display: flex;
  }
`

export const SocialIcon = styled(Icon).attrs({
  size: 22,
})``
