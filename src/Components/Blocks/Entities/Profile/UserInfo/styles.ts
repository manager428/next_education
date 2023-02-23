import styled from 'styled-components'

import { settingsIconGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

export const Wrap = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Avatar = styled(Flex).attrs({ as: 'img' })`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  object-fit: cover;
`

export const EditBlock = styled(Flex)`
  visibility: hidden;
  opacity: 0;
  color: #bdbdbd;
  cursor: pointer;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 2px solid #bdbdbd;
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  justify-content: center;
  svg {
    margin: 0 !important;
  }

  &:hover {
    visibility: visible;
    opacity: 1;
    transition: all 1s ease;
  }
`

export const Name = styled(Element)`
  font-size: 20px;
  line-height: 20px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  word-break: break-all;
`

export const TextField = styled(Element)`
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  width: 100%;
  text-align: center;
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
