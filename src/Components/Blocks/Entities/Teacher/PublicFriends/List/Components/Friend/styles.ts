import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

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

export const Name = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 12px;
  word-break: break-word;
  &:hover {
    color: ${themeGet('colors.green')};
  }
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

export const ActionLink = styled(ActionButton).attrs({ as: 'a' })``
