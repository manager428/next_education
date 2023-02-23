import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import {
  addUserGlyph,
  editMessageIcon,
  settingsIconGlyph,
} from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import { theme } from 'Theme'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;

  .react-select__control {
    background: transparent;

    &:hover {
      background: transparent;
    }

    &--is-focused,
    &--is-focused:hover,
    &:focus-within {
      background: transparent;
    }
  }
`

export const CopyButton = styled(Element).attrs({ as: 'button' })`
  font-family: 'Yrsa', sans-serif;
  width: 100%;
  box-shadow: rgba(0, 220, 180, 0.26) 0px 6px 12px;
  background: #49ceb1;
  border-radius: 27px;
  height: 40px;
  padding: 0px 39px;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
  display: flex;

  border: 0;
  transition: all 0.1s ease;
  outline: 0px;

  &:active {
    background-color: #ffa08c;
  }
`

export const AddNew = styled(Flex).attrs({ as: 'button' })`
  border: 1px solid ${theme.colors.green};
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  font-size: 18px;
  line-height: 24px;
  color: ${theme.colors.green};
  padding: 7px 16px;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
`

export const AddIcon = styled(Icon).attrs({
  icon: addUserGlyph,
  size: 22,
  fill: theme.colors.green,
})`
  margin-right: 10px;
`

export const RoundedFlex = styled(Flex)`
  background-color: #ffffff;
  border-radius: 14px;
  padding: 20px;
`

export const ClassLogo = styled(Image).attrs({
  width: 80,
  height: 80,
  layout: 'fixed',
})`
  border-radius: 50%;
  cursor: pointer;
`

export const EditWrapper = styled(Flex)`
  width: 24px;
  height: 24px;
  border: 2px solid ${themeGet('colors.grayMid')};
  border-radius: 50%;
  position: absolute;
  top: -1px;
  right: 3px;
  background: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const EditIcon = styled(Icon).attrs({
  icon: editMessageIcon,
  size: 12,
})`
  fill: ${themeGet('colors.grayMid')};
`

export const RoomEditWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
`

export const SettingsIcon = styled(Icon).attrs({
  icon: settingsIconGlyph,
  size: 26,
})`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  &:hover {
    animation: rotating 2s linear infinite;
  }
`

export const DropdownLabel = styled(Element)`
  color: ${themeGet('colors.graySecondary')};
  font-size: 16px;
  &:hover {
    color: ${themeGet('colors.green')};
  }
`
