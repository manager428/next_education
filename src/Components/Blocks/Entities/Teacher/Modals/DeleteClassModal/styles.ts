import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  .Modal {
    background-color: white;
    padding: 0;
    min-height: unset;
    min-width: unset;
  }
`

export const Content = styled(Flex)`
  width: 300px;
  flex-wrap: wrap;
  padding: 20px;
  ${props =>
    props.wide &&
    css`
      width: 380px;
    `}
`

export const Title = styled(Flex).attrs({ as: 'span' })`
  font-size: 18px;
  line-height: 24px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  justify-content: center;
  font-weight: 600;
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  margin-top: 20px;
`

export const Button = styled(Flex).attrs({ as: 'button' })<{
  primary?: boolean
}>`
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
  justify-content: center;
  color: ${themeGet('colors.gray')};
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
