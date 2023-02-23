import styled from 'styled-components'

import { sayingBg } from 'Assets/images/common'

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const LeftPart = styled.div`
  width: 398px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 14px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    right: -40px;
    top: 55px;
    width: 40px;
    height: 44px;
    background-image: url('${sayingBg.src}');
  }
  .title {
    color: #49ceb1;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .age {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .progress-block {
    border-radius: 10px;
    width: 280px;
    padding: 14px 10px 10px 10px;
    background-color: #6e46ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
    .progress-info {
      font-family: 'Arial';
      color: #ffffff;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 6px;
      font-weight: bold;
      span {
        margin-right: 2px;
        font-weight: 500;
        font-size: 24px;
        line-height: 22px;
        font-family: 'Nunito Sans';
      }
    }
  }
  .info {
    width: 100%;
    text-align: center;
    color: #333333;
    font-size: 14px;
    line-height: 20px;
  }
  .default-block {
    .title {
      color: #ffa08c;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 6px;
    }
    .info {
      margin-top: 14px;
      color: #333333;
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      text-align: center;
    }
  }
`
export const RightPart = styled.div`
  padding-left: 32px;
  img {
    width: 200px;
    height: 200px;
  }
`
