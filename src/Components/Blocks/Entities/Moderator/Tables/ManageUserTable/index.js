import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'
import PropTypes from 'prop-types'

import get from 'lodash/get'
import map from 'lodash/map'

import { tableFilterGlyph } from 'Assets/svg/moderator'

import { Flex, Icon, SearchInput, Select } from 'Components/UI'
import Table from 'Components/UI/Table'
import Pagination from 'Components/UI/Table/Components/Pagination'
import PaginationButton from 'Components/UI/Table/Components/Pagination/PaginationButton'
import WarningTooltip from 'Components/UI/WarningTooltip'

import { useColumns } from './columns'
import TableContext from './context'
import { Container, Content, Header, RelativeCont, Tab } from './styles'

const USER_STATUSES = [
  {
    label: 'All statuses',
    value: 'all',
  },
  {
    label: 'Banned',
    value: 'banned',
  },
  {
    label: 'Blocked',
    value: 'blocked',
  },
]
const TABS = [
  { value: 'all', name: 'ALL USERS' },
  { value: 'saved', name: 'SAVED' },
]

function ManageUserTable({
  data,
  isLoading,
  onModalOpen,
  onFetch,
  onBookmark,
  onRemoveFromBanOrBlock,
}) {
  const [search, setSearch] = useState(null)
  const [status, setStatus] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const columns = useColumns()

  const tableData = useMemo(() => get(data, ['users']) || [], [data])

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
      search,
      status,
      list: activeTab,
    })
  }, [sortBy, pageIndex, status, activeTab])

  useEffect(() => {
    if (search || search?.length === 0) {
      tableProps.gotoPage(0)
      onFetch({
        sortBy,
        pageIndex,
        search,
        status,
        list: activeTab,
      })
    }
  }, [search])

  const handleChangeStatus = useCallback(selected => {
    setStatus(selected.value)
  }, [])

  const renderTabs = useCallback(
    () =>
      map(TABS, tab => (
        <Tab
          active={tab.value === activeTab}
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.name.toLocaleUpperCase()}
        </Tab>
      )),
    [activeTab],
  )

  return (
    <TableContext.Provider
      value={{
        onModalOpen,
        onBookmark,
        onRemoveFromBanOrBlock,
      }}
    >
      <>
        <Flex justifyContent="center" mb={24} mt={24} width={1}>
          {renderTabs()}
        </Flex>
        <Container>
          <Header flexWrap="wrap">
            <Flex justifyContent="center" mt={30} width={1}>
              <Flex width="320px">
                <SearchInput
                  className="search-wrapper"
                  placeholder="Search user"
                  onChange={value => setSearch(value)}
                />
              </Flex>
              <RelativeCont ml={15} width={26}>
                <WarningTooltip
                  height="72px"
                  iconSize={26}
                  left="auto"
                  position="absolute"
                  right="10px"
                  text="Through the search you can find students with any statuses on our platform"
                  tooltipHeight="72px"
                  tooltipWidth="200px"
                  top="4px"
                  type="info"
                />
              </RelativeCont>
            </Flex>

            <Flex alignItems="center">
              <Icon
                fill="#D3DAE8"
                icon={tableFilterGlyph}
                size={16}
                wrapperStyles={{ mr: 20 }}
              />
              <Select
                isSearchable={false}
                options={USER_STATUSES}
                placeholder="User status"
                width="124px"
                onChange={handleChangeStatus}
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
      </>
    </TableContext.Provider>
  )
}

ManageUserTable.defaultProps = {
  data: {},
}

ManageUserTable.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
  onRemoveFromBanOrBlock: PropTypes.func.isRequired,
}

export default ManageUserTable
