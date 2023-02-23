import React, { useCallback, useMemo, useRef, useState } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'

import { Checkbox, Element, Flex, Loader } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'
import useSwrRequest from 'Hooks/useSwrRequest'

import { ITeacherClassesResponse } from 'Services/Api/requests/teacher/interfaces'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import { theme } from 'Theme'

import { Button, Container, List, ScrollContainer, Title } from './styles'

type Props = {
  onSubmit: (classIds: string[]) => void
  onClose: () => void
}
const DEFAULT_OPTION = { id: 'all_classes', class_name: 'All Classes' }

const TeacherClassPopup: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([
    DEFAULT_OPTION.id,
  ])

  const ref = useRef(null)

  useOutsideClick({ ref, onClick: onClose })

  const { data: teacherClasses = [], isLoading } = useSwrRequest<
    ITeacherClassesResponse['data']
  >({
    url: TEACHER_API_PATHS.classes,
  })

  const teacherClassesOptions = useMemo(
    () =>
      map([DEFAULT_OPTION, ...teacherClasses], teacherClass => ({
        id: `${teacherClass.id}`,
        className: teacherClass.class_name,
      })),
    [teacherClasses],
  )

  const handleSelectClass = useCallback((id: string) => {
    setSelectedClasses(prevState => {
      if (id === DEFAULT_OPTION.id) {
        if (includes(prevState, id)) {
          return filter(prevState, classId => classId !== id)
        }
        return [DEFAULT_OPTION.id]
      }

      if (includes(prevState, id)) {
        return filter(
          prevState,
          classId => classId !== id && classId !== DEFAULT_OPTION.id,
        )
      }
      return [
        ...filter(prevState, classId => classId !== DEFAULT_OPTION.id),
        id,
      ]
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(selectedClasses)
  }

  const renderStudents = () =>
    map(teacherClassesOptions, teacherClass => {
      const { className, id } = teacherClass
      const isChecked = includes(selectedClasses, id)

      return (
        <Flex key={id} mb={14} width={1}>
          <Checkbox
            checked={isChecked}
            id={id}
            withLabel
            onChange={() => handleSelectClass(`${id}`)}
          >
            <Element color={theme.colors.grayMid} fontSize={16}>
              {className}
            </Element>
          </Checkbox>
        </Flex>
      )
    })

  return (
    <Container ref={ref}>
      <Title>Select for which classes the video call will be available</Title>

      <List>
        <ScrollContainer>{renderStudents()}</ScrollContainer>
        {isLoading && <Loader height={60} width={60} />}
      </List>

      <Flex justifyContent="space-between" mt={22} width={1}>
        <Button
          onClick={e => {
            e.preventDefault()
            onClose()
          }}
        >
          Cancel
        </Button>
        <Button active onClick={handleSubmit}>
          Confirm
        </Button>
      </Flex>
    </Container>
  )
}

export default TeacherClassPopup
