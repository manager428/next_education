import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
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
