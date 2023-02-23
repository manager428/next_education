import React, { useCallback, useState } from 'react'

import SearchInput from 'Components/UI/Forms/SearchInput'

import _ from 'Services/I18n'

import List from './List'
import { Container, SearchWrap, TabItem, Tabs, TabsContainer } from './styles'

type Props = {
  posts: []
  isLoading: boolean
  onPostClick: (id: number) => void
}

const WinAndVote: React.FC<Props> = ({
  posts = [],
  isLoading,
  onPostClick,
}) => {
  const [activeTab, setActiveTab] = useState('latest')
  const [search, setSearch] = useState<string>('')

  const handleSelectTab = useCallback(value => {
    setActiveTab(value)
  }, [])

  const handleSearch = useCallback(value => {
    setSearch(value)
  }, [])

  const handleOpenModal = (id: number) => {
    onPostClick(id)
  }

  return (
    <Container>
      {/* <div className="title">Vote And Win</div> */}
      {posts.length > 0 && (
        <TabsContainer>
          <Tabs>
            <TabItem
              isActive={activeTab === 'latest'}
              onClick={() => handleSelectTab('latest')}
            >
              {_('buttons.latest')}
            </TabItem>
            <TabItem
              isActive={activeTab === 'popular'}
              onClick={() => handleSelectTab('popular')}
            >
              {_('buttons.popular')}
            </TabItem>
          </Tabs>
          <SearchWrap>
            <SearchInput
              placeholder={_('general.searchHere')}
              onChange={handleSearch}
            />
          </SearchWrap>
        </TabsContainer>
      )}

      <List
        isLoading={isLoading}
        posts={posts}
        searchQuery={search}
        sorting={activeTab}
        onOpenModal={handleOpenModal}
      />
    </Container>
  )
}

export default WinAndVote
