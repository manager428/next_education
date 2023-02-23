import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import SimpleBar from 'simplebar-react'

import { Element, Flex, Modal as ModalBase } from 'Components/UI'

export const Modal = styled(ModalBase).attrs({
  p: 0,
})`
  width: 1px;
  height: 1px;
  .Modal {
    background-color: white;
    padding: 20px;
    overflow: visible;
  }
`

export const Content = styled(Flex)`
  width: 340px;
  flex-wrap: wrap;
  min-height: 234px;
  flex-direction: column;
  position: relative;
`

export const Title = styled(Element).attrs({ as: 'span' })`
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  text-align: left;
  color: ${themeGet('colors.green')};
`

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`

export const Button = styled.button<{ primary?: boolean; gray?: boolean }>`
  flex-wrap: wrap;
  box-shadow: none;
  border: 0px;
  outline: 0px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 18px;
  background-color: #d3dae8;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background-color: ${themeGet('colors.green')};
    `}

  ${props =>
    props.gray &&
    css`
      background-color: ${themeGet('colors.blueMid')};
    `}
`

export const Error = styled(Flex)`
  color: #eb5757;
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 5px;
  flex-wrap: wrap;
`

export const CheckBox = styled(Flex)<{
  checked: boolean
}>`
  width: 18px;
  height: 18px;
  position: relative;
  border: 2px solid #d3dae8;
  background: white;
  border-radius: 4px;
  margin: 0;
  top: 0;

  &:after {
    content: '';
    width: 7px;
    height: 3px;
    position: absolute;
    top: 4px;
    left: 3px;
    border: 2px solid #49ceb1;
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    transform: rotate(-48deg);
  }

  ${props =>
    props.checked &&
    css`
      border: 2px solid #8de1d1;
      background: white;
      :after {
        opacity: 1;
      }
    `};
`

export const List = styled(SimpleBar)`
  overflow-y: auto;
  max-height: 300px;
  height: 300px;
  width: 100%;

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }
  .simplebar-placeholder {
    display: none;
  }

  .simplebar-content {
    padding: 6px 0px !important;
    padding-right: 15px !important;
    padding-left: 0px !important;
    height: fit-content;

    :before,
    :after {
      display: none;
    }
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
export const Avatar = styled.img`
  border-radius: 50px;
  width: 80px;
  height: 80px;
`

export const Name = styled(Flex).attrs({ as: 'span' })`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  justify-content: center;
`
export const ListContainer = styled(Flex)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  align-items: center;
  align-content: center;
  margin-bottom: 14px;
  cursor: pointer;
`
