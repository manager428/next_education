import React, { useCallback, useEffect } from 'react'

import { UpdateClassRoomLevelModal } from 'Components/Blocks/Entities/Teacher/Modals'

import useMe from 'Hooks/useMe'
import { useAppDispatch } from 'Hooks/useStore'

import { fetchMe } from 'Store/me/thunks'
import { toggleUpdateClassRoomLevelModal } from 'Store/modals/slice'

const TeacherModals = () => {
  const me = useMe()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (me && me.classrooms_empty_level?.length > 0) {
      dispatch(
        toggleUpdateClassRoomLevelModal({
          isOpen: true,
          classRooms: me.classrooms_empty_level.map(item => ({
            classId: item.id,
            classLogo: item.class_logo,
            classRoomName: item.class_name,
            studentsCount: item.students_count,
          })),
        }),
      )
    }
  }, [me])

  const handleFetchMe = () => {
    dispatch(fetchMe())
  }

  const handleCloseClassRoomLevelModal = useCallback(() => {
    dispatch(toggleUpdateClassRoomLevelModal({ isOpen: false, classRooms: [] }))
  }, [])

  const handleSuccessClassRoomSelect = () => {
    handleCloseClassRoomLevelModal()
    handleFetchMe()
  }

  return (
    <>
      <UpdateClassRoomLevelModal
        onCloseModal={handleCloseClassRoomLevelModal}
        onSuccess={handleSuccessClassRoomSelect}
      />
    </>
  )
}

export default TeacherModals
