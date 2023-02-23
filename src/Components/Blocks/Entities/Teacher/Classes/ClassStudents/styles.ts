import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

export const Content = styled(Flex)`
  width: 100%;
  min-height: 200px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
`

export const Circle = styled(Element)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${themeGet('colors.gray')};
`

export const Button = styled(Flex).attrs({ as: 'button' })`
  border: 1px solid ${props => props.color ?? theme.colors.green};
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.color ?? theme.colors.green};
  padding: 7px 16px;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${props =>
    props.gray &&
    css`
      color: ${themeGet('colors.graySecondary')};
      border: 1px solid ${themeGet('colors.graySecondary')};
      cursor: default;
    `}

  :hover {
    opacity: 0.7;
  }
`
