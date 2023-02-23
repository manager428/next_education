import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  max-width: 520px;
`

export const Tag = styled(Flex).attrs({ as: 'button' })<{ active?: boolean }>`
  background: transparent;
  margin: 0px 14px 10px 0px;
  color: #828282;
  font-weight: 600;
  font-size: 12px;
  font-family: 'Nunito Sans', 'sans-serif';
  border: 0px;
  padding: 0;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #49ceb1;
    `}
`

export const ViewAllButton = styled(Tag)`
  color: #ffa08c;
`
