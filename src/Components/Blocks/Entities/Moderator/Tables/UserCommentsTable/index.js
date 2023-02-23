import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { tableFilterGlyph } from 'Assets/svg/moderator'

import { Flex, Icon, Select } from 'Components/UI'
import Table from 'Components/UI/Table'
import Pagination from 'Components/UI/Table/Components/Pagination'
import PaginationButton from 'Components/UI/Table/Components/Pagination/PaginationButton'

import { useColumns } from './columns'
import TableContext from './context'
import { Container, Content, Header } from './styles'

const SECTIONS_OPTIONS = [
  {
    label: 'All sections',
    value: 'all',
  },
  {
    label: 'Challenges',
    value: 'challenges',
  },
  {
    label: 'Community',
    value: 'community',
  },
  // {
  //   label: 'Calls',
  //   value: 'video_calls',
  // },
  {
    label: 'Debates',
    value: 'debates',
  },
  {
    label: 'Lectorium',
    value: 'lectorium',
  },
  {
    label: 'ID Blog',
    value: 'blog',
  },
]

function UserCommentsTable({
  data,
  isLoading,
  onModalOpen,
  onPostViewModalOpen,
  onFetch,
  onDeleteComment,
}) {
  const [section, setSection] = useState(null)
  const columns = useColumns()

  const tableData = useMemo(() => get(data, ['comments']) || [], [data])

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
      section,
      sortBy,
      pageIndex,
    })
  }, [section, sortBy, pageIndex])

  const handleChangeSection = useCallback(selected => {
    setSection(selected?.value)
  }, [])

  return (
    <TableContext.Provider
      value={{
        onDeleteComment,
        onModalOpen,
        onPostViewModalOpen,
      }}
    >
      <Container>
        <Header>
          <Flex alignItems="center">
            <Icon
              fill="#D3DAE8"
              icon={tableFilterGlyph}
              size={16}
              wrapperStyles={{ mr: 20 }}
            />
            <Select
              isSearchable={false}
              options={SECTIONS_OPTIONS}
              placeholder="Section"
              width="144px"
              onChange={handleChangeSection}
            />
          </Flex>
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

UserCommentsTable.defaultProps = {
  data: {},
}

UserCommentsTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
  onPostViewModalOpen: PropTypes.func.isRequired,
}

export default UserCommentsTable
