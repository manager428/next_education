import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const TabsContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
`

export const Tab = styled(Flex).attrs({
  as: 'button',
})<{ active?: boolean }>`
  box-shadow: none;
  background: unset;
  border: 0;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
  color: ${themeGet('colors.graySecondary')};
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: ${themeGet('colors.green')};
    `}
`

export const Content = styled(Flex)`
  width: 100%;
  /* position: relative; */
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
