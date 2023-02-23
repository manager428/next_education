import styled, { css } from 'styled-components'

import { commentsGlyph, likeGlyph, playVideoGlyph } from 'Assets/svg/common'

import Icon from 'Components/UI/Icon'

export const ListItem = styled.div`
  width: 296px;
  margin-bottom: 30px;
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
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
    color: #49ceb1;
    padding: 0 14px;
    margin-bottom: 6px;
  }
  .post-content {
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    padding: 0 14px;
    margin-bottom: 20px;
    div.more {
      color: #49ceb1;
      cursor: pointer;
    }
  }
  .add-comment-btn {
    padding: 4px 7px;
    font-size: 14px;
    line-height: 18px;
    color: #ffa08c;
    border: 1px solid #ffa08c;
    border-radius: 5px;
    align-self: flex-end;
    cursor: pointer;
    box-shadow: none;
    background-color: transparent;
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
    justify-content: space-between;
    box-sizing: border-box;
    .item-comments {
      font-size: 18px;
      line-height: 23px;
      color: #333;
      position: relative;
      padding-left: 24px;
    }
  }
`
export const CommentsIcon = styled(Icon).attrs({
  icon: commentsGlyph,
  width: 16,
  height: 16,
})`
  position: absolute;
  left: 0;
  top: 5px;
`

export const ItemImage = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  border-bottom: 10px solid #49ceb1;
  position: relative;
  img,
  video {
    display: inline-block;
    width: 100%;
    object-fit: cover;
    height: auto;
    align-self: flex-start;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`

export const PlayButton = styled(Icon).attrs({
  icon: playVideoGlyph,
  width: 86,
  height: 86,
  fill: '#6E46FF',
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
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
})<{ liked?: boolean }>`
  position: absolute;
  left: 0;
  top: 5px;

  fill: #bdbdbd;

  &:hover {
    fill: #dd85ad;
  }

  ${props =>
    props.liked &&
    css`
      fill: #dd85ad;
    `};
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
`

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px;
  .comment-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .comment-author {
    font-size: 14px;
    line-height: 14px;
    color: #49ceb1;
  }
  .comment-date {
    font-size: 14px;
    line-height: 14px;
    color: #bdbdbd;
  }
  .comment-text {
    margin: 10px 0 14px;
    font-size: 14px;
    line-height: 18px;
    color: #333;
  }
  .view-all-comments {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #49ceb1;
    cursor: pointer;
  }
`
