import styled, { css } from 'styled-components'
import { color } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

import {
  EditorInputField,
  SelectField as SelectBase,
} from 'Components/Blocks/Fields'

export const Background = styled(Flex)`
  background-image: transparent;
  background-repeat: no-repeat;
  background-color: rgb(247, 250, 255);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`
export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
`

export const FormContainer = styled(Flex)`
  width: 360px;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const Text = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  text-align: center;

  ${color}
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
})<{
  gray?: boolean
  disabled?: boolean
}>`
  outline: 0px;
  border: 0px;
  background: #ffa08c;
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

export const FormSelect = styled(SelectBase)`
  width: 100%;

  .error-tooltip {
    padding-left: 0px;
    position: relative;
    top: 0px;
    height: auto;
  }

  .react-select__control {
    background-color: transparent !important;
    min-height: 40px;
    max-height: 40px;
    border: 2px solid
      ${props => (props.isError ? '#FFA08C' : themeGet('colors.green'))};
    &:hover {
      border: 2px solid
        ${props => (props.isError ? '#FFA08C' : themeGet('colors.green'))};
    }
  }
  .react-select__value-container {
    min-height: 40px;
    max-height: 40px;
    padding: 0 12px;
  }
  label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    color: #49ceb1;
  }
  .react-select__value-container {
    height: 40px;
    input {
      height: 40px;
    }
  }
  .react-select__value-container > div:last-child {
    height: 40px;
  }
  .react-select__input {
    min-height: 40px;
  }
  .react-select__placeholder {
    top: 20px;
  }
  .react-select__indicators {
    height: 40px;
  }
  .react-select__menu {
    border: 1px solid ${themeGet('colors.green')};
    box-sizing: border-box;
    border-radius: 5px;
  }
`

export const FormEditorInput = styled(EditorInputField)`
  .input-editor {
    font-size: 16px;
  }

  .error {
    border: 2px solid ${themeGet('colors.green')} !important;
  }

  .rdw-editor-toolbar,
  .rdw-option-wrapper {
    background: transparent;
  }

  .tooltip {
    margin-top: 7px !important;
  }
  label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    color: #49ceb1;
  }
`
