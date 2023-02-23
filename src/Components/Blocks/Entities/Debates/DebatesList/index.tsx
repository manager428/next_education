import React, { useCallback, useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'

import map from 'lodash/map'

import { Flex, Loader, SearchInput } from 'Components/UI'

import Debate, {
  DebateType,
} from 'Components/Blocks/Entities/Debates/Debate/Debate'

import { DEBATES_CATEGORIES } from 'Constants/debates'

import useDebounce from 'Hooks/useDebounce'

import _ from 'Services/I18n'

import { entityToOptions } from 'Utils/common'

import {
  Container,
  LoadMore,
  RelativeContainer,
  SearchWrap,
  TabItem,
  TabsContainer,
  Title,
} from './styles'

const TABS = [
  {
    label: 'LATEST',
    value: 'latest',
  },
  {
    label: 'POPULAR',
    value: 'popular',
  },
  ...entityToOptions(DEBATES_CATEGORIES, {}),
]

type Props = {
  posts: Array<DebateType>
  isLoading: boolean
  isLastPage: boolean
  isShowMoreLoading: boolean
  onSearch: (value: string) => void
  onTagSelect: (value: string) => void
  onLoadMore: () => void
}

const DebatesList: React.FC<Props> = ({
  isLoading,
  isLastPage,
  isShowMoreLoading,
  posts,
  onSearch,
  onTagSelect,
  onLoadMore,
}) => {
  const [activeTab, setActiveTab] = useState<typeof DEBATES_CATEGORIES[number]>(
    'latest',
  )
  const [searchValue, setSearchValue] = useState<string>('')

  const debouncedSearchTerm = useDebounce(searchValue, 500)

  useEffect(() => {
    onSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  const renderData = useCallback(
    () =>
      map(posts, (post, index) => {
        const isThird = (index + 1) % 3 === 0

        return (
          <Flex key={post.id} mb={60} mr={isThird ? 0 : 40}>
            <Debate {...post} />
          </Flex>
        )
      }),
    [posts],
  )

  return (
    <Container>
      <Flex flexWrap="wrap" justifyContent="space-between" mt={67} width={1}>
        <Title>{_('debates.debatesList')}</Title>
        <SearchWrap>
          <SearchInput
            placeholder={_('general.searchHere')}
            value={searchValue}
            onChange={value => setSearchValue(value)}
          />
        </SearchWrap>

        <TabsContainer>
          {map(TABS, tab => (
            <TabItem
              isActive={activeTab === tab.value}
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value)
                onTagSelect(tab.value)
              }}
            >
              {tab.label}
            </TabItem>
          ))}
        </TabsContainer>
      </Flex>

      <RelativeContainer
        alignItems="flex-start"
        flexWrap="wrap"
        minHeight={300}
        mt={20}
        width={1}
      >
        {isLoading && <Loader />}

        <Flex alignItems="flex-start" flexWrap="wrap" width={1}>
          {posts.length === 0 && !isLoading ? (
            <span>No debates found!</span>
          ) : (
            <Masonry
              breakpointCols={3} // default ''
              className={
                posts.length === 2
                  ? 'my-gallery-class with-2-posts'
                  : 'my-gallery-class'
              } // default ''
              columnClassName="my-masonry-grid_column"
            >
              {renderData()}
            </Masonry>
          )}
        </Flex>

        {!isLastPage && (
          <RelativeContainer
            flexWrap="wrap"
            height="80px"
            margin="0 auto"
            width="220px"
          >
            <LoadMore onClick={onLoadMore}>{_('buttons.loadMore')}</LoadMore>
            {isShowMoreLoading && <Loader mt={50} />}
          </RelativeContainer>
        )}
      </RelativeContainer>
    </Container>
  )
}

export default DebatesList
