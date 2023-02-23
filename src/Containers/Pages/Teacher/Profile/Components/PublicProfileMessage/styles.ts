import styled from 'styled-components'

import { Element, Flex } from 'Components/UI'

export const Container = styled(Flex)`
  border: 2px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Title = styled(Element).attrs({ as: 'h2' })`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  width: 100%;
`
