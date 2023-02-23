import styled, { css } from 'styled-components'

import { commentsGlyph, likeGlyph, playVideoGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

export const ListItem = styled.div`
  width: 296px;
  margin-bottom: 30px;
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  background-color: white;
  align-content: flex-start;
  .main-item-wrap {
    background-color: #fff;
    border: 2px solid #e9f1fc;
    border-top-width: 0;
    border-radius: 0 0 20px 20px;
    padding-top: 8px;
    width: 100%;
    text-align: left;
  }
`
export const ListItemMainContent = styled.div`
  display: flex;
  flex-direction: column;
  .post-date {
    font-size: 16px;
    line-height: 20px;
    color: #bdbdbd;
    padding: 0 14px;
    margin-bottom: 6px;
  }
  .post-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #333;
    padding: 0 14px;
    margin-bottom: 6px;
  }
  .author {
    font-size: 18px;
    line-height: 23px;
    color: #6e46ff;
    padding: 0 14px;
    margin-bottom: 6px;
  }
  .post-content {
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    padding: 0 14px;
    margin-bottom: 20px;

    span.more {
      color: #6e46ff;
      cursor: pointer;
    }

    ol,
    ul {
      list-style-position: inside;
    }
  }
  .add-comment-btn {
    padding: 4px 7px;
    font-size: 14px;
    line-height: 18px;
    color: #c869f5;
    border: 1px solid #c869f5;
    border-radius: 5px;
    align-self: flex-end;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .item-likes-comments {
    width: 100%;
    display: flex;
    padding: 0 14px;
    align-items: center;
    margin-bottom: 22px;
    box-sizing: border-box;
    justify-content: space-between;
    .item-comments {
      font-size: 18px;
      line-height: 23px;
      color: #333;
      position: relative;
      padding-left: 24px;
    }
  }
`
export const CommentIcon = styled(Icon).attrs({
  icon: commentsGlyph,
  width: 16,
  height: 16,
})`
  position: absolute;
  left: 0;
  top: 6px;
  fill: #bdbdbd;
`
export const ItemImage = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  border-bottom: 10px solid #6e46ff;
  position: relative;
  img,
  video {
    display: inline-block;
    width: 100%;
    object-fit: contain;
    align-self: flex-start;
    height: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`
export const PlayIcon = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
  fill: '#6E46FF',
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
`
export const ItemCommentsLikes = styled.div`
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
  size: 16,
})`
  position: absolute;
  left: 0;
  top: 5px;
  fill: #bdbdbd;
  ${props =>
    props.liked &&
    css`
      fill: #c869f5;
    `}
  &:hover {
    fill: #c869f5;
  }
`
export const ItemUsersComments = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .comments-title {
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    color: #333;
    padding-left: 14px;
    background-color: #e9f1fc;
    width: 100%;
  }
  .view-all-comments {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #6e46ff;
    cursor: pointer;
    padding: 0 14px 14px;
    outline: 0;
  }
`
export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 14px 0;
  .comment-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .comment-author {
    font-size: 14px;
    line-height: 14px;
    color: #6e46ff;
    flex-grow: 1;
  }
  .comment-date {
    font-size: 14px;
    line-height: 14px;
    color: #bdbdbd;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .comment-text {
    margin: 10px 0 14px;
    font-size: 14px;
    line-height: 18px;
    color: #333;
    .direct-message-to {
      color: #c869f5;
      font-weight: 500;
    }
  }
`
