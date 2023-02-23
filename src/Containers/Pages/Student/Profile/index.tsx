import React, { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'

import get from 'lodash/get'

import { Flex, Loader } from 'Components/UI'

import {
  CreateCallModal,
  ViewCallModal,
} from 'Components/Blocks/Entities/Calls/Modals'
import ChangeStudentPasswordModal from 'Components/Blocks/Entities/Teacher/Modals/ChangeStudentPasswordModal'
import RemoveStudentModal from 'Components/Blocks/Entities/Teacher/Modals/RemoveStudentModal'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'
import { AddBadgeModal } from 'Components/Blocks/Modals'

import { TEACHER_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  closeAddBadgeModal,
  closeChangeStudentPasswordModal,
  closeCreateCallModal,
  closeRemoveStudentModal,
  closeViewCallModal,
} from 'Store/modals/slice'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'

import { Content, Sidebar } from './Blocks'
import { Background, Container } from './styles'
import { Props } from './types'

const Profile: React.FC<Props> = ({ initialData }) => {
  const params = useRouterQueryParams()
  const userId = +get(params, 'id', 0)
  const router = useRouter()

  const modalState = useAppSelector(state => state.modals)
  const dispatch = useAppDispatch()

  const { data, isLoading, mutate } = useSwrRequest<IProfileResponse>({
    url: PROFILE_API_PATHS.details(+userId),
    options: {
      initialData,
    },
  })

  const memoizedData = useMemo(() => data, [data])

  const handleCloseViewCallModal = useCallback(() => {
    dispatch(closeViewCallModal())
  }, [])

  const handleCloseAddBadgeModal = useCallback(() => {
    dispatch(closeAddBadgeModal())
  }, [])

  const handleСloseRemoveStudentModal = useCallback(() => {
    dispatch(closeRemoveStudentModal())
  }, [])

  const handleСloseChangePasswordModal = useCallback(() => {
    dispatch(closeChangeStudentPasswordModal())
  }, [])

  const handleRedirectToManage = useCallback(() => {
    router.push(TEACHER_PATHS.MANAGE)
  }, [])

  return (
    <Background>
      <Head
        description="User Profile"
        title={`${data?.profile?.full_name} Profile`}
      />

      <Container pb={60} pt={60}>
        {isLoading ? (
          <Loader />
        ) : (
          <Flex justifyContent="space-between" width={1}>
            {modalState.viewCallModal.isOpen && modalState.viewCallModal.id && (
              <ViewCallModal
                id={modalState.viewCallModal.id}
                isOpen={modalState.viewCallModal.isOpen}
                onClose={handleCloseViewCallModal}
              />
            )}

            {modalState.createCallModal.isOpen &&
              modalState.createCallModal.type && (
                <CreateCallModal
                  isOpen={modalState.createCallModal.isOpen}
                  type={modalState.createCallModal.type}
                  onClose={() => dispatch(closeCreateCallModal())}
                />
              )}

            {modalState.addBadgeModal.isOpen &&
              modalState.addBadgeModal.userId && (
                <AddBadgeModal
                  isOpen={modalState.addBadgeModal.isOpen}
                  selectedUserId={modalState.addBadgeModal.userId}
                  onCloseModal={handleCloseAddBadgeModal}
                  onSuccess={mutate}
                />
              )}

            {modalState.removeStudentModal.isOpen &&
              modalState.removeStudentModal?.selectedUser?.id && (
                <RemoveStudentModal
                  isOpen={modalState.removeStudentModal.isOpen}
                  selectedUser={modalState.removeStudentModal.selectedUser}
                  onCloseModal={handleСloseRemoveStudentModal}
                  onSuccess={handleRedirectToManage}
                />
              )}

            {modalState.changeStudentPasswordModal.isOpen &&
              modalState.changeStudentPasswordModal?.selectedUser?.id && (
                <ChangeStudentPasswordModal
                  isOpen={modalState.changeStudentPasswordModal.isOpen}
                  selectedUser={
                    modalState.changeStudentPasswordModal.selectedUser
                  }
                  onCloseModal={handleСloseChangePasswordModal}
                />
              )}

            <div>
              <Sidebar data={data} onMutate={mutate} />
            </div>

            <Content data={memoizedData} />
          </Flex>
        )}
      </Container>

      <Footer />
    </Background>
  )
}

export default Profile
