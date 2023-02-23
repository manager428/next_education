import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)<{ isError: number }>`
  width: 100%;
  flex-wrap: wrap;

  ${props =>
    props.isError &&
    css`
      border-bottom: red;
    `}
`
