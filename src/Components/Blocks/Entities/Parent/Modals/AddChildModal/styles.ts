import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'
import ModalBase from 'Components/UI/Modal'

import { InputField, SelectField } from 'Components/Blocks/Fields'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  .Modal {
    background-color: white;
  }
`

export const Content = styled(Flex)<{ locale?: string }>`
  width: 388px;
  font-family: 'Nunito Sans';
  flex-wrap: wrap;
  padding: 24px;
  position: relative;
  padding: 0;
  min-height: 564px !important;
  max-height: 564px !important;
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

export const FormInput = styled(InputField)`
  width: 100%;

  input[type='password'] {
    letter-spacing: 0px;
  }

  input,
  textarea {
    font-size: 16px;
    background-color: transparent;
    border: 2px solid ${props => (props.isError ? '#FFA08C' : '#8de1d1')};
  }

  label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    color: #49ceb1;
  }

  ::placeholder {
    color: green;
  }

  ${({ green }) =>
    green &&
    css`
      input {
        background-color: #baece1;
      }
    `}

  &.error {
    label {
      color: #ffa08c;
    }
    input {
      border: 2px solid #ffa08c;
    }
  }
`

export const FormSelect = styled(SelectField)`
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
    border: 2px solid ${props => (props.isError ? '#FFA08C' : '#8de1d1')};
    &:hover {
      border: 2px solid ${props => (props.isError ? '#FFA08C' : '#8de1d1')};
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

  &.error {
    label {
      color: #ffa08c;
    }
    .react-select__control {
      border: 2px solid #ffa08c !important;
    }
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
    border: 1px solid #8de1d1;
    box-sizing: border-box;
    border-radius: 5px;
  }
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
