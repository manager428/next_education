import styled, { css } from 'styled-components'

import { Element, Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  width: 1px;
  height: 1px;
  .Modal {
    background-color: white;
    padding: 0px;
    display: flex;
    align-items: center;
    overflow-x: unset;
  }
`

export const Content = styled(Flex)`
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  max-width: 440px;
  padding: 20px;
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

export const Button = styled(Element).attrs({
  as: 'button',
})<{ primary?: boolean }>`
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
  height: 15px;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 5px;
`
