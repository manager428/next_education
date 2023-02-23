import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
  .no-progress-info {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 14px;
  }
  .download-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #49ceb1;
    margin-bottom: 10px;
  }
  .buttons-wrap {
    display: flex;
    a {
      color: #49ceb1;
      text-decoration: none;
      display: inline-block;
      margin-right: 14px;
    }
    .button {
      width: 124px;
      height: 32px;
      border: 1px solid #49ceb1;
      box-sizing: border-box;
      border-radius: 25px;
      color: #49ceb1;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #daece8;
      }
      svg {
        margin-right: 10px;
      }
    }
  }
`
export const ProgressWrap = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`
export const ProgressItem = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 5px;
    box-sizing: border-box;
    margin-bottom: 8px;
    border-radius: 50%;
    background-color: ${props => props.background};
    font-size: 18px;
    line-height: 18px;
    width: 68px;
    height: 68px;
    color: #ffffff;
    span {
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }
  }
  .progress {
    color: #333333;
    font-size: 14px;
    line-height: 18px;
  }
`
