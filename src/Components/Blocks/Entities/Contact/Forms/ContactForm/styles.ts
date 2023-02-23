import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

import { EditorInputField, InputField } from 'Components/Blocks/Fields'

export const Container = styled(Flex)`
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
`

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 160px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  background-color: ${themeGet('colors.green')};
  border-radius: 5px;
  text-align: center;
  color: white;
  margin-top: 20px;

  ${props =>
    props.disabled &&
    css`
      background-color: ${themeGet('colors.graySecondary')};
    `}
`

export const FormInput = styled(InputField)`
  input {
    border-width: 2px;
  }
`

export const FormMessageInput = styled(EditorInputField)`
  label {
    font-size: 16px;
    color: #49ceb1;
  }

  .editor-wrapper {
    border-width: 2px;
    border-color: #49ceb1;
  }
`
