import styled, { css } from 'styled-components'

import { likes } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
export const CommentsContentItemContent = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .username-menu {
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
        color: #49ceb1;
      }

      &:last-of-type {
        margin-bottom: 0px;
      }
    }
    span {
      margin-bottom: 12px;
      padding-left: 0px !important;
    }
  }
`

export const ContentItem = styled.div`
  line-height: 14px;
  position: relative;
  .author-name {
    font-size: 14px;
    line-height: 14px;
    color: #49ceb1;
    outline: 0;
    cursor: pointer;
    padding-left: 0px;
  }

  span {
    cursor: default;
    padding-left: 8px;
    font-size: 14px;
    line-height: 14px;
    color: #bdbdbd;
  }
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

export const CommentsContentItemContentTime = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  line-height: 14px;
  span.date {
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    color: #bdbdbd;
    margin-top: 3px;
  }
`

export const CommentsContentItemContentText = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.3;
  color: #4a4a4a;
  width: 100%;
  margin-top: 6px;
  word-break: break-word;
  .direct-message-to {
    color: #f68b6a;
    font-weight: bold;
  }
`

export const CommentsContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: flex-start;
  align-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  &.notification-message {
    border: 2px solid #d1eae0;
    border-radius: 5px;
  }
`

export const CommentsContentItemLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 52px;
  padding-left: 12px;
  box-sizing: border-box;
  justify-content: center;
`

export const LikeIcon = styled(Icon).attrs({
  icon: likes,
  size: 16,
})<{
  liked?: boolean
}>`
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

export const ItemCommentsLikes = styled.div<{ noLineHeight: boolean }>`
  font-size: 18px;
  line-height: 23px;
  color: #333;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  ${props =>
    props.noLineHeight !== undefined &&
    css`
      line-height: 18px !important;
    `}
`
