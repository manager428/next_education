import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

import { SelectField as BaseSelect } from 'Components/Blocks/Fields'

import { FormInput } from '../styles'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
`

export const QuizContainer = styled(Flex)`
  width: 100%;
  margin-top: 30px;
  flex-wrap: wrap;
`
export const Title = styled(Flex).attrs({
  as: 'h2',
})`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #333333;
`

export const QuizDelete = styled(Flex).attrs({ as: 'button' })`
  border: 2px solid #ffa08c;
  box-sizing: border-box;
  cursor: pointer;
  justify-content: center;
  border-radius: 10px;
  font-size: 16px;
  height: 40px;
  width: 164px;
  align-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  color: black;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  outline: 0px;
`
export const QuizzAdd = styled(QuizDelete)`
  width: 210px;
`

export const Select = styled(BaseSelect)`
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

export const Letter = styled.span`
  font-size: 18px;
  line-height: 22px;
  margin-right: 10px;
`

export const AnswerInput = styled(FormInput)`
  ${props =>
    props.isCorrect &&
    css`
      textarea,
      input {
        background-color: #baece1;
      }
    `}
`
