import React, { useCallback, useState } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'

import { closeNoCircleGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

import { useAppDispatch } from 'Hooks/useStore'

import { openSchoolReassignStudentTeacherModal } from 'Store/modals/slice'

import { theme } from 'Theme'

import { Button } from '../styles'

const useSelectStudents = () => {
  const dispatch = useAppDispatch()
  const [isSelectable, setSelectable] = useState(false)
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleToggleSelectable = useCallback(() => {
    setSelectable(prevState => {
      const nextState = !prevState

      if (!nextState) {
        setSelectedIds([])
      }

      return nextState
    })
  }, [])

  const handleReassignTeacher = useCallback(() => {
    if (selectedIds.length === 0) return

    dispatch(
      openSchoolReassignStudentTeacherModal({
        userIds: selectedIds,
      }),
    )

    handleToggleSelectable()
  }, [selectedIds])

  const handleSelectStudent = studentId => {
    setSelectedIds(prevState => {
      if (includes(prevState, studentId)) {
        return filter(prevState, id => studentId !== id)
      }
      return [...prevState, studentId]
    })
  }

  const renderButtons = useCallback(() => {
    if (!isSelectable) return null

    return (
      <Flex mt={28} width={1}>
        <Button gray={selectedIds.length === 0} onClick={handleReassignTeacher}>
          Reassign Teacher
        </Button>
        <Button
          color={theme.colors.orange}
          ml={30}
          onClick={handleToggleSelectable}
        >
          <Icon
            fill={theme.colors.orange}
            icon={closeNoCircleGlyph}
            size={12}
            wrapperStyles={{ mr: '6px' }}
          />
          Cancel Selection
        </Button>
      </Flex>
    )
  }, [isSelectable, selectedIds])

  return {
    setSelectable,
    isSelectable,
    renderButtons,
    selectedIds,
    handleSelectStudent,
  }
}

export default useSelectStudents
