import styled from 'styled-components'
import { fontSize, textAlign, width } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import Link from 'next/link'
import SimpleBar from 'simplebar-react'

import {
  tableBanActiveGlyph,
  tableBanGlyph,
  tableBlockActiveGlyph,
  tableBlockGlyph,
  tableUnblockGlyph,
  tableWarningGlyph,
  userBookmarkGlyph,
} from 'Assets/svg/moderator'

import { Flex, Icon } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const Container = styled.div`
  width: 100%;
`

export const Header = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  .react-select__container {
    .react-select__control {
      border: 0;
      background-color: transparent !important;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: transparent !important;
        border: 0;
      }

      .react-select__value-container {
        padding-left: 0;
        width: 100%;
      }

      .react-select__placeholder {
        color: #071d40;
      }

      .react-select__indicators {
        svg {
          fill: #071d40;
        }
      }
    }

    .react-select__menu {
      border: 1px solid ${themeGet('colors.green')};
    }
  }
`

export const Content = styled(Flex)`
  flex-wrap: wrap;
  .column-header {
    border: 2px solid #d3dae8;
    border-right: 0px;

    padding: 14px;

    &:first-of-type {
      border-left: 0px;
    }
    &:last-of-type {
      border-right: 0px;
    }
  }

  .column-cell {
    border: 2px solid #d3dae8;
    border-right: 0;
    border-top: 0;
    align-items: flex-start;
    padding: 14px;

    &:first-of-type {
      border-left: 0;
    }

    &:last-of-type {
      border-right: 0;
    }
  }

  .table-row {
    align-items: inherit;
  }
`

export const UserContainer = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 18px 14px 18px 0px;
  align-items: center;
  align-content: center;
`

export const UserAvatar = styled.img`
  align-self: flex-start;
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 50%;
`

export const UserName = styled(Flex)`
  width: 100%;
  color: #333333;
  font-size: 14px;
  text-align: center;

  a {
    color: #333333;
    text-decoration: none;
  }
`

export const UserEmail = styled(UserName)`
  color: #828282;
`

export const UserBookmarkIcon = styled(Icon).attrs({
  icon: userBookmarkGlyph,
  width: 12,
  height: 16,
})`
  cursor: pointer;
`

export const Text = styled(Flex)`
  font-size: 14px;
  line-height: 20px;
  color: #828282;

  ${textAlign};
  ${fontSize};
`

export const TableLink = styled(Link)`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 6px 4px;
  text-decoration: none;
  color: #49ceb1;
  text-align: center;

  ${width};
`

export const SectionName = styled(Flex)`
  color: #828282;
  font-size: 14px;
  width: 100%;
  justify-content: center;
`

export const SectionButton = styled(Flex).attrs({ as: 'button' })`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 6px 4px;
  text-decoration: none;
  color: #49ceb1;
  text-align: center;
  box-shadow: none;
  background-color: transparent;
  justify-content: center;
  cursor: pointer;

  ${width};
`

export const ContentBar = styled(SimpleBar)`
  overflow-y: auto;
  max-height: 120px;

  width: 100%;

  font-size: 12px;
  line-height: 16px;
  color: #828282;
  p,
  h1,
  h2,
  h3,
  li,
  ul {
    font-size: 12px;
    line-height: 16px;
  }
  strong,
  b {
    color: #071d40;
  }

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }

  .simplebar-content {
    padding: 6px 0px !important;
    padding-right: 10px !important;
    padding-left: 6px !important;
  }
  .simplebar-vertical {
    width: 8px !important;
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }

  .simplebar-scrollbar {
    border-radius: 8px;
    //width: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`

export const ActionButton = styled(Flex).attrs({
  as: 'button',
})`
  box-shadow: none;
  background-color: unset;
  border: 0;
  outline: 0;
  cursor: pointer;
`

export const WarningIcon = styled(Icon).attrs({
  icon: tableWarningGlyph,
  size: 26,
  // fill: '#BDBDBD',
  stroke: '#BDBDBD',
})`
  stroke: #bdbdbd;
`

export const BanIcon = styled(Icon).attrs(props => ({
  icon: props.active ? tableBanActiveGlyph : tableBanGlyph,
  size: 26,
}))``

export const BlockIcon = styled(Icon).attrs(props => ({
  icon: props.active ? tableBlockActiveGlyph : tableBlockGlyph,
  size: 26,
}))``

export const UnblockUserIcon = styled(Icon).attrs({
  icon: tableUnblockGlyph,
  size: 26,
})``
