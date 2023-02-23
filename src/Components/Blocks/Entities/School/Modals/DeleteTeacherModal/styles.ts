import styled, { css } from 'styled-components'

import { Element, Flex, Modal as ModalBase } from 'Components/UI'

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

export const Button = styled(Element).attrs({ as: 'button' })<{
  primary?: boolean
  disabled?: boolean
}>`
  box-shadow: none;
  border: 0;
  outline: 0;
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
  object-fit: cover;
`

export const Name = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
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
  height: 15px;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 5px;
  margin-top: 5px;
`
