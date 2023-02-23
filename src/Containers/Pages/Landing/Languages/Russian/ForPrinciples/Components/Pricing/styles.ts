import styled from 'styled-components'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  background-color: white;
  width: 100%;
  justify-content: center;
`

export const Inner = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Card = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  background: #f7faff;
  flex-direction: column;
`

export const Separator = styled(Element)`
  width: 100%;
  height: 2px;
  background-color: #e4e9f3;
`

export const ChoosePlanLink = styled.a`
  background: #49ceb1;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 12px;
  margin-top: auto;
`
