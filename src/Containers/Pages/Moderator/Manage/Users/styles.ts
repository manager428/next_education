import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Background = styled(Flex)`
  background-image: transparent;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`
export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
`
