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
    label: 'Lectorium',
    value: 'lectorium',
  },
  {
    label: 'Challenges',
    value: 'challenges',
  },
  {
    label: 'ID Blog',
    value: 'blog',
  },
  {
    label: 'Community',
    value: 'community',
  },
  {
    label: 'Debates',
    value: 'debates',
  },
  {
    label: 'FAQ',
    value: 'faq',
  },
]

function ModeratorComplaintsTable({
  data,
  isLoading,
  onFetch,
  onModalOpen,
  onPostViewModalOpen,
  onRemoveFromBan,
}) {
  const [section, setSection] = useState(null)

  const tableData = useMemo(() => get(data, ['complaints']) || [], [data])

  const columns = useColumns()

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
    setSection(selected.value)
  }, [])

  return (
    <TableContext.Provider
      value={{
        onModalOpen,
        onPostViewModalOpen,
        onRemoveFromBan,
      }}
    >
      <Container>
        <Header>
          <Flex alignItems="center">
            <Icon fill="#D3DAE8" icon={tableFilterGlyph} mr={20} size={16} />
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

ModeratorComplaintsTable.defaultProps = {
  data: {},
}

ModeratorComplaintsTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onFetch: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
  onPostViewModalOpen: PropTypes.func.isRequired,
  onRemoveFromBan: PropTypes.func.isRequired,
}

export default ModeratorComplaintsTable
