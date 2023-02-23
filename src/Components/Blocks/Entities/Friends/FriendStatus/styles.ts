import styled from 'styled-components'

import {
  addFriendIcon,
  friendIcon,
  requestedFriendIcon,
} from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)``

export const FriendIcon = styled(Icon).attrs<any>(props => ({
  // eslint-disable-next-line no-nested-ternary
  icon: props.isFriendRequest
    ? requestedFriendIcon
    : props.isFriend
    ? friendIcon
    : addFriendIcon,
  size: 18,
}))<any>`
  fill: ${props => (props.isFriend ? '#BDBDBD' : '#5F9EE1')};
  outline: 0;
  cursor: pointer;
`

export const FriendContainer = styled(Flex)`
  position: relative;
  padding: 0 !important;
`

export const InfoBlock = styled.span`
  display: block;
  position: absolute;
  padding: 6px 10px;
  border-radius: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  text-align: center;
  color: #333;
  font-size: 14px;
  line-height: 18px;
  width: 150px;
  z-index: 5;
  left: -65px;
  top: 30px;
  margin-bottom: 5px;
`
