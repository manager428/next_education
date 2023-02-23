import styled, { css } from 'styled-components'

import { closeIconGlyph } from 'Assets/svg/common'

import { Flex, Icon, Modal as ModalBase } from 'Components/UI'

import {
  EditorInputField,
  InputField,
  SelectField as SelectBase,
} from 'Components/Blocks/Fields'

import 'simplebar/dist/simplebar.min.css'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  display: flex;
  width: 420px !important;

  padding: 0 !important;

  .Modal {
    background-color: white;
  }
`

export const Content = styled.div`
  position: relative;
  max-width: 420px !important;
  width: 100%;
  padding: 20px;
  max-height: 360px;
`

export const InnerContent = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const CloseButton = styled(Icon).attrs({
  icon: closeIconGlyph,
  size: 24,
  fill: '#D3DAE8',
})`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1000;
`

export const FormContainer = styled.form`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`

export const Name = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  justify-content: center;
`

export const Title = styled(Flex)`
  font-size: 18px;
  text-align: center;
  justify-content: center;
  color: #333333;
`

export const FormInput = styled(InputField)`
  width: 100%;

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

export const FormEditorInput = styled(EditorInputField)`
  .input-editor {
    font-size: 16px;
  }
  label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    color: #49ceb1;
  }
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
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
  min-height: 20px;
  justify-content: center;
  position: relative;
  margin-top: 0px;
`
