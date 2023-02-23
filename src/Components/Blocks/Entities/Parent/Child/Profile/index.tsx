import React, { useCallback } from 'react'

import { Flex, Loader } from 'Components/UI'

import { ViewCallModal } from 'Components/Blocks/Entities/Calls/Modals'

import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import { closeViewCallModal } from 'Store/modals/slice'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'

import Content from './Content'
import Sidebar from './Sidebar'
import { Container } from './styles'
import { Props } from './types'

const Profile: React.FC<Props> = ({ userId }) => {
  const modalState = useAppSelector(state => state.modals)
  const dispatch = useAppDispatch()

  const { data, isLoading } = useSwrRequest<IProfileResponse>({
    url: PROFILE_API_PATHS.details(userId),
  })

  const handleCloseViewCallModal = useCallback(() => {
    dispatch(closeViewCallModal())
  }, [])

  return (
    <Container pb={20} pt={20}>
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

          <div>
            <Sidebar data={data} />
          </div>

          <Content data={data} />
        </Flex>
      )}
    </Container>
  )
}

export default Profile
