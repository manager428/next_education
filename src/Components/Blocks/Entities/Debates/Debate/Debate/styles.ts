import styled, { css } from 'styled-components'
import { zIndex, ZIndexProps } from 'styled-system'

import { debatesLikeGlyph } from 'Assets/svg/debates'

import { Flex, Icon } from 'Components/UI'

export const DebateContainer = styled(Flex)`
  width: 300px;
  flex-wrap: wrap;
  color: #333333;
  pointer-events: all !important;
`

export const DebateImageContainer = styled(Flex)`
  position: relative;
  width: 300px;
`

export const DebateImage = styled.img`
  object-fit: contain;
  align-self: flex-start;
  border-radius: 10px;
  width: 100%;
`
export const DebateTooltip = styled(Flex)`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 0px 0px 10px 10px;
  padding: 14px 10px;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  transition: all 0.3s ease;
`
export const DebateDate = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  justify-content: center;
  width: 100%;
  margin-top: 14px;
`

export const DebateTitle = styled(Flex).attrs({
  as: 'h3',
})`
  width: 100%;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  flex-wrap: wrap;
  margin-top: 14px;
  text-align: center;
`

export const ProgressContainer = styled(Flex)`
  width: 100%;
  margin-top: 14px;
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

export const ProgressInner = styled(Flex)<ZIndexProps>`
  ${zIndex};
`

export const VotesContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 14px;

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-left: 12px;
    margin-right: 12px;
  }
`

export const VoteButton = styled(Flex).attrs({
  as: 'button',
})<{
  variant: 'green' | 'orange'
}>`
  cursor: pointer;
  opacity: 0.5;
  width: 140px;
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

  &:hover {
    opacity: 1;
  }
`

export const DebatesLikeIcon = styled(Icon).attrs({
  icon: debatesLikeGlyph,
  width: 22,
  height: 18,
  fill: 'white',
})<{ variant?: 'rotated' }>`
  position: relative;
  ${props =>
    props.variant === 'rotated' &&
    css`
      transform: rotate(180deg);
      top: 2px;
    `};
`

export const NavLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  width: 300px;
`
