import styled, { css } from 'styled-components'

import SimpleBar from 'simplebar-react'

import { Flex } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const Container = styled(Flex)`
  background: #ffffff;
  border-radius: 20px;
  width: 320px;
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -183px;
  margin-left: -200px;
  flex-wrap: wrap;
  filter: drop-shadow(0px 6px 16px rgba(42, 47, 79, 0.26));
  z-index: 9999;
`
export const Title = styled.h3`
  width: 100%;
  margin: 0;
  text-align: center;
  color: #333333;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`

export const List = styled(Flex)`
  width: 100%;
  margin-top: 22px;
  min-height: 200px;
`

export const ScrollContainer = styled(SimpleBar)`
  overflow-y: auto;
  max-height: 230px;
  height: 230px;
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
    padding-left: 6px !important;
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

export const Student = styled(Flex)<{ active: boolean }>`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      border: 1px solid #49ceb1;
      color: #49ceb1;
    `}
`

export const Button = styled.button<{ active?: boolean }>`
  border: none;
  background: #d3dae8;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      background: #49ceb1;
    `}
`
