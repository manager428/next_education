import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

import { EditorInputField } from 'Components/Blocks/Fields'

export const FormContainer = styled.form`
  width: 470px;
  flex-wrap: wrap;
  position: relative;
`

export const ErrorContainer = styled(Flex)`
  color: #eb5757;
  font-size: 13px;
  line-height: 16px;
  margin-top: 20px;
  justify-content: center;
  width: 100%;
`

export const FormMessage = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  width: 100%;
`

export const FormEditorInput = styled(EditorInputField)<{
  variant?: 'orange'
}>`
  ${props =>
    props.variant === 'orange' &&
    css`
      border-color: #ffa08c;
    `};

  &.description-field {
    &.error {
      border-color: #eb5757 !important;
    }
    .tooltip {
      position: relative;
      height: inherit;
      margin-top: 10px;
      font-size: 12px !important;
      margin-left: 0 !important;
      padding-left: 0 !important;
    }
  }
`

export const Button = styled(Flex).attrs({
  as: 'button',
})<{
  variant?: 'gray' | 'green' | 'orange'
}>`
  justify-content: center;
  align-content: center;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: none;
  border: 0px;
  padding: 10px 14px;

  ${props =>
    props.variant === 'gray' &&
    css`
      background: #d3dae8;
    `};

  ${props =>
    props.variant === 'orange' &&
    css`
      background: #ffa08c;
    `};

  ${props =>
    props.variant === 'green' &&
    css`
      background: #49ceb1;
    `};
`
