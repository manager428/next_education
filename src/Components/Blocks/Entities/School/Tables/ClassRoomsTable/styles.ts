import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { Element, Flex } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled(Flex)`
  flex-wrap: wrap;
  .column-header {
    font-size: 16px;
    line-height: 16px;
    color: ${themeGet('colors.graySecondary')};
    border-bottom: 1px solid #d3dae8;
    padding-bottom: 14px;

    .sort-container {
      position: relative;
      right: unset;
    }
  }

  .column-cell {
    border-bottom: 1px solid #d3dae8;
    align-items: flex-start;
    padding: 14px 0px;
  }

  .table-row {
    align-items: inherit;
  }
`

export const UserContainer = styled(Flex)``

export const Avatar = styled(Image).attrs({
  width: 56,
  height: 56,
  objectFit: 'cover',
})`
  border-radius: 100px;
`

export const TableLink = styled(Element).attrs({ as: 'a' })`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid ${props => props.color || 'black'};
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
  line-height: 14px;
  outline: 0px;
  padding: 6px 4px;
  box-shadow: none;
  background-color: transparent;
  align-self: flex-end;
  color: ${props => props.color || 'black'};
  cursor: pointer;
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
