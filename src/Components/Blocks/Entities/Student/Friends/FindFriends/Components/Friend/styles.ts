import styled from 'styled-components'

import { Flex } from 'Components/UI'
import { Element } from 'Components/UI/Flex'

export const Container = styled(Flex)`
  width: 100%;
  padding: 20px;
`

export const UserInfo = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 50%;
`

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #333333;
  word-break: break-word;
`

export const Info = styled(Element)`
  font-size: 16px;
  line-height: 14px;
  color: #828282;
`

export const ActionsContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-end;
  flex-shrink: 0;
  position: relative;
`

export const ActionButton = styled(Flex).attrs({
  as: 'span',
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
  position: relative;
`
