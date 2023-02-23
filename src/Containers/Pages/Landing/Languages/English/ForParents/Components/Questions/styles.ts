import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
`

export const Inner = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`

export const Question = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #cad2e3;
  padding: 20px 0px;

  transition: all 0.3s ease;

  svg {
    cursor: pointer;
  }

  a {
    color: ${themeGet('colors.orange')};
  }
`
