import React, { useCallback, useEffect, useState } from 'react'

import { UpdateYearOfBirthModal } from 'Components/Blocks/Entities/Student/Modals'

import useMe from 'Hooks/useMe'

import { fetchMe } from 'Store/me/thunks'

const StudentModals = () => {
  const me = useMe()

  const [isTemporaryModalOpen, setTemporaryModalOpen] = useState(false)

  useEffect(() => {
    if (!me?.year_of_birth) {
      setTemporaryModalOpen(true)
    }
  }, [me])

  const handleSuccessTemporaryModal = useCallback(() => {
    setTemporaryModalOpen(false)
    fetchMe()
  }, [])

  const handleCloseTemporaryModal = useCallback(() => {
    setTemporaryModalOpen(false)
  }, [])

  return (
    <>
      {!me?.year_of_birth && (
        <UpdateYearOfBirthModal
          isOpen={isTemporaryModalOpen}
          onCloseModal={handleCloseTemporaryModal}
          onSuccess={handleSuccessTemporaryModal}
        />
      )}
    </>
  )
}

export default StudentModals
