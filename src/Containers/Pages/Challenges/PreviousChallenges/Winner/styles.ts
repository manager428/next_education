import styled from 'styled-components'

export const WinnerWrap = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 25px;
  color: #333;
  .image-wrap {
    width: 100px;
    height: 90px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    width: calc(100% - 120px);
    padding-left: 20px;
    justify-content: space-between;
  }
  .name {
    font-weight: 600;
  }
  span.place {
    color: #49ceb1;
  }
  .topic-name {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 320px;
    white-space: nowrap;
  }
  span.topic {
    font-weight: 600;
  }
  .likes-comments {
    display: flex;
    color: #333;
    font-size: 18px;
    line-height: 16px;
  }
  .likes {
    width: 100px;
    display: flex;
    align-items: center;
    img {
      width: 16px;
      height: 14px;
      margin-right: 8px;
    }
  }
  .comments {
    display: flex;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
`
