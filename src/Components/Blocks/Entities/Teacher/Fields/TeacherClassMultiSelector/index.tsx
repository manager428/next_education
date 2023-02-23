import React, { useEffect, useMemo, useState } from 'react'
import { components } from 'react-select'

import filter from 'lodash/filter'
import map from 'lodash/map'

import { Element, Flex, Select } from 'Components/UI'

import {
  Container,
  StyledCheckbox,
  StyledValueContainer,
} from 'Components/Blocks/Entities/Teacher/Fields/TeacherClassMultiSelector/styles'

import useSwrRequest from 'Hooks/useSwrRequest'

import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import { theme } from 'Theme'

const DEFAULT_OPTIONS = [{ label: 'All Classes', value: 'all_classes' }]

const SelectOption = ({
  children,
  isSelected,
  value,
  innerProps: { onClick },
}) => (
  <Flex mb={15} pl={15} pr={15}>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <StyledCheckbox
      checked={isSelected}
      id={`${value}`}
      size="small"
      value={value}
      withLabel
      onChange={onClick}
    >
      <Element
        color={isSelected ? theme.colors.green : theme.colors.graySecondary}
        fontSize={16}
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </Element>
    </StyledCheckbox>
  </Flex>
)

const MultiValue = () => null
const MultiValueRemove = () => null

const ValueContainer = ({ getValue, children, ...props }) => {
  const selectedValues = map(getValue(), 'label')

  return (
    <components.ValueContainer {...props}>
      <StyledValueContainer>{selectedValues.join(', ')}</StyledValueContainer>
      {children}
    </components.ValueContainer>
  )
}

const TeacherClassMultiSelector: React.FC<{
  name: string
  selectProps?: Record<string, unknown>
  onSelect: (values: string[]) => void
  value?: string[]
  placeholder?: string
  isError?: boolean
}> = ({
  name,
  value,
  selectProps,
  placeholder = 'Select',
  onSelect,
  isError,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    {
      label: string
      value: string
    }[]
  >([])

  const {
    data: teacherClasses = [],
    isLoading: isClassesLoading,
  } = useSwrRequest({
    url: TEACHER_API_PATHS.classes,
  })

  const classesOptions = useMemo(() => {
    const teacherClassesOptions = map(teacherClasses, teacherClass => ({
      label: teacherClass.class_name,
      value: teacherClass.id,
    }))

    return [...DEFAULT_OPTIONS, ...teacherClassesOptions]
  }, [teacherClasses])

  useEffect(() => {
    if (value && classesOptions.length > 0 && selectedValue.length <= 1) {
      const selected = filter(classesOptions, teacherClass =>
        map(value, item => `${item}`).includes(`${teacherClass.value}`),
      )

      if (selected.length > 0) {
        setSelectedValue(selected)
      }
    }
  }, [classesOptions, value])

  useEffect(() => {
    if (!isClassesLoading && !value) {
      setSelectedValue(DEFAULT_OPTIONS)
      onSelect([DEFAULT_OPTIONS[0].value])
    }
  }, [isClassesLoading, value])

  const handleSelect = selected => {
    const isAllClassSelected = selectedValue?.find(
      item => item.value === DEFAULT_OPTIONS[0].value,
    )
    const isNextAllClassSelected = selected.find(
      item => item.value === DEFAULT_OPTIONS[0].value,
    )

    if (isAllClassSelected && selected.length > 1) {
      const onlyClassesValues = selected.filter(
        item => item.value !== DEFAULT_OPTIONS[0].value,
      )

      setSelectedValue(onlyClassesValues)
      onSelect(map(onlyClassesValues, item => item.value))

      return
    }

    if (isNextAllClassSelected) {
      setSelectedValue(DEFAULT_OPTIONS)
      onSelect([DEFAULT_OPTIONS[0].value])
    } else {
      const onlyClassesValues = selected.filter(
        item => item.value !== DEFAULT_OPTIONS[0].value,
      )

      setSelectedValue(onlyClassesValues)
      onSelect(map(onlyClassesValues, item => item.value))
    }
  }

  return (
    <Container>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Select
        {...selectProps}
        closeMenuOnSelect={false}
        components={{
          Option: SelectOption,
          MultiValue,
          MultiValueRemove,
          ValueContainer,
        }}
        disabled={isClassesLoading}
        error={isError}
        hideSelectedOptions={false}
        isClearable={false}
        isLoading={isClassesLoading}
        isMulti
        isSearchable={false}
        name={name}
        noError
        options={classesOptions}
        placeholder={placeholder}
        value={selectedValue}
        width="100%"
        onChange={handleSelect}
      />
    </Container>
  )
}

export default TeacherClassMultiSelector
