import styled from 'styled-components'

import { Element, Flex } from 'Components/UI'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
  position: relative;
`

export const Content = styled(Flex)`
  width: 100%;
  min-height: 500px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`

export const Block = styled(Flex)`
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(8, 36, 77, 0.08);
  border-radius: 10px;
`

export const CopyButton = styled(Element).attrs({ as: 'button' })`
  font-family: 'Yrsa', sans-serif;
  width: 100%;
  box-shadow: rgba(0, 220, 180, 0.26) 0px 6px 12px;
  background: #49ceb1;
  border-radius: 27px;
  height: 40px;
  padding: 0px 39px;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
  display: flex;

  border: 0;
  transition: all 0.1s ease;
  outline: 0px;

  &:active {
    background-color: #ffa08c;
  }
`

export const BlockLink = styled(Element).attrs({ as: 'a' })`
  border: 1px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  padding: 6px 4px;
`
