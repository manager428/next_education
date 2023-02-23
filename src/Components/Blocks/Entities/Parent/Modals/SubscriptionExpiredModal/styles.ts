import styled, { css } from 'styled-components'

import { expiredLogoGlyph } from 'Assets/svg/parent'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'
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

export const ExpireLogo = styled(Icon).attrs({
  icon: expiredLogoGlyph,
  width: 116,
  height: 160,
  layout: 'fixed',
})``

export const Content = styled(Flex)`
  width: 340px;
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  padding: 20px;
  position: relative;
  max-height: 420px;
  min-height: 420px;
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
  as: 'a',
})<{
  gray?: boolean
  disabled?: boolean
}>`
  box-shadow: none;
  outline: 0px;
  border: 0px;
  background: #49ceb1;
  border-radius: 5px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;

  ${props =>
    (props.disabled || props.gray) &&
    css`
      background-color: rgb(189, 189, 189);
    `}
`

export const Text = styled(Flex)`
  justify-content: center;
  text-align: center;
  width: 100%;
`
