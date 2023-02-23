import styled from 'styled-components'
import { position, PositionProps } from 'styled-system'

import {
  addFriendIcon,
  commentsGlyph,
  friendIcon,
  likes,
  requestedFriendIcon,
  threeDotsGlyph,
} from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  position: relative;
  max-width: 520px;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(13, 42, 98, 0.1);
  border-radius: 10px;
  padding: 14px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`

export const Header = styled(Flex)`
  width: 100%;
`

export const UserAvatar = styled(Flex).attrs({ as: 'img' })`
  align-self: flex-start;
  object-fit: cover;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

export const UserName = styled(Flex).attrs({ as: 'span' })`
  font-weight: 600;
  font-size: 14px;
  color: #333333;
  width: 100%;
  cursor: pointer;
`

export const Date = styled(Flex).attrs({ as: 'span' })`
  font-size: 14px;
  color: #828282;
  width: 100%;
  align-items: center;
`

export const Content = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Description = styled(Flex)`
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  white-space: break-spaces;

  div {
    white-space: break-spaces;
  }
`

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 266px;
`

export const Tag = styled(Flex)`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #49ceb1;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const Stats = styled(Flex)`
  border-top: 1px solid #e4e9f3;
  border-bottom: 1px solid #e4e9f3;
  width: 100%;
  padding: 9px 0px;
`

export const StatButton = styled(Flex).attrs({
  as: 'button',
})`
  font-weight: 600;
  font-size: 14px;
  color: #bdbdbd;
  border: 0px;
  background-color: unset;
  font-family: 'Nunito Sans', sans-serif;
  align-items: center;
  align-content: center;
`

export const LikeIcon = styled(Icon).attrs<any>(props => ({
  icon: likes,
  size: 15,
  fill: props.isLiked ? '#DD85AD' : '#BDBDBD',
}))<any>`
  cursor: pointer;

  :hover {
    fill: #dd85ad;
  }
`

export const CommentIcon = styled(Icon).attrs({
  icon: commentsGlyph,
  size: 12,
  fill: '#BDBDBD',
})`
  cursor: pointer;
`

export const LoadMoreButton = styled(Flex).attrs({
  as: 'button',
})`
  cursor: pointer;
  color: #49ceb1;
  border: 0px;
  background-color: unset;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
`

export const Absolute = styled(Flex)<PositionProps>`
  position: absolute;
  ${position};
`

export const DropdownIcon = styled(Icon).attrs({
  icon: threeDotsGlyph,
  size: 20,
})`
  cursor: pointer;
`

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
`

export const FriendContainer = styled(Flex)`
  position: relative;

  padding: 0 !important;
  svg {
    cursor: pointer;
    margin-left: 15px;
  }
  .info-block {
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
    a {
      color: #5f9ee1;
      text-decoration: none;
    }
  }
`

export const UserNameMenu = styled(Flex)`
  padding: 12px 14px;
  width: 240px;
  border: 1px solid #d3dae8;
  background-color: #fff;
  position: absolute;
  left: 60px;
  top: 40px;
  border-radius: 5px;
  z-index: 15;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  a,
  span {
    font-size: 18px;
    line-height: 22px;
    color: #828282;
    text-decoration: none;
    outline: 0;
    display: inline !important;
    width: auto !important;
    height: auto !important;
    &:hover {
      color: #49ceb1;
    }
  }
  span {
    margin-bottom: 12px;
    padding-left: 0px !important;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Relative = styled(Flex)`
  position: relative;
`
