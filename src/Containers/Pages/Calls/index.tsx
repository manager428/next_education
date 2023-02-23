import React, { useCallback, useEffect, useState } from 'react'

import { ogVideoCallsImage } from 'Assets/images/og'

import { useCallsQuery, useHandlers } from 'Containers/Pages/Calls/Hooks'
import { getCalls, getPaginatedCalls } from 'Containers/Pages/Calls/utils'

import { Flex, Loader } from 'Components/UI'

import { Sidebar } from 'Components/Blocks/Entities/Calls'
import Header from 'Components/Blocks/Entities/Calls/Header'
import {
  CreateCallModal,
  ViewCallModal,
} from 'Components/Blocks/Entities/Calls/Modals'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { CALL_ENUM } from 'Constants/calls'

import useRole from 'Hooks/useRole'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'

import { closeCreateCallModal, closeViewCallModal } from 'Store/modals/slice'

import _ from 'Services/I18n'

import { CallFilters, CallsList } from './Components'
import {
  Background,
  Container,
  Content,
  LoadMore,
  RelativeContainer,
} from './styles'

const Calls: React.FC = () => {
  const modalState = useAppSelector(state => state.modals)
  const pageParams = useRouterQueryParams()
  const { isTeacher } = useRole()
  const dispatch = useAppDispatch()

  const [selectedTab, setSelectedTab] = useState<string>(CALL_ENUM.ALL)

  const {
    searchParams,
    debouncedSearchParams,
    handleSelectDate,
    handleSelectCall,
    handleSelectTags,
    handleSelectTab,
    handleSelectEnglishLevel,
    handleFilterClick,
  } = useHandlers({
    onSelectTab: setSelectedTab,
    selectedTab,
  })

  useEffect(() => {
    if (pageParams.tab) {
      const tab = pageParams.tab as string

      setSelectedTab(tab)
    }
  }, [pageParams])

  const {
    data,
    mutate,
    isLoading,
    setSize,
    size,
    isLoadingMore,
  } = useCallsQuery(debouncedSearchParams)

  const handleLoadMore = useCallback(
    e => {
      e.preventDefault()
      setSize(currentSize => currentSize + 1)
    },
    [setSize],
  )

  const handleCloseCreateCall = useCallback(() => {
    dispatch(closeCreateCallModal())
    mutate()
  }, [])

  const handleCloseViewCallModal = useCallback((withRefetch = false) => {
    dispatch(closeViewCallModal())

    if (withRefetch) {
      mutate()
    }
  }, [])

  const calls = getCalls(data, searchParams)
  const isLastPage = getPaginatedCalls(data).lastPage === size

  return (
    <Background>
      <Head description="Calls" ogImage={ogVideoCallsImage.src} title="Calls" />

      <Flex flexDirection="column" flexWrap="wrap" width={1}>
        {isTeacher && (
          <Header
            selected={selectedTab}
            onSelectCall={handleSelectCall}
            onSelectTab={handleSelectTab}
          />
        )}

        <Container pb={60} pt={28}>
          <Sidebar
            selectedDate={{
              from: searchParams.startDate,
              to: searchParams.endDate,
            }}
            selectedEnglishLevel={searchParams.englishLevels}
            selectedTags={searchParams.tags}
            showOnlyCalendar={selectedTab === 'scheduled'}
            onDateSelect={handleSelectDate}
            onTagSelect={handleSelectTags}
            onUserLevelSelect={handleSelectEnglishLevel}
          />
          <Content ml={40}>
            <CallFilters
              activeFilter={searchParams.filter}
              selectedTab={selectedTab}
              onFilterClick={handleFilterClick}
            />

            <CallsList data={calls} isLoading={isLoading} />

            {!isLastPage && (
              <RelativeContainer
                flexWrap="wrap"
                height="80px"
                margin="0 auto"
                mt={20}
                width="220px"
              >
                {!isLoading && (
                  <LoadMore onClick={handleLoadMore}>
                    {_('buttons.loadMore')}
                  </LoadMore>
                )}
                {isLoadingMore && <Loader mt={50} />}
              </RelativeContainer>
            )}
          </Content>
        </Container>
      </Flex>

      {modalState.viewCallModal.isOpen && modalState.viewCallModal.id && (
        <ViewCallModal
          id={modalState.viewCallModal.id}
          isOpen={modalState.viewCallModal.isOpen}
          onClose={handleCloseViewCallModal}
        />
      )}

      {modalState.createCallModal.isOpen && (
        <CreateCallModal
          isOpen={modalState.createCallModal.isOpen}
          type={modalState.createCallModal.type}
          onClose={handleCloseCreateCall}
        />
      )}

      <Footer />
    </Background>
  )
}

export default Calls
