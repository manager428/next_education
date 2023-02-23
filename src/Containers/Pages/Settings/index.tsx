import React, { useCallback, useState } from 'react'

import map from 'lodash/map'

import { Loader } from 'Components/UI'

import {
  AboutForm,
  PasswordForm,
  ProfileForm,
} from 'Components/Blocks/Entities/Settings/Forms'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'
import { useAppDispatch } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import { fetchMe } from 'Store/me/thunks'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'
import { useScopedI18n } from 'Services/I18n'

import {
  Background,
  Container,
  FormContent,
  Sidebar,
  SidebarContent,
  SidebarItem,
  Title,
} from './styles'

const Settings: React.FC = () => {
  const s = useScopedI18n('settings')
  const { isStudent } = useRole()
  const dispatch = useAppDispatch()
  const me = useMe()

  const TABS = isStudent
    ? [
        { label: s('profile'), value: 'Profile' },
        { label: s('about'), value: 'About' },
        { label: s('password'), value: 'Password' },
      ]
    : [
        { label: s('profile'), value: 'Profile' },
        { label: s('password'), value: 'Password' },
      ]

  const [activeTab, setActiveTab] = useState('Profile')

  const { data, isLoading, mutate } = useSwrRequest<IProfileResponse>({
    url: PROFILE_API_PATHS.details(me?.id ?? 0),
  })

  const handleMutate = formValues => {
    mutate(currentData => ({
      data: {
        ...currentData,
        profile: {
          ...currentData.profile,
          ...formValues,
        },
      },
    }))

    dispatch(fetchMe())
  }

  const renderSidebarContent = useCallback(
    () =>
      map(TABS, tab => (
        <SidebarItem
          active={tab.value === activeTab}
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </SidebarItem>
      )),
    [activeTab],
  )

  const renderForm = useCallback(() => {
    if (isLoading) return <Loader />

    switch (activeTab) {
      case 'Profile':
        return (
          <ProfileForm
            initialData={{
              avatar: data?.profile?.avatar,
              username: data?.profile?.username,
              first_name: data?.profile?.first_name,
              last_name: data?.profile?.last_name,
              gender: data?.profile?.gender,
              english_level: data?.profile?.english_level,
              year_of_birth: data?.profile?.year_of_birth,
              country: data?.profile?.country,
            }}
            onSuccess={handleMutate}
          />
        )

      case 'Password':
        return <PasswordForm />

      case 'About':
        return (
          <AboutForm
            initialData={{
              english_level: data?.profile?.english_level,
              bio: data?.profile?.bio,
              interests: data?.profile?.interests,
            }}
          />
        )

      default:
        return null
    }
  }, [activeTab, isLoading, data])

  return (
    <Background>
      <Head description="Settings" title="Settings" />
      <Container pb={60} pt={60}>
        <Sidebar>
          <Title>{s('title')}</Title>
          <SidebarContent>{renderSidebarContent()}</SidebarContent>
        </Sidebar>

        <FormContent>{renderForm()}</FormContent>
      </Container>
      <Footer />
    </Background>
  )
}

export default Settings
