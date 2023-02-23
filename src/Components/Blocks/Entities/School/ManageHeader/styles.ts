import styled from 'styled-components'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  background-color: white;
  justify-content: center;
`

export const Inner = styled(Flex)`
  width: 100%;
  max-width: 980px;
  justify-content: space-between;
  min-height: 122px;
  align-content: center;
  align-items: center;
`

export const Button = styled(Element).attrs({ as: 'button' })`
  box-sizing: border-box;
  text-align: center;
  padding: 6px 4px;
  font-size: 14px;
  line-height: 14px;
  border: 1px solid ${props => props.color ?? 'inherit'};
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }
`
