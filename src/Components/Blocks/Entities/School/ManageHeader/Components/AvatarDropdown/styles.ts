import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import { theme } from 'Theme'

export const Container = styled(Flex)`
  cursor: pointer;
`

export const Avatar = styled(Image).attrs({
  width: 58,
  height: 58,
  layout: 'fixed',
  objectFit: 'cover',
})`
  border-radius: 100px;
`

export const Dropdown = styled(Flex)`
  position: relative;
  align-items: center;
`

export const FullName = styled(Element).attrs({
  as: 'span',
})`
  color: ${theme.colors.gray};
  font-weight: 600;
  font-size: 20px;
`

export const ArrowWrap = styled(Flex)``

export const ArrowIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  fill: '#828282',
  size: 16,
})``

export const List = styled.ul`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  width: 100%;
  top: 45px;
  z-index: 20;
  padding: 14px;
`

export const Option = styled.li`
  font-size: 16px;
  line-height: 16px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14px;

  a {
    color: ${themeGet('colors.graySecondary')};
    &:hover {
      color: ${themeGet('colors.green')};
    }
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`
