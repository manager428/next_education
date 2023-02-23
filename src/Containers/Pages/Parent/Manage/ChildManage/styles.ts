import styled, { css } from 'styled-components'
import { position, PositionProps } from 'styled-system'

import { settingsIconGlyph, sliderArrowGlyph } from 'Assets/svg/common'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  flex: 1;
`

export const ChildProfile = styled(Flex)`
  width: 100%;
  justify-content: center;
  position: relative;
  min-height: 500px;
`

export const Container = styled(Flex)`
  max-width: 980px;
  width: 100%;
  box-sizing: border-box;

  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: center;
  a {
    text-decoration: none;
  }
`

export const InnerWrapper = styled(Flex)`
  border: 2px solid #49ceb1;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 14px;
  align-items: flex-start;
  align-content: flex-start;
  align-self: center;
`

export const AbsoluteContainer = styled(Flex)<PositionProps>`
  position: absolute;

  ${position};
`

export const SettingsWrapper = styled.a`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  &:hover {
    animation: rotating 2s linear infinite;
  }
`

export const SettingsIcon = styled(Icon).attrs({
  icon: settingsIconGlyph,
  size: 26,
})``

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  color: #333333;
  justify-content: center;
  text-align: center;
  width: 100%;
`

export const SubscriptionPeriod = styled(Flex)<{ warning?: boolean }>`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #49ceb1;
  justify-content: center;
  text-align: center;

  ${({ warning }) =>
    warning &&
    css`
      color: #ffa08c;
    `}
`

export const Button = styled(Flex)`
  box-shadow: none;
  border: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
`
export const SliderContainer = styled(Flex)`
  width: 100%;
  display: block;

  .slider-control-centerright,
  .slider-control-centerleft {
    top: -7% !important;
  }
`

export const AvatarWrapper = styled(Flex)<{ active?: boolean }>`
  width: 76px;
  height: 76px;
  padding: 6px;

  border: 2px solid transparent;
  border-radius: 100%;

  ${({ active }) =>
    active &&
    css`
      border: 2px solid #49ceb1;
    `}
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
`

export const Slide = styled(Flex)`
  width: 210px;
  height: 120px;
  color: #071d40;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;

  :hover {
    ${AvatarWrapper} {
      border: 2px solid #49ceb1;
    }
  }
`

export const SlideTitle = styled(Flex)`
  font-size: 14px;
  line-height: 100%;
  width: 100%;
  justify-content: center;
  text-align: center;
  color: #333333;
  margin-top: 14px;
`

export const SliderArrow = styled(Icon).attrs({
  icon: sliderArrowGlyph,
  width: 38,
  height: 24,
  fill: '#49CEB1',
})<{
  disabled?: boolean
  next?: boolean
}>`
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      fill: #cad2e3;
    `};

  ${({ next }) =>
    next &&
    css`
      transform: rotate(180deg);
    `};
`
