import React from 'react'

import { Flex } from 'Components/UI'

import { Arrow, Info, PaginationContainer } from './styles'

type Props = {
  page: number
  lastPage: number
  info: string
  onPageChange: (page: number) => void
}
const Pagination: React.FC<Props> = ({
  page,
  lastPage,
  info,
  onPageChange,
}) => (
  <PaginationContainer>
    <Flex onClick={page !== 1 ? () => onPageChange(page - 1) : () => null}>
      <Arrow active={page !== 1} wrapperStyles={{ mr: 20 }} />
    </Flex>

    <Info>{info}</Info>
    <Flex
      onClick={page !== lastPage ? () => onPageChange(page + 1) : () => null}
    >
      <Arrow active={page !== lastPage} next wrapperStyles={{ ml: 20 }} />
    </Flex>
  </PaginationContainer>
)

export default Pagination
