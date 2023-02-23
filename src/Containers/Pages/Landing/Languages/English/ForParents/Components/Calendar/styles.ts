import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element, Flex } from 'Components/UI'

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

export const Sidebar = styled(Flex)`
  width: 140px;
  flex-direction: column;
`

export const SidebarItem = styled(Element).attrs({ as: 'button' })<{
  active?: boolean
}>`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  color: ${themeGet('colors.green')};
  padding: 8px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: #49ceb1;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }

  ${({ active }) =>
    active &&
    css`
      color: white;
      background: #49ceb1;
    `};
`

export const Content = styled(Flex)``

export const TopicContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;

  img {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }
`

export const EmojiContainer = styled(Flex)`
  border-radius: 10px;
  background-color: white;
  font-size: 35px;
  align-items: center;
  align-content: center;
  justify-content: center;
`
