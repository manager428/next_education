import React, { useEffect, useMemo } from 'react'
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'

import get from 'lodash/get'

import Table from 'Components/UI/Table'
import PaginationCentered from 'Components/UI/Table/Components/PaginationCentered'

import { ISchoolTeacherClassroomsResponse } from 'Services/Api/requests/school/interfaces'

import { useColumns } from './columns'
import TableContext from './context'
import { Container, Content } from './styles'

type Props = {
  data: ISchoolTeacherClassroomsResponse
  isLoading: boolean
  isSelectable: boolean
  selectedIds: number[]
  onFetch: ({ sortBy, pageIndex: number }) => void
  onSelect: (studentId: number) => void
}

const TeacherClassroomsTable: React.FC<Props> = ({
  data,
  isLoading,
  isSelectable,
  selectedIds,
  onFetch,
  onSelect,
}) => {
  const tableData = useMemo(() => get(data, ['classes']) || [], [data])

  const columns = useColumns(isSelectable)

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
            id: 'class_name',
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
        <TableContext.Provider value={{ isSelectable, selectedIds, onSelect }}>
          <Table {...tableProps} loading={isLoading} />
          <PaginationCentered
            {...tableProps}
            page={page}
            total={get(data, ['pagination', 'total'], 0)}
          />
        </TableContext.Provider>
      </Content>
    </Container>
  )
}

export default TeacherClassroomsTable
