import styled from 'styled-components'

import Image from 'next/image'

import { congratulationsImage } from 'Assets/images/common'
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
  width: 480px;
  justify-content: center;
  position: relative;
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

export const Congratulation = styled(Image).attrs({
  src: congratulationsImage,
  width: 360,
  height: 288,
})`
  object-fit: contain;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  margin: 5px 0px 0px 0px;
  padding: 0;
  text-align: center;
  width: 100%;
`

export const SubText = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  text-align: center;
  width: 100%;
  margin-top: 10px;
`
