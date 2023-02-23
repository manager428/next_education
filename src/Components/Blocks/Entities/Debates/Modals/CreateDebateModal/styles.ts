import styled from 'styled-components'

import { closeIconGlyph, tagsGlyph } from 'Assets/svg/common'

import { Flex, Icon, Modal as ModalBase } from 'Components/UI'

import { InputField, SelectField } from 'Components/Blocks/Fields'

import 'simplebar/dist/simplebar.min.css'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  display: flex;
  padding: 0 !important;

  .Modal {
    background-color: white !important;
  }
`

export const Content = styled.div`
  min-height: 550px;
  position: relative;
  max-width: 942px !important;
  width: 100%;
  padding: 40px;
  max-width: 942px !important;
`

export const InnerContent = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const CloseButton = styled(Icon).attrs({
  icon: closeIconGlyph,
  size: 24,
})`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1000;
`

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: #8de1d1;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;

  span {
    color: #333333;
    display: flex;
    font-weight: 600;
    justify-content: center;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  display: flex;
  height: 100%;
  margin-top: 24px;
  flex-wrap: wrap;
`

export const TagsIcon = styled(Icon).attrs({
  icon: tagsGlyph,
  size: 16,
})``

export const FormInput = styled(InputField)`
  input {
    font-size: 16px;
  }
`

export const FormSelect = styled(SelectField)`
  .description-field {
    &.error {
      border: 2px solid #ffa08c !important;
    }
  }

  &.react-select__container {
    &.error {
    }

    .react-select__control {
      background-color: transparent !important;
      min-height: 40px;
      max-height: 40px;
      margin-top: 0px;
    }

    .react-select__value-container {
      min-height: 40px;
      max-height: 40px;
      padding: 0 12px;
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

    .react-select__single-value {
      font-size: 16px;
      line-height: 22px;
      font-family: 'Nunito Sans', 'sans-serif';
      color: #071d40;
    }

    .react-select__indicators {
      height: 40px;
    }

    .react-select__placeholder {
      font-size: 16px;
      line-height: 22px;
      font-family: 'Nunito Sans', 'sans-serif';
      color: #828282;
    }

    .react-select__menu {
      border: 1px solid #6e46ff;
      box-sizing: border-box;
      border-radius: 5px;

      font-size: 16px;
      line-height: 22px;
    }
  }
`

export const Button = styled(Flex).attrs({
  as: 'button',
})`
  width: 200px;
  justify-content: center;
  align-content: center;
  background: #49ceb1;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: none;
  border: 0px;
  padding: 10px 14px;
`

export const ErrorContainer = styled(Flex)`
  color: #eb5757;
  font-size: 13px;
  line-height: 16px;
  margin-top: 20px;
  justify-content: center;
  width: 100%;
`
