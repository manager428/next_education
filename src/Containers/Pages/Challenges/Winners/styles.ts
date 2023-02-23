import styled, { css } from 'styled-components'

import {
  ourPickFirstGlyph,
  ourPickSecondGlyph,
  ourPickThirdGlyph,
  sliderArrowRightGlyph,
  userChoiceFirstGlyph,
  userChoiceSecondGlyph,
  userChoiceThirdGlyph,
} from 'Assets/svg/challenges'
import { commentsGlyph, likeGlyph, playVideoGlyph } from 'Assets/svg/common'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

export const Container = styled(Flex)`
  width: 100%;
  margin-bottom: 80px !important;
  flex-wrap: wrap;
  overflow: hidden;
  padding-bottom: 20px;
  position: relative;
  height: 521px;
`

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  color: #333;
  margin-bottom: 45px;
  width: 100%;
  justify-content: center;
`

export const Slider = styled(Flex)`
  width: 100%;
  margin-top: 40px !important;
  position: relative;
  flex-wrap: nowrap;
  justify-content: center;
  outline: 0;

  li {
    outline: none;
  }

  ul {
    :focus {
      outline: none !important;
    }
  }

  .slider-frame {
    overflow: visible !important;
    outline: none !important;
  }

  .wrap {
    outline: none !important;
  }
`

export const SliderHeader = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 20px !important;
`

export const SliderButton = styled(Icon).attrs({
  icon: sliderArrowRightGlyph,
  width: 20,
  height: 20,
})<{ type?: string }>`
  cursor: pointer;
  margin-left: 20px;

  ${(props: any) =>
    props.type === 'left' &&
    css`
      transform: rotate(180deg);
      margin-right: 20px;
      margin-left: 20px;
    `};
`

export const SlideName = styled(Flex)`
  font-size: 22px;
  line-height: 28px;
  width: 160px;
  color: black;
  justify-content: center;
`

export const Slide = styled(Flex)<{ firstplace?: boolean }>`
  width: 276px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;

  &:nth-of-type(3) {
    margin-right: 12px !important;
  }

  ${props =>
    props.firstplace &&
    css`
      width: 336px;
    `}
`

export const SlidePreviewContainer = styled(Flex)`
  position: relative;
  width: 100%;
  align-items: flex-end;
  height: 188px !important;
`

export const OurPickIcon = styled(Icon).attrs<{ winnerplace?: number }>(
  props => {
    let winnerIcon: null | string = null

    switch (props.winnerplace) {
      case 1:
        winnerIcon = ourPickFirstGlyph
        break
      case 2:
        winnerIcon = ourPickSecondGlyph
        break
      case 3:
        winnerIcon = ourPickThirdGlyph
        break
      default:
        return null
    }
    return {
      width: 44,
      height: 44,
      icon: winnerIcon,
    }
  },
)<{ winnerplace?: number; firstplace?: boolean }>`
  position: absolute;
  top: 12px;
  left: 20px;

  ${(props: any) =>
    props.firstplace &&
    css`
      top: -20px;
    `}
`

export const UserChoiceIcon = styled(Icon).attrs<{ winnerplace?: number }>(
  props => {
    let winnerIcon: null | string = null

    switch (props.winnerplace) {
      case 1:
        winnerIcon = userChoiceFirstGlyph
        break
      case 2:
        winnerIcon = userChoiceSecondGlyph
        break
      case 3:
        winnerIcon = userChoiceThirdGlyph
        break
      default:
        return null
    }
    return {
      width: 44,
      height: 44,
      icon: winnerIcon,
    }
  },
)<{ winnerplace?: number; firstPlace?: boolean }>`
  position: absolute;
  top: 12px;
  left: 20px;

  ${(props: any) =>
    props.firstPlace &&
    css`
      top: -20px;
    `}
`

export const SlidePreview = styled.img<{ firstplace?: boolean | string }>`
  display: inline-block;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  height: 155px !important;

  ${props =>
    props.firstplace &&
    css`
      height: 188px !important;
    `}
`

export const PlayButton = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
  fill: '#6E46FF',
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
`

export const WinnerAvatar = styled.img`
  position: absolute;
  bottom: -10px;
  right: -12px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  width: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  height: 60px !important;
  object-fit: cover;
`

export const WinnerText = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  align-content: center;
`

export const PostTitle = styled(Flex).attrs({ as: 'span' })`
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  color: #828282;
  justify-content: center;
  text-align: center;
`

export const ItemCommentsLikes = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #333;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  ${(props: any) =>
    props.noLineHeight !== undefined &&
    css`
      line-height: 18px !important;
    `}
`

export const LikeIcon = styled(Icon).attrs({
  icon: likeGlyph,
  width: 16,
  height: 14,
})`
  position: absolute;
  left: 0;
  top: 5px;
`

export const ItemComments = styled(Flex)`
  font-size: 18px;
  line-height: 23px;
  color: #333;
  position: relative;
  padding-left: 24px;
`

export const CommentsIcon = styled(Icon).attrs({
  icon: commentsGlyph,
  width: 16,
  height: 16,
})`
  position: absolute;
  left: 0;
  top: 5px;
`

export const Dots = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-top: 37px !important;
`

export const SliderDot = styled.div<{ active?: boolean }>`
  width: 15px;
  height: 15px;
  background: #d3dae8;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 10px !important;

  ${props =>
    props.active &&
    css`
      background: #49ceb1;
    `}
`

export const CountryFlag = styled.img`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 2px;
  width: 24px;
  height: 16px;
  object-fit: contain;
  margin-left: 5px !important;
`
