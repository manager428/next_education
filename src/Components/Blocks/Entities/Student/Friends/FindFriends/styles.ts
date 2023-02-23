import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Content = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  min-height: 400px;
  align-items: flex-start;
  position: relative;
`

export const RoundedBlock = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: 20px;
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const FriendsContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`
