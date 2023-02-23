import styled, { css } from 'styled-components'
import { margin, width } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { Flex } from 'Components/UI'

import {
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

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #49ceb1;
  padding: 0;
  width: 100%;
  text-align: center;
  margin: 62px 0 0 0;
`

export const Logo = styled(Image).attrs({
  width: 180,
  height: 130,
  layout: 'fixed',
})``

export const Description = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #071d40;
  width: 100%;
  text-align: center;
  margin-top: 26px;
`

export const FormWrap = styled(Flex)<{ locale?: string }>`
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  flex: 1;
`

export const Input = styled(InputBase).attrs(props => ({
  type: props.masked ? 'password' : 'text',
}))`
  width: 100%;

  ${margin};

  input {
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
  }
`

export const SubmitButton = styled.button<{
  disabled?: boolean
  width?: number
}>`
  width: 160px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  background-color: ${themeGet('colors.green')};
  border-radius: 5px;
  text-align: center;
  color: white;
  margin-top: auto;

  ${props =>
    props.disabled &&
    css`
      background-color: ${themeGet('colors.graySecondary')};
    `}

  ${width};
`

export const ErrorsContainer = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  color: #ffa08c;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  min-height: 20px;
  justify-content: center;
  position: relative;
`

export const Button = styled(Flex).attrs({ as: 'button' })`
  padding: 8px 16px;
  background: #6e46ff !important;
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

export const Select = styled(SelectBase)`
  .react-select__container {
    width: 100%;
    .react-select__control {
      min-height: 38px;
      border: 2px solid
        ${props =>
          props.isError ? themeGet('colors.red') : themeGet('colors.green')};
    }

    .react-select__placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
  }
`
