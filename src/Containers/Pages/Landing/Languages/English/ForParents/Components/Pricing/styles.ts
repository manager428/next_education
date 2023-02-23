import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  background-color: white;
  width: 100%;
  justify-content: center;
`

export const Inner = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Card = styled(Flex)<{ selected?: boolean }>`
  flex-wrap: wrap;
  width: 100%;
  background: #f7faff;
  border-radius: 14px;
  border: 2px solid #e4e9f3;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      border-color: ${themeGet('colors.green')};
    `}
`

export const ChoosePlanLink = styled(Flex).attrs({ as: 'a' })`
  background: #49ceb1;
  border-radius: 5px;
  align-items: center;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: white;
  justify-content: center;
`

export const CheckboxWrapper = styled(Element)`
  input {
    width: 24px;
    height: 24px;
  }
  .checkbox {
    border-radius: 20px;
    border-width: 3px;
    border-color: #cad2e3;

    width: 24px;
    height: 24px;

    &.checked {
      border-color: ${themeGet('colors.green')};
    }

    :after {
      width: 10px;
      height: 5px;
      top: 4px;
      left: 3px;
      border-width: 3px;
    }
  }

  label {
    margin-bottom: 0;
  }
`
