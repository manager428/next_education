import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { createLectoriumImage } from 'Assets/images/lectorium'

import { Flex } from 'Components/UI'

import {
  EditorInputField,
  InputField,
  SelectField as SelectBase,
} from 'Components/Blocks/Fields'

export const Background = styled(Flex)`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
`

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 980px;
  margin: 0 auto;
  padding-top: 40px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  color: #333333;
`

export const LectoriumLogo = styled.img.attrs({
  src: createLectoriumImage.src,
})`
  width: 232px;
  height: 232px;
`

export const SubText = styled.span`
  color: #828282;
  font-size: 18px;
  line-height: 28px;
  margin-top: 14px;
`

export const Step = styled(Flex)`
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  color: #333333;

  span {
    color: #49ceb1;
  }
`

export const StyledForm = styled(Flex).attrs({
  as: 'form',
})`
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 30px;
`

export const SectionTitle = styled(Flex).attrs({
  as: 'h2',
})`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;
  width: 100%;
  color: #333333;
`

export const FormInput = styled(InputField)`
  width: 100%;

  input,
  textarea {
    font-size: 16px;
    background-color: transparent;
    border: 2px solid
      ${props => (props.isError ? '#FFA08C' : themeGet('colors.green'))};
  }

  label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    color: #49ceb1;
  }
`

export const FormSelect = styled(SelectBase)`
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
    color: ${themeGet('colors.green')};
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
  label {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    color: ${themeGet('colors.green')};
  }
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
})`
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

export const VideoDescription = styled(Flex)`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  a {
    margin-left: 5px;
    font-weight: 600;
    color: #828282;
    &:visited,
    &:focus,
    &:active {
      color: #828282;
    }
  }
`
