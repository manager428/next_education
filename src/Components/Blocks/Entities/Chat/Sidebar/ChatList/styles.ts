import styled, { css } from 'styled-components'

import Image from 'next/image'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const SectionTitle = styled(Flex)<{ wide?: boolean }>`
  width: 100%;
  font-size: 24px;
  font-family: 'Nunito Sans';
  color: #333333;
  align-items: center;
  min-width: ${props => (props.wide ? '132px' : 'auto')};
  cursor: pointer;

  align-items: center;
  align-content: center;
`

export const LastMessage = styled.span`
  font-size: 18px;
  color: #828282;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 191px;
`

export const Header = styled(Flex)`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
`

export const Time = styled.span`
  color: #828282;
  width: 100%;
  text-align: end;
`

export const Counter = styled(Flex)<{ floating?: boolean }>`
  background-color: #ffa08c;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  padding: 0px 8px;

  ${props =>
    props.floating &&
    css`
      position: absolute;
      bottom: 3px;
      right: -7px;
    `}
`

export const ChatItemContainer = styled(Flex)<{ active?: boolean }>`
  width: 100%;

  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;

  ${props =>
    props.active &&
    css`
      background-color: #6e46ff;
      box-shadow: -4px 4px 20px rgba(73, 206, 177, 0.5);
      border-radius: 10px;

      ${LastMessage}, ${Header}, ${Time}, ${Counter} {
        color: white;
      }
      ${Counter} {
        background-color: white;
        color: #828282;
      }
    `}

  &:hover {
    background-color: #6e46ff;
    box-shadow: -4px 4px 20px rgba(73, 206, 177, 0.5);
    border-radius: 10px;

    ${LastMessage}, ${Header}, ${Time}, ${Counter} {
      color: white;
    }
    ${Counter} {
      background-color: white;
      color: #828282;
    }
  }
`

export const AvatarWrapper = styled(Flex)`
  position: relative;
  flex-shrink: 0;
`

export const ChatItemLogo = styled(Image).attrs({
  width: 64,
  height: 64,
})`
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
`
export const OnlineIndicator = styled.div<{ online?: boolean }>`
  margin-left: 7px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  width: 10px;
  height: 10px;
  top: 4px;
  right: 0px;
  position: absolute;
  background-color: ${props => (props.online ? '#49CEB1' : '#FFA08C')};
`

export const ChatItemContent = styled(Flex)`
  flex: 1;
  padding-left: 12px;
  font-family: 'Nunito Sans';
`

export const ChevronIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  width: 15,
  height: 8,
})<{ up?: boolean }>`
  cursor: pointer;
  ${props =>
    props.up &&
    css`
      transform: rotate(180deg);
    `}
`
