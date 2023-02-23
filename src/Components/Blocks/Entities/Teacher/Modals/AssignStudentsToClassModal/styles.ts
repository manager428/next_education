import styled, { css } from 'styled-components'

import { Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  width: 1px;
  height: 1px;
  .Modal {
    background-color: white;
    overflow-x: unset;
  }
`

export const Content = styled(Flex)`
  width: 394px;
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  padding: 15px;
`

export const Title = styled(Flex).attrs({ as: 'span' })`
  font-size: 18px;
  line-height: 23px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  justify-content: center;
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`

export const Button = styled.button<{ primary?: boolean }>`
  box-shadow: none;
  border: 0px;
  outline: 0px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 18px;
  background-color: #d3dae8;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  outline: 0px;

  ${props =>
    props.primary &&
    css`
      background-color: #6e46ff;
    `}
`

export const Error = styled(Flex)`
  color: #eb5757;
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  justify-content: flex-end;
  &:not(:empty) {
    margin-bottom: 5px;
    height: 15px;
  }
`
