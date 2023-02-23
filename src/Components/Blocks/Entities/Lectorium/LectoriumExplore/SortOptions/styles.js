import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  margin-top: 26px;
`

export const Option = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: ${props.color};
    `}
`
