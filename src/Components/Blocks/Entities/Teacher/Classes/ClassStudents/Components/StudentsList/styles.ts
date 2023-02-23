import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  justify-content: center;
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
`

export const Column = styled(Flex)`
  flex-direction: column;
  width: 474px;
  background-color: white;
  padding: 20px;
  border-radius: 14px;
`

export const Avatar = styled(Image).attrs({
  width: 60,
  height: 60,
  objectFit: 'cover',
})`
  border-radius: 100px;
`

export const List = styled.ul`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  width: 176px;
  top: 20px;
  z-index: 20;
  padding: 14px;
`

export const Option = styled.li`
  font-size: 16px;
  line-height: 16px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`

export const ListButton = styled(Element).attrs({
  as: 'button',
  type: 'button',
})`
  color: ${themeGet('colors.graySecondary')};
  &:hover {
    color: ${themeGet('colors.green')};
  }
  margin: 0;
  padding: 0;
`
