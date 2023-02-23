import styled from 'styled-components'

import { closeIconGlyph } from 'Assets/svg/common'

import { Flex, Icon, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  .Modal {
    background-color: white;
  }
`

export const Content = styled(Flex)`
  flex-wrap: wrap;
  width: 640px;
  justify-content: center;
  position: relative;
  padding: 16px;
`

export const CloseButton = styled(Icon).attrs({
  icon: closeIconGlyph,
  size: 24,
})`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0px;
`

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  padding: 0;
  font-weight: 400;
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const ShareButton = styled(Flex)`
  font-size: 12px;
  line-height: 16px;
  width: 64px;
  flex-wrap: wrap;
  color: #333333;
  button {
    outline: 0px;
  }
`

export const CopyField = styled(Flex)`
  width: 100%;

  input {
    background-color: white;
  }
`

export const CopyButton = styled(Flex)`
  background: #6e46ff;
  border-radius: 10px;
  height: 40px;
  padding: 10px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    background-color: #ffa08c;
  }
`
