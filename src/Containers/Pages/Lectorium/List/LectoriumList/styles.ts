import styled, { css } from 'styled-components'

import { likeGlyph, playVideoGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const Status = styled(Flex)`
  position: absolute;
  right: 15px;
  top: 15px;
  background: #6e46ff;
`

export const PlayIcon = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
  fill: '#6E46FF',
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
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

export const Date = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;
  color: #bdbdbd;
  font-size: 16px;
`

export const SliderContainer = styled(Flex)<{ withBorder?: 1 | 2 }>`
  width: 100%;
  margin-top: 40px;
  flex-wrap: wrap;

  ${props =>
    props.withBorder &&
    css`
      padding: 20px 50px;
      border: 2px solid #d3dae8;
      box-sizing: border-box;
      border-radius: 20px;
      min-width: 1080px;
      width: 1080px;
      position: relative;
      left: -50px;
      display: none;

      .slider-control-centerleft,
      .slider-control-centerright {
        top: 40% !important;
      }
    `};
`

export const Slider = styled(Flex)`
  width: 100%;

  position: relative;
  flex-wrap: nowrap;
  justify-content: center;
  outline: 0;

  .slider {
    outline: 0px;
    .slider-frame {
      height: auto !important;
    }
  }

  .slider-control-centerleft {
    left: -23px !important;

    @media screen and (max-width: 1023px) {
      left: -30px !important;
    }
    @media screen and (max-width: 350px) {
      left: -10px !important;
    }
  }
  .slider-control-centerright {
    right: -23px !important;

    @media screen and (max-width: 1023px) {
      right: -25px !important;
    }
    @media screen and (max-width: 720px) {
      right: -30px !important;
    }
    @media screen and (max-width: 350px) {
      right: -5px !important;
    }
  }
  li {
    outline: 0px;
  }
`

export const ListTitle = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  flex-grow: 1;
`

export const ListDescription = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  width: 100%;
`

export const ListExploreButton = styled.a`
  color: #6e46ff;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  flex-shrink: 0;

  @media screen and (max-width: 1024px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const PrevButton = styled(Icon).attrs({
  width: 48,
  height: 48,
})<{
  disabled?: boolean
}>`
  cursor: pointer;
  outline: 0;
  transform: rotate(180deg);

  ${props =>
    props.disabled &&
    css`
      transform: rotate(0deg);
    `}
`

export const NextButton = styled(Icon).attrs({
  width: 48,
  height: 48,
})<{
  disabled?: boolean
}>`
  cursor: pointer;
  outline: 0;

  ${props =>
    props.disabled &&
    css`
      transform: rotate(180deg);
    `}
`

export const SpecialProjectPost = styled.a`
  width: 289px;
  height: 225px;
  flex-wrap: wrap;
  display: flex;
  text-decoration: none;
  align-items: flex-start;
  user-select: all !important;
  pointer-events: all !important;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 166px;
  object-fit: cover;
  border-radius: 20px;
`

export const ProjectTitle = styled(Flex)`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`
