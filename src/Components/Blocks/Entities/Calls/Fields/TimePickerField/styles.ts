import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  align-items: center;
  align-content: center;
`

export const ValueContainer = styled(Flex)`
  font-size: 12px;
  line-height: 16px;
  flex-grow: 1;
  align-items: center;
  align-content: center;
  color: #071d40;
`

export const CalendarContainer = styled(Flex)<{ isError: number }>`
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 0 0 0 14px;
  cursor: pointer;
  ${props =>
    props.isError &&
    css`
      border: 2px solid #eb5757;
    `};

  button {
    box-shadow: none;
    background-color: transparent;
    height: 30px;
  }
`

export default {}
