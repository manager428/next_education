import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Wrap = styled(Flex)`
  padding: 0 0 14px;
`
export const Container = styled(Flex)`
  justify-content: space-between;
  position: relative;
  width: 100%;
`

export const Menu = styled('div')`
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  padding: 12px 14px;
  text-align: left;
  border: 1px solid #d3dae8;
  position: absolute;
  top: 120%;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 10000;
`

export const MenuItem = styled('button')`
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 16px;
  outline: 0px;
  margin-bottom: 12px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${themeGet('colors.green')};
  }
`

export const RequestButton = styled.button`
  padding: 9px 14px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  color: #49ceb1;
  font-size: 18px;
  line-height: 20px;
  border: 1px solid #49ceb1;
  background-color: transparent;
  outline: 0px;

  &:hover {
    opacity: 0.7;
  }
`

export const MenuButton = styled.div`
  height: 40px;
  width: 40px;
  min-width: 40px;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  border: 1px solid #49ceb1;
`
export const MenuIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  size: 20,
})`
  fill: #49ceb1;
`
