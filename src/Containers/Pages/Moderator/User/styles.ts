import styled, { css } from 'styled-components'

import Image from 'next/image'

import {
  tableBanActiveGlyph,
  tableBanGlyph,
  tableBlockActiveGlyph,
  tableBlockGlyph,
  tableUnblockGlyph,
  tableWarningGlyph,
} from 'Assets/svg/moderator'

import { Flex, Icon } from 'Components/UI'

export const Background = styled(Flex)`
  background-image: unset;
  background-repeat: no-repeat;
  background-color: rgb(247, 250, 255);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`
export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
`

export const Tab = styled(Flex).attrs({
  as: 'button',
})<{ active?: boolean }>`
  box-shadow: none;
  border: 0;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  color: #828282;
  background-color: unset;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `};
`

export const MenuLink = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 4px 12px;
  margin-right: 6px;
  text-decoration: none;
  font-size: 16px;

  &:nth-last-of-type {
    margin-right: 0px;
  }

  color: #071d40;

  ${props =>
    props.active &&
    css`
      background: #baece1;
      border-radius: 20px;
    `}
`

export const RoutesContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  align-content: flex-start;
  align-items: flex-start;
`

export const UserInfo = styled(Flex)`
  width: 340px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  min-height: 178px;
  position: relative;
`

export const UserAvatarContainer = styled(Flex)`
  position: relative;
  justify-content: center;
`

export const OnlineStatus = styled(Flex)<{ online?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props => (props.online ? '#49CEB1' : '#FFA08C')};
  right: 5px;
  position: absolute;
  border: 1px solid white;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  object-fit: cover;
`

export const UserName = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  color: #333333;
`

export const UserEmail = styled(UserName)`
  font-weight: 400;
`

export const UserStatus = styled(Flex)`
  font-size: 16px;
  color: #828282;

  span {
    margin-left: 10px;
    color: #49ceb1;
  }
`

export const BanIcon = styled(Icon).attrs<{ active?: boolean }>(props => ({
  icon: props.active ? tableBanActiveGlyph : tableBanGlyph,
  size: 26,
}))<any>``

export const BlockIcon = styled(Icon).attrs<{ active?: boolean }>(props => ({
  icon: props.active ? tableBlockActiveGlyph : tableBlockGlyph,
  size: 26,
}))<any>``

export const WarningIcon = styled(Icon).attrs({
  icon: tableWarningGlyph,
  size: 26,
  // fill: '#BDBDBD',
  stroke: '#BDBDBD',
})`
  stroke: #bdbdbd;
`

export const UnblockUserIcon = styled(Icon).attrs({
  icon: tableUnblockGlyph,
  size: 26,
})``

export const ActionButton = styled(Flex).attrs({
  as: 'button',
})`
  box-shadow: none;
  background-color: unset;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0;
`
