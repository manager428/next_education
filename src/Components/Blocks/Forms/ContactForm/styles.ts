import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { mainLogo } from 'Assets/images/common'

import { Element, Flex } from 'Components/UI'

import { InputField, SelectField as SelectBase } from 'Components/Blocks/Fields'

export const Title = styled(Element)<{ large?: boolean }>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;

  ${props =>
    props.large &&
    css`
      font-size: 32px;
      line-height: 32px;
    `};

  @media screen and (max-width: 767px) {
    font-size: 24px;

    ${props =>
      props.large &&
      css`
        font-size: 28px;
        line-height: 28px;
      `};
  }
`

export const FormInput = styled(InputField)`
  input {
    border-width: 2px;
    ::placeholder {
      color: ${themeGet('colors.darkGray')};
      font-size: 16px;
    }
  }

  label {
    font-size: 16px;
    color: ${themeGet('colors.green')};

    span {
      color: ${themeGet('colors.orange')};
    }
  }
`

export const FormSelect = styled(SelectBase)`
  label {
    font-size: 16px;
    color: ${themeGet('colors.green')};

    span {
      color: ${themeGet('colors.orange')};
    }
  }
  .error {
    .react-select__control {
      min-height: 38px;
      background-color: transparent;
      border: 2px solid ${themeGet('colors.red')};
    }
  }

  .react-select__container {
    width: 100%;
    .react-select__control {
      min-height: 38px;
      background-color: transparent;
      border: 2px solidthemeGet('colors.green');
    }

    .react-select__placeholder {
      color: ${themeGet('colors.graySecondary')} !important;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 14px;
  }
`

export const Container = styled(Flex)`
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  max-width: 704px;

  @media screen and (max-width: 767px) {
    max-width: 288px;
    margin: 0 auto;
  }
`

export const SubmitButton = styled.button<{
  disabled: boolean
  green?: boolean
}>`
  max-width: 240px;
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  background-color: ${themeGet('colors.orange')};
  border-radius: 5px;
  text-align: center;
  color: white;

  @media screen and (max-width: 767px) {
    max-width: 122px;
    font-size: 14px;
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${themeGet('colors.graySecondary')};
    `}

  ${props =>
    props.green &&
    css`
      background-color: ${themeGet('colors.green')};
    `}
`

export const FormColumn = styled(Flex)`
  width: 336px;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  max-width: 650px;
  justify-content: center;
  margin: 28px auto 0px;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 28px;

    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
`

export const HomeLogo = styled(Image).attrs<{ large?: boolean }>(props => ({
  width: props.large ? 194 : 154,
  height: props.large ? 40 : 32,
  src: mainLogo,
}))<any>`
  object-fit: contain;

  @media screen and (max-width: 767px) {
    img {
      max-width: 320px;
    }
  }
`

export const SuccessContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`

export const SuccessTextContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  max-width: 388px;
  align-items: center;
  align-content: center;

  span {
    margin-top: 32px;
    line-height: 42px;
    font-weight: 600;
    font-size: 32px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`

export const SuccessImageContainer = styled(Flex)`
  margin-left: 52px;
  img {
    width: 520px;
    height: 420px;
    object-fit: contain;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0px;
    margin-top: 30px;

    img {
      width: 288px;
      height: 232px;
      object-fit: contain;
    }
  }
`

export const ResetSuccessForm = styled.button`
  background: #6e46ff;
  border-radius: 5px;
  font-size: 16px;
  line-height: 100%;
  color: white;
  margin-top: 32px;
  height: 40px;
  text-align: center;
  max-width: 260px;
  width: 100%;
  padding: 12px 14px;
`

export const BackLink = styled.a`
  color: ${themeGet('colors.graySecondary')};
  font-size: 20px;
  font-weight: 600;

  :focus,
  :visited,
  :active {
    color: ${themeGet('colors.graySecondary')};
  }
`
