import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const ChatContainer = styled(Flex)`
  min-height: ${props => `${props.height}px`};
  width: 100%;
  padding: 20px 0 0 0;
`
export const Wrapper = styled(Flex)`
  max-width: 1200px;
  min-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`
