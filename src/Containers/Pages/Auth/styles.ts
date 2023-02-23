import styled, { css } from 'styled-components'
import { margin, padding, typography, TypographyProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import {
  resetPasswordLogo,
  schoolLargeLogo,
  signInLogo,
} from 'Assets/images/auth'
import { showPasswordGlyph } from 'Assets/svg/auth'
import { checkGlyph } from 'Assets/svg/common'

import { Element, Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import {
  CheckboxField as CheckBoxBase,
  DebouncingValidatingField as DebouncingValidatingFieldBase,
  InputField as InputBase,
  SelectField as SelectBase,
} from 'Components/Blocks/Fields'

export const Container = styled(Flex)`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
`

export const FormContainer = styled(Flex).attrs({ as: 'form' })`
  max-width: 980px;
  margin: 0 auto;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
`

export const Background = styled.div`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  padding: 20px 0;
  flex: 1;
  min-height: 85vh;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #6e46ff;
  padding: 0;
  width: 100%;
  text-align: center;
  margin: 62px 0 0 0;
`

export const SubTitle = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: #071d40;
  margin-top: 22px;
  text-align: center;
  width: 100%;
`

export const LinkHtml = styled.a<TypographyProps & { type?: 'border' }>`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.color || '#6E46FF'};
  text-decoration: none;

  &:visited,
  &:focus,
  &:active {
    color: ${props => props.color || '#6E46FF'};
  }

  ${props =>
    props.type === 'border' &&
    css`
      border: 1px solid #6e46ff;
      box-sizing: border-box;
      border-radius: 100px;
      padding: 6px 14px;
    `}

  ${typography};
`

export const Logo = styled(Image).attrs({
  layout: 'fixed',
  placeholder: 'blur',
})``

export const ResetPasswordLogo = styled(Image).attrs({
  src: resetPasswordLogo,
  alt: 'reset password',
  layout: 'fixed',
  priority: true,
})``

export const ItemTitle = styled(Element)`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  width: 160px;
  height: 32px;
  color: #bdbdbd;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  align-items: center;
`
export const Item = styled.a`
  display: flex;
  width: 224px;
  flex-wrap: wrap;
  text-decoration: none;
  justify-content: center;

  &:hover {
    ${ItemTitle} {
      border: 2px solid #6e46ff;
      box-sizing: border-box;
      border-radius: 100px;
      color: #6e46ff;
    }
  }
`

export const Description = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #071d40;
  width: 100%;
  text-align: center;
  margin-top: 26px;
`

export const FormWrap = styled(Flex)`
  flex-wrap: wrap;
  margin: 0 auto;
`

export const FormTitle = styled(Flex).attrs({ as: 'span' })`
  font-weight: 600;
  width: 100%;
  text-align: center;
  justify-content: center;

  font-size: ${props => props.fontSize ?? '24px'};
  line-height: ${props => props.lineHeight ?? '34px'};
`

export const StudentLogo = styled(Image).attrs({
  src: signInLogo,
  alt: 'Logo',
  layout: 'fixed',
  priority: true,
})``

export const Input = styled(InputBase).attrs(props => ({
  type: props.masked ? 'password' : 'text',
}))`
  width: 100%;
  margin-bottom: 20px;

  ${margin};

  input {
    color: #071d40;
    font-size: 16px;
    line-height: 22px;
    border: 2px solid
      ${props =>
        props.isError ? themeGet('colors.red') : themeGet('colors.green')};
    background-color: ${props => props.backgroundColor || 'transparent'};

    ${props =>
      props.masked &&
      css`
        -webkit-text-security: disc;
        text-security: disc;
        letter-spacing: initial !important;
      `}
    &::placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
    &::-moz-placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
    &:-moz-placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }

    &::-webkit-input-placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
  }
`

export const Select = styled(SelectBase)`
  .react-select__container {
    margin-bottom: 20px;

    .react-select__control {
      border: 2px solid
        ${props =>
          props.isError ? themeGet('colors.red') : themeGet('colors.green')};
    }

    .react-select__placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
  }
`

export const DebouncedInput = styled(DebouncingValidatingFieldBase).attrs(
  props => ({
    type: props.masked ? 'password' : 'text',
  }),
)`
  width: 100%;
  margin-bottom: 20px;
  input {
    color: #071d40;
    font-size: 16px;
    line-height: 22px;
    border: 2px solid
      ${props =>
        props.isError ? themeGet('colors.red') : themeGet('colors.green')};
    background-color: transparent;

    ${props =>
      props.masked &&
      css`
        -webkit-text-security: disc;
        text-security: disc;
        letter-spacing: initial !important;
      `}

    &::placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
    &::-moz-placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
    &:-moz-placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }

    &::-webkit-input-placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
  }
`

export const PasswordContainer = styled(Flex)`
  position: relative;
  width: 100%;
`

export const ShowPasswordButton = styled(Icon).attrs({
  icon: showPasswordGlyph,
  width: 22,
  height: 22,
})<{ active?: boolean }>`
  position: absolute;
  fill: #d3dae8;
  right: 10px;
  top: 12px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      fill: #6e46ff;
    `}
`

export const PasswordMatchIcon = styled(Icon).attrs({
  icon: checkGlyph,
  width: 20,
  height: 20,
})`
  position: absolute;
  fill: #49ceb1;
  right: 10px;
  top: 15px;
  cursor: pointer;
  border: 1px solid #6e46ff;
  border-radius: 50%;
  padding: 4px;
`

export const CheckBox = styled(CheckBoxBase)`
  label {
    margin-bottom: 0;
  }

  div {
    :after {
      width: 9px;
      height: 5px;
      top: 4px;
      left: 3px;
    }
  }
`

export const SubmitButton = styled(Flex).attrs({ as: 'button' })`
  background: #6e46ff;
  border-radius: 10px;
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  outline: 0px;
  padding: 8px 16px;
`

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: ${themeGet('colors.red')};
  text-align: center;
  width: 100%;
  justify-content: center;
  position: relative;

  &:not(:empty) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const WarningWrap = styled(Flex)`
  position: relative;
`

export const CheckboxGroupTitle = styled(Flex).attrs({ as: 'span' })`
  font-size: 16px;
  line-height: 22px;
`

export const Button = styled(Flex).attrs({ as: 'button' })`
  padding: 8px 16px;
  background: #6e46ff;
  border-radius: 10px;
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  outline: 0px;
`

export const SignInTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #071d40;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const SuccessText = styled.span`
  color: ${themeGet('#6E46FF')};
`

export const SchoolLogo = styled(Image).attrs({
  src: schoolLargeLogo,
  width: 420,
  height: 280,
  layout: 'fixed',
  alt: 'School',
})``

export const ButtonLink = styled(Element)<{ green?: boolean }>`
  background: #c869f5;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 10px;

  ${props =>
    props.green &&
    css`
      background: ${themeGet('colors.green')};
    `}

  ${padding}
`
