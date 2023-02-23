import React, { useState } from 'react'

import map from 'lodash/map'

import { Flex, SearchInput } from 'Components/UI'

import { FindFriends } from 'Components/Blocks/Entities/Student/Friends'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import _, { useScopedI18n } from 'Services/I18n'

import List from './Blocks/List'
import { Background, Container, Tab, TabsContainer } from './styles'
import { TABS } from './types'

const TABS_OPTIONS = s => [
  {
    label: s('tabs.friends'),
    value: TABS.FRIENDS,
  },
  { label: s('tabs.findFriends'), value: TABS.FIND_FRIENDS },
]

const Friends: React.FC = () => {
  const s = useScopedI18n('friends')
  const [searchValue, setSearchValue] = useState('')

  const [activeTab, setActiveTab] = useState(TABS.FRIENDS)

  const renderTabs = () =>
    map(TABS_OPTIONS(s), (tab, index) => (
      <Tab
        active={tab.value === activeTab}
        key={tab.value}
        mr={index + 1 === TABS_OPTIONS(s).length ? 0 : 28}
        onClick={() => setActiveTab(tab.value)}
      >
        {tab.label.toUpperCase()}
      </Tab>
    ))

  const renderContent = () => {
    switch (activeTab) {
      case TABS.FRIENDS:
        return (
          <Container pb={60} pt={28}>
            <Flex maxWidth="360px" width={1}>
              <SearchInput
                placeholder={_('general.searchHere')}
                onChange={value => setSearchValue(value)}
              />
            </Flex>

            <Flex width={1}>
              <List search={searchValue} />
            </Flex>
          </Container>
        )
      case TABS.FIND_FRIENDS:
        return <FindFriends />

      default:
        return null
    }
  }

  return (
    <Background>
      <Head description="Friends" title="Friends" />

      <Container pb={60} pt={28}>
        <TabsContainer mt={28}>{renderTabs()}</TabsContainer>

        <Flex width={1}>{renderContent()}</Flex>
      </Container>
      <Footer />
    </Background>
  )
}

export default Friends
