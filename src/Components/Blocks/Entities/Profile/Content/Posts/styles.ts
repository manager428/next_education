import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
`
export const PostsWrap = styled.div<{
  withWrap?: boolean
  showAll?: boolean
}>`
  .my-gallery-class {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .my-masonry-grid_column {
    width: 296px !important;
  }

  ${props =>
    props.withWrap &&
    css`
      flex-wrap: wrap;
    `}
  .left-side {
    display: flex;
    flex-direction: column;
    .blue-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #5f9ee1;
    }

    .info {
      margin-top: 10px;
      font-size: 16px;
      line-height: 22px;
      &:last-child {
        color: #828282;
      }
    }
  }

  .right-side {
    width: 166px;
    height: 172px;
    img {
      width: 100%;
    }
  }

  ${props =>
    !props.showAll &&
    css`
      .my-masonry-grid_column .list-item {
        display: none;
        &:first-child {
          display: flex !important;
        }
      }
    `}
`

export const DummyPostItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  border: 2px solid #e9f1fc;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  height: 578px;
  margin-bottom: 20px;
  justify-content: space-around;
  text-align: center;
  background-color: #ffffff;
  .title {
    font-family: 'Nunito Sans';
    font-size: 36px;
    line-height: 47px;
    text-align: center;
    color: #d3dae8;
  }
  .img-wrap {
    width: 228px;
    height: 234px;
    img {
      width: 100%;
    }
  }
  .info {
    font-size: 16px;
    line-height: 20px;
    &:last-child {
      color: #828282;
    }
  }
`
