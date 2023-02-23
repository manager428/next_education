import { Menu } from 'react-contexify'

import styled from 'styled-components'

import { Flex } from 'Components/UI'

import 'react-contexify/dist/ReactContexify.css'

export const Container = styled(Flex)`
  width: 100%;
  padding: 20px;
`

export const UserInfo = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 12px;
  word-break: break-word;
`

export const Country = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #828282;
  margin-bottom: 12px;
`

export const ActionsContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-end;
  flex-shrink: 0;
`

export const ActionButton = styled(Flex).attrs({
  as: 'button',
})`
  display: block;
  border: 1px solid #49ceb1;
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 16px;
  line-height: 20px;
  color: #49ceb1;
  text-decoration: none;
  cursor: pointer;
  min-width: 120px;
  background-color: transparent;
  text-align: center;
  outline: 0;
  flex-shrink: 0;

  &:hover {
    background-color: #d8fff7;
  }
`

export const Relative = styled(Flex)`
  /* position: relative; */
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

export const StyledMenu = styled(Menu).attrs({
  // custom props
})`
  position: absolute;
  box-shadow: none !important;
  border: 0px !important;
  padding: 0px !important;

  .react-contexify__submenu-arrow {
  }
  .react-contexify__separator {
  }
  .react-contexify__item {
  }
  .react-contexify__item {
  }
`

export const ActionLink = styled(ActionButton).attrs({ as: 'a' })``
