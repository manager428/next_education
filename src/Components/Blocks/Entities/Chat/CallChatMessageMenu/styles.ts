import styled from 'styled-components'

import { messageDropdownGlyph } from 'Assets/svg/calls'
import { deleteIconGlyph, editPencilGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  position: relative;
`

export const MenuButton = styled(Icon).attrs({
  icon: messageDropdownGlyph,
  size: 20,
})`
  fill: #d3dae8;
  cursor: pointer;
`

export const MenuContainer = styled(Flex)`
  position: absolute;
  border: 1px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 5px;
  background: #ffffff;
  z-index: 999999;
  width: 112px;
  left: -115px;
  top: -15px;
  padding: 12px 14px;
  flex-wrap: wrap;
`

export const ActionButton = styled(Flex).attrs({
  as: 'button',
})`
  cursor: pointer;
  padding: 0;
  font-size: 18px;
  line-height: 22px;
  color: #bdbdbd;
  align-items: center;
  border: 0px;
  box-shadow: none;
  background-color: white;
  width: 100%;
  &:hover {
    color: #49ceb1;

    svg {
      fill: #49ceb1;
    }
  }
`

export const EditIcon = styled(Icon).attrs({
  icon: editPencilGlyph,
  size: 16,
})`
  fill: #bdbdbd;
  margin-right: 10px;
`

export const DeleteIcon = styled(Icon).attrs({
  icon: deleteIconGlyph,
  size: 16,
})`
  fill: #bdbdbd;
  margin-right: 10px;
`
