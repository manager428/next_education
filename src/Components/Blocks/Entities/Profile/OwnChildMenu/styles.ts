import styled from 'styled-components'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 14px;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Menu = styled.div`
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

export const MenuButton = styled.div`
  height: 42px;
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

export const MenuItem = styled.div`
  background-color: transparent;
  border: none;
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  outline: 0px;
  margin-bottom: 12px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #49ceb1;
  }
`

export const RequestButton = styled.button`
  padding: 10px 14px;
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

export const MenuIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  size: 20,
})`
  fill: #49ceb1;
`

export const WhiteButtonText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
`
