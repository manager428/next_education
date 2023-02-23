import React, { useCallback, useEffect, useState } from 'react'

import get from 'lodash/get'

import ChildManage from 'Containers/Pages/Parent/Manage/ChildManage'
import { Background } from 'Containers/Pages/Parent/Manage/ChildManage/styles'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import {
  ChangePasswordModal,
  DeleteChildModal,
  SubscriptionExpiredModal,
} from 'Components/Blocks/Entities/Parent/Modals'
import Footer from 'Components/Blocks/Footer'

import { parentApi } from 'Services/Api/requests'
import { withAuthSync } from 'Services/Auth'

import ModalsContext from './context'

const Manage: React.FC = () => {
  const [isLoading, setLoading] = useState(true)

  const [parentData, setParentData] = useState()
  const [, setChildData] = useState<null | Record<string, string>>(null)
  const [selectedSlide, setSelectedSlide] = useState<{
    id?: number
    title: string
  } | null>(null)

  const [changePasswordModal, setChangePasswordModal] = useState({
    isOpen: false,
  })
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
  })
  const [expireModal, setExpireModal] = useState({
    isOpen: false,
  })

  const fetchData = async (): Promise<void> => {
    const response = await parentApi.getInfo()

    const responseData = get(response, 'data')
    setParentData(responseData)

    setLoading(false)

    const isExpired = get(responseData, ['payment_code', 'is_expired'], false)

    if (isExpired) {
      setExpireModal({ isOpen: true })
    }
  }

  useEffect(() => {
    setLoading(true)

    fetchData()
  }, [])

  const handleSelectChild = useCallback(async selectedUser => {
    setSelectedSlide(selectedUser)
  }, [])

  const handleSuccessDeleteChild = useCallback(() => {
    fetchData()

    setSelectedSlide(null)
    setChildData(null)

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <Background>
      {expireModal.isOpen && (
        <SubscriptionExpiredModal
          isOpen={expireModal.isOpen}
          onClose={() => setExpireModal({ isOpen: false })}
        />
      )}

      {changePasswordModal.isOpen && selectedSlide?.id && (
        <ChangePasswordModal
          isOpen={changePasswordModal.isOpen}
          userId={selectedSlide.id}
          onClose={() => setChangePasswordModal({ isOpen: false })}
          onSuccess={() => null}
        />
      )}

      {deleteModal.isOpen && selectedSlide?.id && (
        <DeleteChildModal
          fullName={selectedSlide.title}
          isOpen={deleteModal.isOpen}
          userId={selectedSlide?.id}
          onClose={() => setDeleteModal({ isOpen: false })}
          onSuccess={handleSuccessDeleteChild}
        />
      )}

      <ModalsContext.Provider
        value={{
          onResetPassword: () => setChangePasswordModal({ isOpen: true }),
          onDeleteChild: () => setDeleteModal({ isOpen: true }),
        }}
      >
        <Flex margin="30px auto">
          {isLoading ? (
            <Loader />
          ) : (
            <ChildManage
              data={parentData}
              onRefetch={fetchData}
              onSelectChild={handleSelectChild}
            />
          )}
        </Flex>
      </ModalsContext.Provider>
      <Footer />
    </Background>
  )
}

export default withAuthSync(Manage)
