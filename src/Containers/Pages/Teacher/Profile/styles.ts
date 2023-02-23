import styled from 'styled-components'

import { Flex } from 'Components/UI'

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
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
  align-items: center;
`

export const RoundedBlock = styled(Flex)`
  background-color: #ffffff;
  border-radius: 14px;
  padding: 12px 14px;
`
