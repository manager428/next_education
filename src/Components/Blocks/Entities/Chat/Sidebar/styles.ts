import styled, { css } from 'styled-components'
import { width, WidthProps } from 'styled-system'

import { backButtonGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const SidebarWrap = styled.div<WidthProps>`
  max-width: 426px;
  width: 100%;
  background-color: #f3f5f9;
  height: 100%;
  padding: 0px 8px 0px 0px;
  border-radius: 0px 8px 8px 0px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${width}

  .simplebar-content {
    padding: 14px 0px !important;
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`

export const SidebarHeader = styled(Flex)`
  width: 100%;
  align-items: center;
  padding-left: 20px;
`

export const SearchWrapper = styled(Flex)`
  flex-wrap: nowrap;
  background-color: white;
  border-radius: 20px;
  height: 40px;
  padding: 0px 14px;
  font-size: 23px;
  align-items: center;
`

export const SearchInput = styled(Flex).attrs({
  as: 'input',
})<{ wide?: boolean }>`
  border: 0px;
  font-size: 18px;
  width: 100%;
  outline: 0px;
  color: black;
  font-family: 'Nunito Sans';
  opacity: ${props => (props.wide ? '1' : '0')};
  ::placeholder {
    color: #bdbdbd;
    font-family: 'Nunito Sans';
  }
`

export const HideButton = styled(Icon).attrs({
  icon: backButtonGlyph,
  size: 24,
})<{
  rotated?: boolean
}>`
  cursor: pointer;
  fill: #bdbdbd;

  &:hover {
    fill: #d3dae8;
  }

  ${props =>
    props.rotated &&
    css`
      transform: rotate(180deg);
    `}
`
