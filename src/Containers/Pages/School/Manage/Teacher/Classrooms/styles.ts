import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

import { theme } from 'Theme'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
  position: relative;
  flex-wrap: wrap;
`

export const Content = styled(Flex)`
  width: 100%;
  min-height: 500px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`

export const Text = styled(Flex)`
  color: ${themeGet('colors.grayMid')};
  font-size: 18px;
  line-height: 18px;
  align-items: center;
  cursor: pointer;
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
