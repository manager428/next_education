import styled, { css } from 'styled-components'

import { commentsGlyph, likeGlyph, playVideoGlyph } from 'Assets/svg/common'
import {
  lectoriumImagesGlyph,
  videoExperienceGlyph,
} from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

export const Container = styled(Flex)`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 20px;
`

export const PostContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 296px;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #e9f1fc;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  user-select: all !important;
  pointer-events: all !important;

  @media (max-width: 1280px) {
    margin-right: 30px;
    margin-bottom: 25px;
  }
  @media (max-width: 1024px) {
    margin-right: 10px;
  }
  @media (max-width: 1023px) {
    margin-right: 24px;
  }
  @media (max-width: 660px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 100%;
    margin: 0px 10px;
  }
`

export const PostPreview = styled(Flex)`
  height: 166px;
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Status = styled(Flex)`
  position: absolute;
  right: 15px;
  top: 15px;
`

export const PlayIcon = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
`

export const PostWrapper = styled.div<{ color?: string }>`
  background-color: ${props => props.color || '#49ceb1'};
  padding-top: 10px;
  flex-grow: 1;
  align-content: flex-start;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const PostContent = styled(Flex)`
  background-color: white;
  flex-wrap: wrap;
  min-height: 122px;
  height: 100%;

  padding: 0px 20px 14px 14px;
`

export const PostTitle = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-top: 10px;
  min-height: 44px;
`

export const PostAuthor = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  margin-top: 8px;
`

export const PostInfo = styled(Flex)<{
  noLineHeight?: boolean
}>`
  font-size: 18px;
  color: #333;
  position: relative;
  cursor: pointer;
  align-items: center;
  align-content: center;
  ${props =>
    props.noLineHeight !== undefined &&
    css`
      line-height: 18px !important;
    `}
`

export const LikeIcon = styled(Icon).attrs({
  icon: likeGlyph,
  width: 18,
  height: 18,
})<{
  liked?: boolean
}>`
  position: relative;
  fill: #bdbdbd;
  margin-right: 8px;
  ${props =>
    props.liked &&
    css`
      fill: #dd85ad;
    `}
`

export const PostsIcon = styled(Icon).attrs({
  icon: lectoriumImagesGlyph,
  width: 18,
  height: 18,
})`
  position: relative;
  fill: #bdbdbd;
  margin-right: 8px;
`

export const CommentsIcon = styled(Icon).attrs({
  icon: commentsGlyph,
  width: 18,
  height: 18,
})`
  position: relative;
  fill: #bdbdbd;
  margin-right: 8px;
`

export const VideoIcon = styled(Icon).attrs({
  icon: videoExperienceGlyph,
  width: 18,
  height: 18,
})`
  position: relative;
  fill: #bdbdbd;
  margin-right: 8px;
`

export const Date = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;
  color: #bdbdbd;
  font-size: 16px;
`

export const PrivacyLabel = styled(Flex)`
  position: absolute;
  background: #49ceb1;
  border-radius: 5px;
  width: 62px;
  height: 20px;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  justify-content: center;
  bottom: 10px;
  right: 10px;
  align-items: center;
`
