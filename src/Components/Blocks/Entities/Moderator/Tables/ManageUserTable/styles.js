import styled, { css } from 'styled-components'
import { textAlign, width } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { userBookmarkGlyph } from 'Assets/svg/moderator'

import { Flex, Icon } from 'Components/UI'

export const Container = styled.div`
  width: 100%;
`

export const Header = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  .search-wrapper {
    input {
      height: 32px;
    }

    svg {
      top: 8px;
    }

    .reset-icon {
      top: 12px;
    }
  }

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
    padding-top: 10px;
    padding-bottom: 10px;

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
`

export const TableLink = styled.a`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 6px 4px;
  text-decoration: none;
  color: #49ceb1;
  text-align: center;

  ${width};
`

export const TableActionButton = styled(Flex).attrs({
  as: 'button',
})`
  cursor: pointer;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 5px;
  background: unset;
  box-shadow: none;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 120px;
  height: 26px;
  font-size: 14px;
  color: #bdbdbd;

  ${props =>
    props.active &&
    css`
      border: 1px solid #49ceb1;
      color: #49ceb1;
    `}
`

export const RelativeCont = styled(Flex)`
  position: relative;
`

export const Tab = styled(Flex).attrs({
  as: 'button',
})`
  box-shadow: none;
  border: 0;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  color: #828282;
  background-color: unset;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `};
`
