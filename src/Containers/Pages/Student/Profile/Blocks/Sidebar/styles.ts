import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const RoundedBlock = styled(Flex)`
  margin-bottom: 14px;
  background-color: #ffffff;
  border-radius: 14px;
  padding: 12px 14px;
  width: 100%;
`

export const Container = styled(Flex)`
  flex-direction: column;
  position: sticky;
  top: 98px;
`

export const SectionTitle = styled(Flex).attrs({ as: 'span' })`
  font-size: 16px;
  margin-right: 10px;
  color: #333333;
`

export const SectionDescription = styled(Flex)`
  line-height: 20px;
  color: #828282;
`

export const Button = styled(Flex)`
  width: 100%;
  height: 40px;
  color: white;
  font-size: 18px;
  line-height: 20px;
  background-color: #ffa08c;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
