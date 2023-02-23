import React, { useCallback, useState } from 'react'

import map from 'lodash/map'

import { Loader } from 'Components/UI'

import {
  PasswordForm,
  ProfileForm,
} from 'Components/Blocks/Entities/School/Forms'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import { useAppDispatch } from 'Hooks/useStore'

import { fetchMe } from 'Store/me/thunks'

import {
  Background,
  Container,
  FormContent,
  Sidebar,
  SidebarContent,
  SidebarItem,
  Title,
} from './styles'

const TABS = ['Profile', 'Password']

const Settings: React.FC = () => {
  const dispatch = useAppDispatch()
  const me = useMe()

  const [activeTab, setActiveTab] = useState('Profile')

  const handleFetchMe = () => {
    dispatch(fetchMe())
  }

  const renderSidebarContent = useCallback(
    () =>
      map(TABS, tab => (
        <SidebarItem
          active={tab === activeTab}
          key={tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </SidebarItem>
      )),
    [activeTab],
  )

  const renderForm = useCallback(() => {
    if (!me) return <Loader />

    switch (activeTab) {
      case 'Profile':
        return (
          <ProfileForm
            initialData={{
              email: me?.email ?? '',
              schoolName: me?.school?.school_name ?? '',
              schoolPrincipalLastname: me?.last_name ?? '',
              schoolPrincipalName: me?.first_name ?? '',
              avatar: me?.school?.logo ?? '',
              country: me?.country ?? '',
            }}
            onSuccess={handleFetchMe}
          />
        )

      case 'Password':
        return <PasswordForm />

      default:
        return null
    }
  }, [activeTab, me])

  return (
    <Background>
      <Head description="School Settings" title="School Settings" />
      <Container pb={60} pt={60}>
        <Sidebar>
          <Title>Edit School Profile</Title>
          <SidebarContent>{renderSidebarContent()}</SidebarContent>
        </Sidebar>

        <FormContent>{renderForm()}</FormContent>
      </Container>
      <Footer />
    </Background>
  )
}

export default Settings
