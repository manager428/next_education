import React, { useCallback, useMemo, useRef, useState } from 'react'

import { Dropdown, Element, Flex } from 'Components/UI'

import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import {
  openAddStudentModal,
  openAssignStudentsToClassSelectorModal,
  openDeleteClassModal,
  openUpdateClassRoomModal,
} from 'Store/modals/slice'

import { theme } from 'Theme'

import {
  AddIcon,
  AddNew,
  ClassLogo,
  DropdownLabel,
  EditIcon,
  EditWrapper,
  RoomEditWrapper,
  RoundedFlex,
  SettingsIcon,
} from '../styles'

const ClassRoomInfo: React.FC<{
  avatar: string
  title: string
  studentsCount: number
  classRoomId: number
  englishLevelLabel: string | null
  englishLevel: ENGLISH_LEVEL_ENUM | null
  classRoomLogo: string
}> = ({
  avatar,
  title,
  englishLevelLabel,
  englishLevel,
  studentsCount,
  classRoomId,
  classRoomLogo,
}) => {
  const ref = useRef()
  const dispatch = useAppDispatch()

  const [isShowDropdown, setShowDropdown] = useState(false)
  const [isShowSettingsDropdown, setShowSettingsDropdown] = useState(false)

  useOutsideClick({ ref, onClick: () => setShowDropdown(false) })

  const EDIT_DROPDOWN_OPTIONS = useMemo(
    () => [
      {
        label: <DropdownLabel>Edit Classroom</DropdownLabel>,
        onSelectItem: () =>
          dispatch(
            openUpdateClassRoomModal({
              classroomName: title,
              classId: classRoomId,
              englishLevel,
              classRoomLogo,
            }),
          ),
      },
      {
        label: <DropdownLabel>Delete Classroom</DropdownLabel>,
        onSelectItem: () =>
          dispatch(
            openDeleteClassModal({
              classId: classRoomId,
              classRoomName: title,
            }),
          ),
      },
    ],
    [classRoomId, englishLevel, classRoomLogo, title],
  )

  const STUDENT_DROPDOWN_OPTIONS = [
    {
      label: <DropdownLabel>Create a new student account</DropdownLabel>,
      onSelectItem: () => dispatch(openAddStudentModal()),
    },
    {
      label: (
        <DropdownLabel>Reassign students from other classrooms</DropdownLabel>
      ),
      onSelectItem: () =>
        dispatch(
          openAssignStudentsToClassSelectorModal({
            classId: classRoomId,
            classRoomName: title,
          }),
        ),
    },
  ]

  const handleToggleDropdown = useCallback(() => {
    setShowDropdown(prevState => !prevState)
  }, [])

  const handleToggleSettingsDropdown = useCallback(() => {
    setShowSettingsDropdown(prevState => !prevState)
  }, [])

  const handleLogoClick = () => {
    dispatch(
      openUpdateClassRoomModal({
        classroomName: title,
        classId: classRoomId,
        englishLevel,
        classRoomLogo,
      }),
    )
  }

  return (
    <RoundedFlex flexDirection="column" maxWidth="474px" width={1}>
      <Flex position="relative">
        <Flex position="relative" onClick={handleLogoClick}>
          {avatar && <ClassLogo src={avatar} />}
          <EditWrapper>
            <EditIcon />
          </EditWrapper>
        </Flex>

        <Flex flexWrap="wrap" ml="14px">
          <Element fontSize="20px" fontWeight="600" lineHeight="20px" width={1}>
            {title}
          </Element>
          <Element
            color={theme.colors.graySecondary}
            fontSize="16px"
            fontWeight="400"
            lineHeight="16px"
            mt="12px"
            width={1}
          >
            {englishLevelLabel ?? 'Select English Level'}
          </Element>
          <Element
            color={theme.colors.graySecondary}
            fontSize="16px"
            fontWeight="400"
            lineHeight="16px"
            mt="12px"
            width={1}
          >
            {studentsCount} students
          </Element>
        </Flex>

        <RoomEditWrapper>
          <Flex onClick={handleToggleSettingsDropdown}>
            <SettingsIcon />
          </Flex>

          <Dropdown
            centered
            isVisible={isShowSettingsDropdown}
            minWidth="160px"
            options={EDIT_DROPDOWN_OPTIONS}
            withBorder={false}
            onClose={handleToggleSettingsDropdown}
          />
        </RoomEditWrapper>
      </Flex>

      <Flex mt="14px" position="relative" ref={ref}>
        <AddNew onClick={handleToggleDropdown}>
          <AddIcon />
          Add New Student
        </AddNew>

        <Dropdown
          isVisible={isShowDropdown}
          maxWidth="220px"
          minWidth="220px"
          options={STUDENT_DROPDOWN_OPTIONS}
          withBorder={false}
          onClose={handleToggleDropdown}
        />
      </Flex>
    </RoundedFlex>
  )
}

export default ClassRoomInfo
