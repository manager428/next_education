import styled, { css } from 'styled-components'
import { position, PositionProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import SimpleBar from 'simplebar-react'

import {
  likeGlyph,
  multipleCommentsGlyph,
  sendIconGlyph,
} from 'Assets/svg/common'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import 'simplebar/dist/simplebar.min.css'

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 99999999,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '940px',
    width: '100%',
    padding: '40px',
    backgroundColor: '#fff',
    maxHeight: '90vh',
    borderRadius: '20px',
    minHeight: '200px',
    fontFamily: 'Nunito Sans',
  },
}

export const Container = styled(Flex)`
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  min-height: 200px;
  justify-content: space-between;
`

export const LeftPart = styled(Flex)`
  flex-direction: column;
  width: 480px;
  font-size: 18px;
  line-height: 23px;
`

export const RightPart = styled(Flex)`
  flex-direction: column;
  padding-bottom: 0;
  width: calc(100% - 520px);
`

export const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 288px;
  position: relative;

  video {
    display: flex;
    object-fit: contain;
    width: 100%;
    max-height: 280px;
    height: -moz-available; /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    outline: 0;
  }
`

export const CopyButton = styled(Flex)`
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  background-color: ${themeGet('colors.green')};
  border-radius: 6px;
  padding: 5px 8px;
  position: absolute;
  right: 10px;
  top: 10px;
  //max-width: 88px;
  cursor: pointer;
`

export const CopyButtonSuccess = styled(Flex)`
  position: absolute;
  background-color: #fff;
  color: #333;
  padding: 6px 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  text-align: center;
  max-width: 160px;
  min-width: 160px;
  width: 100%;
  top: 45px;
  left: 50%;
  display: inline-block;
  transform: translateX(-50%);
`

export const Info = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Title = styled.div`
  font-weight: 600;
`

export const Date = styled(Flex)`
  color: ${themeGet('colors.graySecondary')};
  flex-shrink: 0;
`

export const Content = styled(SimpleBar)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  max-height: 145px;
  overflow-y: auto;

  .simplebar-content {
    padding: 0px 0px 14px 0px !important;
    padding-right: 10px !important;

    > div {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
    }

    &:before,
    &:after {
      display: none;
    }
  }
  .simplebar-track {
    background-color: #e4e9f3;
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

  p {
    margin-top: 1em;
    overflow: visible;

    :empty {
      display: none;
    }
  }

  ol {
    list-style-position: inside;
  }
`

export const CommentForm = styled(Flex)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CommentNameBlock = styled(Flex)`
  border: 2px solid #6e46ff;
  border-radius: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;

  span {
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 18px;
    background: #6e46ff;
    border-radius: 6px;
    padding: 5px 8px;
    margin-left: 6px;
  }
`

