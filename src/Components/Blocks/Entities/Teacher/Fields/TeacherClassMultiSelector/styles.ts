import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Checkbox, Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;

  .react-select__menu-list {
    padding-top: 14px;
  }

  .react-select__multi-value__label {
    padding-left: 0px;
    font-size: 16px;
    line-height: 16px;
    color: ${themeGet('colors.graySecondary')};
  }

  .react-select__control {
    height: 40px;
    overflow: hidden;
    background: transparent;

    &:hover,
    &--is-focused,
    &--is-focused:hover,
    &:focus-within {
      background: transparent;
    }
  }
`

export const StyledCheckbox = styled(Checkbox)`
  font-size: 16px;
  label {
    margin-left: 10px;
  }
  .checkbox {
    border-color: ${themeGet('colors.blueMid2')};
    &.checked {
      border-color: ${themeGet('colors.green')};
    }
  }
`

export const StyledValueContainer = styled(Element)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 98%;
`
