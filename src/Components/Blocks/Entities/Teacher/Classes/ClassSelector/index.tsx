import React, { useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import find from 'lodash/find'
import map from 'lodash/map'

import { Flex, Select } from 'Components/UI'

import { TEACHER_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { ITeacherClass } from 'Services/Api/requests/teacher/interfaces'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import { ClassRoomInfo, CopyCode } from './Components'
import { Container } from './styles'

const ClassSelector: React.FC = () => {
  const router = useRouter()

  const params = useRouterQueryParams()
  const classId = params?.id ? parseInt(params.id[0] as string, 10) : null

  const [selectedValue, setSelectedValue] = useState<null | {
    label: string
    value: string
  }>(null)

  const { data: teacherClasses, isLoading: isClassesLoading } = useSwrRequest({
    url: TEACHER_API_PATHS.classes,
  })

  const classesOptions = useMemo(
    () =>
      map(teacherClasses, teacherClass => ({
        label: teacherClass.class_name,
        value: teacherClass.id,
      })),
    [teacherClasses],
  )

  useEffect(() => {
    if (teacherClasses && classId) {
      const selected = classesOptions.find(
        classRoom => classRoom.value === classId,
      )

      if (selected) setSelectedValue(selected)
    }
  }, [classId, classesOptions])

  useEffect(() => {
    if (selectedValue)
      router.push(TEACHER_PATHS.CLASSES(+selectedValue.value), undefined, {
        scroll: false,
      })
  }, [selectedValue?.value])

  const selectedClassById: ITeacherClass | undefined = find(
    teacherClasses,
    teacherClass => teacherClass.id === classId,
  )

  const handleSelect = selected => {
    setSelectedValue(selected)
  }

  useEffect(() => {
    if (classId && !selectedValue) {
      handleSelect(
        find(classesOptions, teacherClass => teacherClass.value === classId),
      )
      return
    }

    // select default first teacher class from dropdown
    if (!classId && !selectedValue && classesOptions.length) {
      handleSelect(classesOptions[0])
    }

    if (!classId && selectedValue) {
      handleSelect(classesOptions[0])
    }
  }, [classId, classesOptions, setSelectedValue])

  return (
    <Container>
      <Flex width={1}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Select
          label=""
          name=""
          noError
          options={classesOptions}
          selectProps={{
            isLoading: isClassesLoading,
            disabled: isClassesLoading,
          }}
          value={selectedValue}
          width="320px"
          onChange={handleSelect}
        />
      </Flex>

      {selectedClassById && (
        <Flex justifyContent="space-between" mt="24px" width={1}>
          <ClassRoomInfo
            avatar={selectedClassById.class_logo}
            classRoomId={selectedClassById.id}
            classRoomLogo={selectedClassById.class_logo}
            englishLevel={selectedClassById.english_level}
            englishLevelLabel={selectedClassById.english_level_label}
            studentsCount={selectedClassById.students_count}
            title={selectedClassById?.class_name}
          />
          <CopyCode classRoomCode={selectedClassById?.class_code} />
        </Flex>
      )}
    </Container>
  )
}

export default ClassSelector
