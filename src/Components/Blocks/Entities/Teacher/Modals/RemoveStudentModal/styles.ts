import styled, { css } from 'styled-components'

import { Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  .Modal {
    background-color: white;
  }
`

export const Content = styled(Flex)`
  width: 320px;
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
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  margin-top: 20px;
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

export const Avatar = styled.img`
  border-radius: 50px;
  width: 80px;
  height: 80px;
`

export const Name = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  justify-content: center;
`

export const Message = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  justify-content: center;
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
