import styled, { css } from 'styled-components'
import { fontSize } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

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
