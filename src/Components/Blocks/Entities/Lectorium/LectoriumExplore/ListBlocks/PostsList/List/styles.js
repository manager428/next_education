import styled, { css } from 'styled-components'

import { commentsGlyph, likeGlyph, playVideoGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;

  .my-gallery-class {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    min-height: 500px;
    @media screen and (max-width: 1024px) {
      overflow: hidden;
    }
    @media screen and (max-width: 350px) {
      margin: 0 10px;
    }
  }
  .my-masonry-grid_column {
    width: 296px !important;
    &:nth-child(1),
    &:nth-child(2) {
      margin-right: 45px;
      @media screen and (max-width: 1024px) {
        margin-right: 25px;
      }
      @media screen and (max-width: 720px) {
        margin-right: 45px;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

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
    ol {
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
    justify-content: space-between;
    box-sizing: border-box;
    .item-comments {
      font-size: 18px;
      line-height: 23px;
      color: #333;
      position: relative;

      align-items: center;
      display: flex;
    }
  }
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
    object-fit: cover;
    height: 166px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`

export const PlayIcon = styled(Icon).attrs({
  height: 86,
  width: 86,
  icon: playVideoGlyph,
  fill: '#6E46FF',
})`
  position: absolute;
  left: calc(50% - 43px);
  top: calc(50% - 43px);
`

export const ItemCommentLikeIcon = styled(Icon).attrs({
  icon: likeGlyph,
  width: 16,
  height: 16,
  wrapperStyles: {
    mr: 1,
  },
})`
  fill: ${props => (props.liked ? '#C869F5' : '#bdbdbd')};

  &:hover {
    fill: #c869f5;
  }
`

export const ItemCommentsIcon = styled(Icon).attrs({
  icon: commentsGlyph,
  size: 16,
  mr: 1,
})`
  fill: #bdbdbd;
  position: relative;
  top: 1px;
`

export const ItemCommentsLikes = styled.div`
  font-size: 18px;
  line-height: 23px;
  color: #333;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${props =>
    props.noLineHeight !== undefined &&
    css`
      line-height: 18px !important;
    `}
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
    padding: 14px;
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
    color: #6e46ff;
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
`

export const LoadMore = styled.button`
  cursor: pointer;
  width: 220px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: none;
  margin: 0 auto;
  background-color: #6e46ff;
  &:hover {
    opacity: 0.8;
  }
`
