import styled from 'styled-components'

import { Modal as ModalBase } from 'Components/UI'

export const PopupInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    width: 100%;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #333333;
    margin-bottom: 14px;
  }
  .interests-list {
    display: flex;
    flex-wrap: wrap;
  }
  .count-selected {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #49ceb1;
  }
  textarea {
    width: 100%;
    height: 180px;
    resize: none;
    border: 2px solid #8de1d1;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    overflow-y: auto;
    box-sizing: border-box;
    font-family: 'Nunito Sans';
  }
  .actions {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    .cancel,
    .save {
      border: none;
      background: #d3dae8;
      border-radius: 5px;
      width: 100px;
      height: 40px;
      color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      display: flex;
      align-items: center;
      padding: 0;
      justify-content: center;
      cursor: pointer;
      font-family: 'Nunito Sans';
      &:hover {
        opacity: 0.7;
      }
    }
    .save {
      background: #49ceb1;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    }
  }
`
export const InterestItem = styled.div<{ selected?: boolean }>`
  height: 26px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 30px;
  border: 1px solid ${props => (props.selected ? '#49CEB1' : '#BDBDBD')};
  color: ${props => (props.selected ? '#49CEB1' : '#BDBDBD')};
  margin-right: 10px;
  cursor: pointer;
`

export const Modal = styled(ModalBase)`
  .Modal {
    max-width: 420px;
    padding: 20px;
    background-color: white;
    width: 100%;
  }
`
