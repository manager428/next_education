import styled, { css } from 'styled-components'

import { arrowDownGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Wrap = styled(Flex)`
  flex-direction: column;
  padding: 0 0 14px;
`

export const SendFriendsRequestWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const LoaderWrap = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`

export const Menu = styled.div`
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 5px;
  padding: 12px 14px;
  text-align: left;
  border: 1px solid #d3dae8;
  position: absolute;
  bottom: -60px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`

export const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  line-height: 23px;
  color: #49ceb1;
  margin-bottom: 12px;
  cursor: pointer;
  outline: 0;
  &:last-child {
    margin-bottom: 0;
  }
`

export const RequestButton = styled.button<{ withBg?: boolean }>`
  padding: 10px 14px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  line-height: 20px;
  border: none;
  outline: 0;
  ${props =>
    props.withBg
      ? css`
          background-color: #8de1d1;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        `
      : css`
          background-color: transparent;
          border: 1px solid #49ceb1;
          color: #49ceb1;
        `}
`
export const MenuButton = styled.div<{ own?: boolean }>`
  height: 40px;
  width: 40px;
  min-width: 40px;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  outline: 0;
  ${props =>
    props.own
      ? css`
          background-color: #8de1d1;
        `
      : css`
          background-color: transparent;
          border: 1px solid #49ceb1;
        `}
`
export const MenuIcon = styled(Icon).attrs({
  icon: arrowDownGlyph,
  size: 20,
})<{
  own?: boolean
  active?: boolean
}>`
  ${props =>
    props.own
      ? css`
          fill: #ffffff;
        `
      : css`
          fill: #49ceb1;
        `}
  ${props =>
    props.active &&
    css`
      transform: rotate(180deg);
    `}
`
