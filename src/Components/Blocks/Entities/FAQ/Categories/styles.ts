import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const CategoriesList = styled(Flex).attrs({
  as: 'ul',
})`
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  justify-content: flex-start;
`

export const Category = styled(Flex).attrs({
  as: 'li',
})<{ active?: boolean }>`
  color: #bdbdbd;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-right: 30px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #6e46ff;
    `}
`
