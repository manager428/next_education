import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  flex: 1;
`

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`
