import styled, { css } from 'styled-components'
import { margin } from 'styled-system'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  border-radius: 20px;
  margin: 20px auto 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const Category = styled(Flex).attrs({
  as: 'a',
})<{
  highlighted?: number
}>`
  font-size: 22px;
  color: #828282;
  text-decoration: none;

  ${props =>
    props.highlighted &&
    css`
      color: #6e46ff;
    `};

  ${margin}
`

export const CategoryTitle = styled(Flex)`
  font-weight: 600;
  font-size: 36px;
`
