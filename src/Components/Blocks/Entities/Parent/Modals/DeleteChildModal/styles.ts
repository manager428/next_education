import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'
import ModalBase from 'Components/UI/Modal'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  padding: 0 !important;
  min-height: auto !important;
  .Modal {
    background-color: white;
  }
`

export const Content = styled(Flex)`
  width: 388px;
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  padding: 24px;
  position: relative;
  max-height: 216px;
  min-height: 216px;
`

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #071d40;
  justify-content: center;
  text-align: center;
  width: 100%;
`

export const FormContainer = styled.form`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  display: flex;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
  type: 'button',
})<{
  gray?: boolean
  disabled?: boolean
}>`
  outline: 0px;
  border: 0px;
  background: #49ceb1;
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Nunito Sans';
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;

  ${props =>
    (props.disabled || props.gray) &&
    css`
      background-color: rgb(189, 189, 189);
    `}
`

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #ffa08c;
  text-align: center;
  width: 100%;
  justify-content: center;
  position: relative;
  margin-top: 0px;
  padding-top: 10px;
`

export const Text = styled(Flex)`
  justify-content: center;
  text-align: center;
  width: 100%;
`
