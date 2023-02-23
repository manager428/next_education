import styled, { css } from 'styled-components'
import { fontSize } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-direction: column;
  position: relative;
  flex-shrink: 0;

  &.error {
    .react-select__container .react-select__control {
      border: 2px solid ${themeGet('colors.red')};
    }
  }
`

export const Label = styled(Flex).attrs({
  as: 'label',
})`
  color: ${themeGet('colors.green')};
  font-size: 16px;
  line-height: 16px;
`

export const Tooltip = styled(Flex).attrs({
  as: 'span',
})`
  font-size: 12px;
  text-align: right;
  margin-top: 6px;
  color: ${themeGet('colors.red')};
  border-radius: 6px;
  transition: opacity 1s;

  ${props =>
    props.centered &&
    css`
      right: 50%;
      transform: translateX(50%);
    `};

  ${fontSize};
`
