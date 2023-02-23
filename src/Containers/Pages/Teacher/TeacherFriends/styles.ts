import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 0%;
`

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
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
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  color: #828282;

  ${props =>
    props.active &&
    css`
      color: ${themeGet('colors.green')};
    `}
`