export const Label = styled.div<{ withError?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  margin-bottom: 8px;

  ${props =>
    props.withError &&
    css`
      color: ${themeGet('colors.orange')};
    `}
`
export const CommentsFormInputName = styled.input.attrs({
  placeholder: 'Your name',
})<{ withError?: boolean }>`
  border: 2px solid #6e46ff;
  border-radius: 10px;
  resize: none;
  padding: 11px 14px;
  display: inline-block;
  height: 40px;
  margin-bottom: 20px;
  outline: 0;
  font-size: 14px;
  box-shadow: none;
  ${props =>
    props.withError &&
    css`
      border-color: ${themeGet('colors.orange')} !important;
    `}
`

type CommentsFormInputEditableDivProps = {
  isAllowed?: boolean
  withError?: boolean
}
export const CommentsFormInputEditableDiv = styled.div.attrs<CommentsFormInputEditableDivProps>(
  props => ({
    contentEditable: props.isAllowed,
  }),
)<CommentsFormInputEditableDivProps>`
  border: 2px solid #6e46ff;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  outline: 0;
  height: 74px;
  max-height: 74px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 18px;
  white-space: pre-wrap;
  word-break: break-word;
  ${props =>
    props.withError &&
    css`
      border-color: ${themeGet('colors.orange')} !important;
    `}
  .direct-message-to {
    color: ${themeGet('colors.orange')};
    font-weight: bold;
  }
`

export const CommentsFormButton = styled.button<{ withError?: boolean }>`
  display: flex;
  box-shadow: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  outline: 0;
  color: #fff;
  border: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-top: 14px;
  align-self: flex-end;
  height: 24px;

  border-radius: 5px;
  background-color: ${themeGet('colors.green')};
  position: relative;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
  span {
    position: relative;
    padding-left: 20px;
    line-height: 22px;
  }
`
export const SendIcon = styled(Icon).attrs({
  icon: sendIconGlyph,
  width: 14,
  height: 14,
})`
  position: absolute;
  top: calc(50% - 7px);
  left: 0;
`

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: ${themeGet('colors.orange')};
  text-align: center;
  width: 100%;
  margin-top: 20px;
  min-height: 20px;
  justify-content: center;
  position: relative;

  &:not(:empty) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export const CommentsCount = styled.div`
  font-size: 16px;
  position: relative;
  padding-left: 30px;
  flex-shrink: 0;

  color: ${themeGet('font.primary')};
`

export const CommentsTabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const CommentTab = styled.button<{ active?: boolean }>`
  outline: 0;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:last-of-type {
    margin-left: 14px;
  }

  ${props =>
    props.active &&
    css`
      color: #c869f5;
    `}
`
export const CommentsList = styled(SimpleBar)`
  width: 100%;
  margin-top: 20px;
  height: 222px;

  .simplebar-content {
    padding: 14px 0px !important;
  }
  .simplebar-track {
    background-color: #e4e9f3;
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

export const MultipleCommentsIcon = styled(Icon).attrs({
  icon: multipleCommentsGlyph,
  width: 20,
  height: 20,
  fill: '#6E46FF',
})`
  position: absolute;
  left: 0;
  //top: 3px;
`

export const AuthorContainer = styled(Flex)`
  justify-content: space-between;
  margin: 14px 0;

  span {
    outline: 0px;
    cursor: pointer;
    padding-left: 10px;
  }
`

export const AuthorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`

export const Author = styled(Flex)`
  color: ${themeGet('colors.green')};
  outline: 0;
  align-items: center;
  position: relative;

  a {
    display: flex;
  }
`

export const AuthorMenuDropdown = styled(Flex)`
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
    margin-bottom: 12px;

    &:hover {
      color: #6e46ff;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
  span,
  a {
    padding-left: 0px !important;
  }

  .add-friend-wrap img {
    width: 18px;
    height: 14px;
    border-radius: 0;
  }
`

export const FriendIcon = styled(Icon).attrs({
  // eslint-disable-next-line no-nested-ternary
  width: 18,
  height: 18,
})<{ isFriend?: boolean; isFriendRequest?: boolean }>`
  fill: ${props => (props.isFriend ? '#BDBDBD' : '#5F9EE1')};
  outline: 0;
`

export const ItemCommentsLikes = styled.div<{ noLineHeight?: boolean }>`
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

export const LikeIcon = styled(Icon).attrs({
  icon: likeGlyph,
  width: 16,
  height: 14,
})<PositionProps & { liked?: boolean }>`
  position: absolute;
  left: 0;
  top: 5px;

  fill: #bdbdbd;

  &:hover {
    fill: #c869f5;
  }

  ${props =>
    props.liked &&
    css`
      fill: #c869f5;
    `};

  ${position}
`

export const CommentsContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
`

export const CommentsContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: flex-start;
  align-content: flex-start;
  margin-bottom: 20px;
  padding-right: 20px;
  width: 100%;
  &.notification-message {
    border: 2px solid #d1eae0;
    border-radius: 5px;
  }
`

export const CommentsContentItemLeft = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  width: 52px;
  padding-left: 12px;
  box-sizing: border-box;
  justify-content: center;
`

export const CommentsContentItemImage = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
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
  max-width: 230px;
`

export const CommentsContentItemContentName = styled.div`
  line-height: 14px;
  position: relative;
  .author-name {
    font-size: 14px;
    line-height: 14px;
    color: #6e46ff;
    outline: 0;
    cursor: pointer;
  }
  span.guest {
    cursor: default;
    padding-left: 8px;
    font-size: 14px;
    line-height: 14px;
    color: #bdbdbd;
  }
  button {
    box-shadow: none;
    background-color: transparent;
    border: 0;
    padding: 0;
  }

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
    span,
    button {
      font-size: 18px;
      line-height: 22px;
      color: #828282;
      text-decoration: none;
      outline: 0;
      display: inline !important;
      width: auto !important;
      height: auto !important;
      text-align: left;
      &:hover {
        color: #6e46ff;
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
    color: #c869f5;
    font-weight: bold;
  }
`
