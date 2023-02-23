import styled, { css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import {
  friendIconAddGlyph,
  friendIconGlyph,
  friendIconRequestGlyph,
  likeGlyph,
  multipleCommentsGlyph,
} from 'Assets/svg/common'
import { debatesLikeGlyph } from 'Assets/svg/debates'

import { Element, Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  max-width: 600px;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
  @media screen and (max-width: 350px) {
    margin-left: 6px;
  }
`

export const CommentsHeader = styled(Flex)`
  width: 100%;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`

export const CommentsAmount = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  margin-left: 10px;
  margin-right: 20px;
`

export const MultipleCommentsIcon = styled(Icon).attrs({
  icon: multipleCommentsGlyph,
  width: 20,
  height: 20,
})`
  position: relative;
`

export const Tabs = styled(Flex)`
  width: 180px;
  align-content: center;
  align-items: center;
`

export const Tab = styled(Element)`
  font-weight: 600;
  font-size: 14px;
  color: #bdbdbd;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0px;
  }

  ${props =>
    props.active &&
    css`
      color: ${props.color};
    `};
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`

export const Author = styled.div`
  color: ${props => props.color};
  font-size: 14px;
  cursor: pointer;
`

export const FriendIcon = styled(Icon).attrs(props => ({
  // eslint-disable-next-line no-nested-ternary
  icon: props.isFriendRequest
    ? friendIconRequestGlyph
    : props.isFriend
    ? friendIconGlyph
    : friendIconAddGlyph,
  width: 18,
  height: 18,
}))`
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

export const Content = styled(Flex)`
  display: flex;
  font-size: 14px;
  line-height: 18px;
  color: black;
  margin-top: 8px;
  width: 100%;

  .direct-message-to {
    color: #f68b6a;
    font-weight: bold;
  }

  p:first-of-type {
    margin-top: 0px;
  }

  ol {
    list-style: inside;
  }
`

export const ItemCommentsLikes = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  ${props =>
    props.noLineHeight !== undefined &&
    css`
      line-height: 18px !important;
    `}
`
export const LikeIcon = styled(Icon).attrs({
  icon: likeGlyph,
  width: 16,
  height: 16,
})`
  position: absolute;
  left: 0;
  top: 2px;
  fill: #bdbdbd;
  ${props =>
    props.liked &&
    css`
      fill: #dd85ad;
    `}
  &:hover {
    fill: #dd85ad;
  }
`

export const DebatesLikeIcon = styled(Icon).attrs({
  icon: debatesLikeGlyph,
  width: 16,
  height: 16,
})`
  position: absolute;
  left: 0;
  top: 1px;
  fill: ${props => props.color};
`

export const Date = styled(Flex)`
  color: #bdbdbd;
  font-size: 14px;
  line-height: 18px;
`
export const UserContainer = styled(Flex)`
  position: relative;
  align-items: center;
`
export const UserNameMenu = styled(Flex)`
  padding: 12px 14px;
  width: 240px;
  border: 1px solid #d3dae8;
  background-color: #fff;
  position: absolute;
  left: -15px;
  top: 22px;
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
      color: #6e46ff;
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

export const WithoutScrollList = styled(Flex)`
  flex-grow: 1;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
`

export const List = styled(SimpleBar)`
  flex-grow: 1;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-height: 710px;
  align-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  min-height: 150px;

  .simplebar-content {
    margin: 0 auto;
    padding-right: 15px !important;
    min-height: 150px;
  }

  .simplebar-track {
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`
