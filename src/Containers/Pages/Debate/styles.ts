import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { debatesLikeGlyph } from 'Assets/svg/debates'

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

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
`

export const DebateInfo = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Inner = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  flex-wrap: wrap;
`

export const Category = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  width: 100%;
  justify-content: center;
  text-transform: uppercase;
`

export const Author = styled(Flex)`
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export const AvatarImage = styled(Image).attrs({
  width: 40,
  height: 40,
  layout: 'fixed',
})`
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
`

export const DebateImage = styled.img`
  object-fit: cover;
  height: 200px;
  align-self: flex-start;
  border-radius: 10px;
`

export const DebateTitle = styled(Flex).attrs({
  as: 'h1',
})`
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #333333;
`

export const DebateDescription = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  color: #333333;

  div {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
`

export const ProgressContainer = styled(Flex)`
  width: 100%;
  margin-top: 32px;
`

export const ProgressLine = styled(Flex)<{
  variant: 'green' | 'orange' | 'gray'
}>`
  height: 20px;
  background: #49ceb1;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: white;
  border-radius: 40px 0px 0px 40px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;

  ${props =>
    props.variant === 'gray' &&
    css`
      background: #ababab;
      border-radius: 0 40px 40px 0;
      justify-content: center;
    `}

  ${props =>
    props.variant === 'orange' &&
    css`
      background: #ffa08c;
      border-radius: 0 40px 40px 0;
      justify-content: flex-end;
    `}

  ${props =>
    props.width === '100%' &&
    css`
      border-radius: 40px;
    `}

  ${props =>
    props.width === '0%' &&
    css`
      display: none;
    `}
`

export const Percents = styled(Flex)<{ variant: 'green' | 'orange' }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  ${props =>
    props.variant === 'orange' &&
    css`
      color: #ffa08c;
    `}

  ${props =>
    props.variant === 'green' &&
    css`
      color: #49ceb1;
    `};
`

export const DebatesLikeIcon = styled(Icon).attrs({
  icon: debatesLikeGlyph,
  width: 22,
  height: 18,
})<{
  variant?: 'rotated'
}>`
  position: relative;

  ${props =>
    props.variant === 'rotated' &&
    css`
      transform: rotate(180deg);
      top: 2px;
    `};
`

export const VotesContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 32px;
`

export const VoteButton = styled(Flex).attrs({
  as: 'button',
})<{
  variant: 'green' | 'orange'
}>`
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  box-shadow: none;
  border: 0;
  color: white;
  border-radius: 5px;

  div {
    position: relative;
    //top: 3px;
    display: flex;
    height: 18px;
  }

  ${props =>
    props.variant === 'green' &&
    css`
      background: #49ceb1;
    `};

  ${props =>
    props.variant === 'orange' &&
    css`
      background: #ffa08c;
    `};
`

export const Tooltip = styled(Flex)`
  position: absolute !important;
  background: #ffffff;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 10px rgba(3, 16, 48, 0.16));
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
  padding: 12px 12px;
  flex-wrap: wrap;
  height: auto !important;
  top: 50px;
  font-weight: 300;
  z-index: 1000;
  width: 200px;
  justify-content: center;
`

export const VotesContent = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
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
  position: absolute;
  right: 0;
  top: 40px;
`
