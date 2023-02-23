import React, { useEffect, useMemo } from 'react'
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'

import get from 'lodash/get'

import Table from 'Components/UI/Table'
import PaginationCentered from 'Components/UI/Table/Components/PaginationCentered'

import { ISchoolClassroomsResponse } from 'Services/Api/requests/school/interfaces'

import { useColumns } from './columns'
import { Container, Content } from './styles'

type Props = {
  data: ISchoolClassroomsResponse
  isLoading: boolean
  onFetch: ({ sortBy, pageIndex: number }) => void
}

const ClassroomsTable: React.FC<Props> = ({ data, isLoading, onFetch }) => {
  const tableData = useMemo(() => get(data, ['classes']) || [], [data])

  const columns = useColumns()

  const tableProps = useTable(
    {
      columns,
      data: tableData,
      sortable: true,
      pageCount: get(data, ['pagination', 'lastPage']) || 0,
      pageSize: 10,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: true,
      autoResetSortBy: true,
      initialState: {
        pageSize: 10,
        pageIndex: 0,
        sortBy: [
          {
            id: 'full_name',
            desc: false,
          },
        ],
      },
    },
    useSortBy,
    usePagination,
    useFlexLayout,
  )

  const {
    page,
    state: { pageIndex, sortBy },
  } = tableProps

  useEffect(() => {
    onFetch({
      sortBy,
      pageIndex,
    })
  }, [sortBy, pageIndex])

  return (
    <Container>
      <Content>
        <Table {...tableProps} loading={isLoading} />
        <PaginationCentered
          {...tableProps}
          page={page}
          total={get(data, ['pagination', 'total'], 0)}
        />
      </Content>
    </Container>
  )
}

export default ClassroomsTable
