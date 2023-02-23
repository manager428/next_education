import React, { useMemo, useState } from 'react'

import map from 'lodash/map'

import { closeNoCircleGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import { useAppDispatch } from 'Hooks/useStore'

import { openAssignStudentsToClassModal } from 'Store/modals/slice'

import { ITeacherClass } from 'Services/Api/requests/teacher/interfaces'

import { theme } from 'Theme'

import ClassDropdown from './Components/ClassDropdown'
import StudentsList from './Components/StudentsList'
import { Button, Circle, Content } from './styles'

const ClassStudents: React.FC<{
  data?: ITeacherClass
  selectedIds: number[]
}> = ({ data, selectedIds }) => {
  const dispatch = useAppDispatch()

  const [isSelectable, setSelectable] = useState(false)

  const handleToggleSelectable = () => {
    setSelectable(prevState => !prevState)
  }

  const handleAssignToClass = () => {
    dispatch(
      openAssignStudentsToClassModal({
        userIds: selectedIds,
        classroomName: data?.class_name ?? '',
      }),
    )
  }

  const studentsData = useMemo(
    () =>
      map(data?.students, record => ({
        ...record.student_data,
      })),
    [data?.students],
  )

  return (
    <Content>
      <Flex justifyContent="space-between" width={1}>
        <Flex alignItems="center">
          <Element fontSize={24} fontWeight={600} lineHeight="24px">
            Students in the “{data?.class_name}”{' '}
          </Element>
          <Circle />
          <Element fontSize={24} fontWeight={600} lineHeight="24px">
            {' '}
            {data?.students_count}
          </Element>
        </Flex>

        {data && (
          <ClassDropdown
            classId={data.id}
            className={data.class_name}
            englishLevel={data.english_level}
            onSelect={handleToggleSelectable}
          />
        )}
      </Flex>

      {isSelectable && (
        <Flex mt={28} width={1}>
          <Button onClick={handleAssignToClass}>Reassign to Classroom</Button>
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
      )}

      <StudentsList
        data={studentsData}
        isSelectable={isSelectable}
        selectedIds={selectedIds}
      />
    </Content>
  )
}

export default ClassStudents
