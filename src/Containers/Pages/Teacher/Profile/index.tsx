import React from 'react'

import { useRouter } from 'next/router'

import get from 'lodash/get'
import isNil from 'lodash/isNil'

import { Button, Element, Flex, Loader } from 'Components/UI'

import { DeleteTeacherModal } from 'Components/Blocks/Entities/School/Modals'
import { Content, Sidebar } from 'Components/Blocks/Entities/Teacher/Profile'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { PRIVATE_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import { closeDeleteTeacherModal } from 'Store/modals/slice'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'

import PublicProfileMessage from './Components/PublicProfileMessage'
import { Background, Container } from './styles'
import { Props } from './types'

const Profile: React.FC<Props> = ({ initialData }) => {
  const params = useRouterQueryParams()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const modalState = useAppSelector(state => state.modals)

  const userId = +get(params, 'id', 0)
  const isPublic = !isNil(params?.public)

  const { data, isLoading, mutate } = useSwrRequest<IProfileResponse>({
    url: PROFILE_API_PATHS.details(userId),
    query: {
      public: isPublic,
    },
    options: {
      initialData,
    },
  })

  const handleBackToProfile = () => {
    router.push(PRIVATE_PATHS.USER_PROFILE(userId))
  }

  return (
    <Background>
      <Head
        description="Teacher Profile"
        title={`${data?.profile?.full_name ?? 'User'} Profile`}
      />

      <Container pb={60} pt={20}>
        {isLoading ? (
          <Loader />
        ) : (
          <Flex flexWrap="wrap" justifyContent="space-between" width={1}>
            {isPublic && (
              <PublicProfileMessage
                actionButton={
                  <Button
                    green
                    mt="24px"
                    width="180px"
                    onClick={handleBackToProfile}
                  >
                    <Element color="white">Go Back</Element>
                  </Button>
                }
                mb="28px"
                title="View how your profile looks to other teachers"
              />
            )}
            <Sidebar data={data} isPublic={isPublic} onMutate={mutate} />
            <Content data={data} isPublic={isPublic} />
          </Flex>
        )}
      </Container>

      <Footer />

      {modalState.deleteTeacherModal.isOpen && (
        <DeleteTeacherModal
          onCloseModal={() => dispatch(closeDeleteTeacherModal())}
          onSuccess={() => mutate()}
        />
      )}
    </Background>
  )
}

export default Profile
