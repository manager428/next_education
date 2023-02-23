import React, { useEffect, useMemo } from 'react'
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { Flex } from 'Components/UI'
import Table from 'Components/UI/Table'
import Pagination from 'Components/UI/Table/Components/Pagination'
import PaginationButton from 'Components/UI/Table/Components/Pagination/PaginationButton'

import { useColumns } from './columns'
import TableContext from './context'
import { Container, Content, Header } from './styles'

function UserBanHistoryTable({ data, onFetch, isLoading }) {
  const columns = useColumns()

  const tableData = useMemo(() => get(data, ['bans']) || [], [data])

  const tableProps = useTable(
    {
      columns,
      data: tableData,
      sortable: true,
      pageCount: get(data, ['pagination', 'lastPage']) || 0,
      pageSize: 50,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: true,
      autoResetSortBy: true,
      initialState: { pageSize: 50, pageIndex: 0 },
    },
    useSortBy,
    usePagination,
    useFlexLayout,
  )

  const {
    page,
    pageCount,
    state: { pageIndex, sortBy },
    previousPage,
    nextPage,
  } = tableProps

  useEffect(() => {
    onFetch({
      sortBy,
      pageIndex,
    })
  }, [sortBy, pageIndex])

  return (
    <TableContext.Provider value={{}}>
      <Container width={1}>
        <Header>
          <Flex />
          <Flex>
            <Pagination
              {...tableProps}
              page={page}
              total={get(data, ['pagination', 'total'], 0)}
            />
          </Flex>
        </Header>
        <Content>
          <Table {...tableProps} loading={isLoading} />
          <Flex justifyContent="center" mt={25} width={1}>
            <PaginationButton
              active={pageIndex !== 0}
              minWidth="160px"
              mr="20px"
              type="prev"
              onClick={previousPage}
            />
            <PaginationButton
              active={pageCount !== 0 && pageIndex + 1 !== pageCount}
              minWidth={160}
              type="next"
              onClick={nextPage}
            />
          </Flex>
        </Content>
      </Container>
    </TableContext.Provider>
  )
}

UserBanHistoryTable.defaultProps = {
  data: {},
}

UserBanHistoryTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onFetch: PropTypes.func.isRequired,
}

export default UserBanHistoryTable
