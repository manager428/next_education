import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const MenuLink = styled.a<{
  active?: boolean
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 4px 12px;
  margin-right: 6px;
  text-decoration: none;

  &:nth-last-of-type {
    margin-right: 0px;
  }

  color: #071d40;

  ${props =>
    props.active &&
    css`
      background: #baece1;
      border-radius: 20px;
    `}
`
