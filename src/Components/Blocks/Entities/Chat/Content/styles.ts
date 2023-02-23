import { Menu } from 'react-contexify'

import styled from 'styled-components'

import { chatBackground } from 'Assets/images/chat'

import { Flex } from 'Components/UI'

import 'react-contexify/dist/ReactContexify.css'

export const Container = styled(Flex)`
  width: 100%;
  background-image: url(${chatBackground.src});
  background-repeat: repeat;
  background-size: cover;
  position: relative;
  height: 100%;
`

export const ChatListContainer = styled(Flex)`
  position: relative;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
  transition: all 0.3s;
  flex-grow: 1;
`

export const PenpalStatusContainer = styled(Flex)`
  position: absolute;
  top: 0px;
  left: 20px;
  width: calc(100% - 37px);
`

export const ChatMessagesList = styled.div`
  width: 100%;
  padding-top: 80px;
  margin-bottom: 5px;

  .simplebar-content {
    padding-right: 20px !important;
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

  .react-contextmenu {
    background: #ffffff;
    min-width: 300px;
    z-index: 10000;
    padding: 20px;
    border: 2px solid #d3dae8;
    box-sizing: border-box;
    backdrop-filter: blur(10px);

    border-radius: 10px;

    .react-contextmenu-item {
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 17px;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      outline: 0px;
      &:last-of-type {
        margin-bottom: 0px;
      }
    }
  }
`

export const StyledMenu = styled(Menu).attrs({})`
  position: fixed;
  box-shadow: none !important;
  border: 0px !important;
  padding: 0px !important;
`

export const ContextMenu = styled.div`
  background: #ffffff;
  min-width: 240px;
  z-index: 50;
  padding: 12px 14px;
  border: 1px solid #d3dae8;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 99;
`

export const ContextItem = styled(Flex)`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 17px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  outline: 0;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    color: #49ceb1;
  }
`
