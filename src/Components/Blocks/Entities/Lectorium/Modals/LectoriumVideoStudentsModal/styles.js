import styled, { css } from 'styled-components'

import Image from 'next/image'
import SimpleBar from 'simplebar-react'

import { closeIconGlyph, searchIconGlyph } from 'Assets/svg/common'

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
  width: 100%;
  justify-content: center;
  position: relative;
  padding: 30px;
`

export const LoaderContainer = styled(Flex)`
  position: relative;
  width: 100%;
  min-height: 400px;
  height: 400px;
`

export const CloseButton = styled(Icon).attrs({
  icon: closeIconGlyph,
  height: 24,
  width: 24,
})`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0px;
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

export const Description = styled(Flex)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  margin-top: 10px;
`

export const UserListWrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  height: 480px;
`

export const Header = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const List = styled(SimpleBar)`
  flex-grow: 1;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  max-height: 400px;
  align-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;

  .simplebar-content {
    margin: 0 auto;
    padding-right: 15px !important;
    min-height: 400px;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
  .simplebar-track {
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

export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  max-width: 326px;
  width: 100%;

  img {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    left: 14px;
  }
  input {
    height: 38px;
    border: 1px solid #828282;
    border-radius: 20px;
    padding: 0px 10px 0px 40px;
    font-size: 18px;
    outline: 0px;
    width: 100%;
    max-width: 326px;
    color: #828282;
    font-family: 'Nunito Sans';
    background-color: transparent;
  }
`

export const SearchIcon = styled(Icon).attrs({
  icon: searchIconGlyph,
  width: 20,
  height: 20,
  fill: '#828282',
})`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  left: 14px;
`

export const Tab = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-right: 24px;
  cursor: pointer;
  &:nth-last-of-type {
    margin-right: 0px;
  }

  color: #bdbdbd;
  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `}
`

export const UserWrapper = styled(Flex)`
  max-width: 50%;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`

export const Avatar = styled(Image).attrs({
  width: 64,
  height: 64,
  layout: 'fixed',
})`
  border-radius: 50%;
  object-fit: cover;
`

export const Name = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-left: 24px;
`
