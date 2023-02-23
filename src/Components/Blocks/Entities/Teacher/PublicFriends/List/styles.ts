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
  min-height: 400px;
  align-items: flex-start;
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

export const LinkButton = styled(Flex).attrs({ as: 'a' })`
  align-items: center;
  border-radius: 20px;
  border: 1px solid;
  font-size: 16px;
  line-height: 14px;
  padding: 8px 15px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${themeGet('colors.orange')};
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

export const Username = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${themeGet('colors.green')};
  margin-left: 14px;
`
