import React, { useEffect, useState } from 'react'

import debounce from 'lodash/debounce'
import map from 'lodash/map'

import { Flex, Loader, SearchInput } from 'Components/UI'

import { COMMUNITY_POST_TAGS } from 'Constants/community'

import { CommunityFetch } from 'Services/Api/requests/community'
import _ from 'Services/I18n'

import List from './List'
import {
  Container,
  LoadMore,
  RelativeContainer,
  SearchWrap,
  TabItem,
  Title,
} from './styles'

const TAG_OPTIONS = map(COMMUNITY_POST_TAGS, entity => ({
  label: `#${entity.toUpperCase()}`,
  value: entity,
}))

const TABS = [
  {
    label: 'LATEST',
    value: '',
  },
  {
    label: 'POPULAR',
    value: 'popular',
  },
  ...TAG_OPTIONS,
]

type Props = {
  posts: any[]
  isLastPage: boolean
  isLoading: boolean
  isLoadMoreLoading: boolean
  onFetch: (args: CommunityFetch) => void
}

const Posts: React.FC<Props> = ({
  posts,
  onFetch,
  isLastPage,
  isLoadMoreLoading,
  isLoading,
}) => {
  const [searchParams, setParams] = useState({
    selectedTab: '',
    searchQuery: '',
    type: '',
  })
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    onFetch({
      search: searchParams.searchQuery,
      category: searchParams.selectedTab,
      type: searchParams.type,
    })
  }, [searchParams])

  const handleSearchQuery = debounce((value: string) => {
    setParams(params => ({
      ...params,
      searchQuery: value,
      type: '',
    }))
  }, 600)

  const handleSelectTab = (tab: string) => {
    setParams(params => ({
      ...params,
      selectedTab: tab,
      type: '',
    }))
  }

  const handleLoadMore = () => {
    setParams(params => ({
      ...params,
      type: 'loadMore',
    }))
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    handleSearchQuery(value)
  }

  return (
    <Container>
      <Flex justifyContent="space-between" mt={20} width={1}>
        <Title>{_('community.listTitle')}</Title>
        <SearchWrap>
          <SearchInput
            placeholder={_('general.searchHere')}
            value={searchValue}
            onChange={handleSearchChange}
          />
        </SearchWrap>
      </Flex>
      <div className="tabs-wrap">
        <div className="tab-items">
          {map(TABS, tab => (
            <TabItem
              hot={tab.value === 'coronavirus'}
              isActive={searchParams.selectedTab === tab.value}
              key={tab.value}
              onClick={() => handleSelectTab(tab.value)}
            >
              {tab.label}
            </TabItem>
          ))}
        </div>
      </div>

      <List isLoading={isLoading} posts={posts} />

      {!isLastPage && (
        <>
          <RelativeContainer
            flexWrap="wrap"
            height="80px"
            margin="0 auto"
            width="220px"
          >
            <LoadMore onClick={handleLoadMore}>
              {_('buttons.loadMore')}
            </LoadMore>
            {isLoadMoreLoading && <Loader mt={50} />}
          </RelativeContainer>
        </>
      )}
    </Container>
  )
}

export default Posts
