import React, { useState } from 'react'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  Colleagues,
  FindColleagues,
} from 'Components/Blocks/Entities/Teacher/Friends'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { Background, Container, Tab, TabsContainer } from './styles'
import { TABS } from './types'

const TABS_OPTIONS = [TABS.TEACHERS, TABS.FIND_COLLEAGUES]

const TeacherFriends: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS.TEACHERS)

  const renderTabs = () =>
    map(TABS_OPTIONS, (tab, index) => (
      <Tab
        active={tab === activeTab}
        key={tab}
        mr={index + 1 === TABS_OPTIONS.length ? 0 : 28}
        onClick={() => setActiveTab(tab)}
      >
        {tab.toUpperCase()}
      </Tab>
    ))

  const renderContent = () => {
    switch (activeTab) {
      case TABS.TEACHERS:
        return <Colleagues />
      case TABS.FIND_COLLEAGUES:
        return <FindColleagues />

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

export default TeacherFriends
