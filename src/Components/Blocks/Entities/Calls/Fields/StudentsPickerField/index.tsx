import React, { useState } from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import StudentsPopup from 'Components/Blocks/Popups/StudentsPopup/StudentsPopup'

import { AddStudentIcon, Avatar, Container, UsersContainer } from './styles'

type Props = {
  name: string
  type: 'single' | 'multiple'
}

interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
}

type Users = {
  id: number
  avatar: string
  full_name: string
}

const StudentsPickerField: React.FC<Props> = ({ name, type, ...rest }) => {
  const [isShowPopup, setShowPopup] = useState<boolean>(false)

  const handleUpdate = (input, students: Array<Users>): void => {
    input.onChange(students)
    setShowPopup(false)
  }

  const renderField: React.FC<FieldRenderProps<string>> = ({
    input,
  }): React.ReactElement => {
    const renderStudents = (): Array<React.ReactNode> | React.ReactNode => {
      const students = get(input, 'value', [])

      if (!students || students.length === 0) {
        return (
          <Flex onClick={() => setShowPopup(true)}>
            <AddStudentIcon />
          </Flex>
        )
      }

      return (
        <UsersContainer onClick={() => setShowPopup(true)}>
          {map(students, student => {
            const id = get(student, 'id')

            return <Avatar key={id} src={get(student, 'avatar', '')} />
          })}
        </UsersContainer>
      )
    }

    const selectedUsers = map(get(input, 'value', []), user => ({
      avatar: get(user, 'avatar'),
      id: get(user, 'id'),
      full_name: get(user, 'full_name', ''),
    }))

    return (
      <>
        {isShowPopup && (
          <StudentsPopup
            selectedUsers={selectedUsers}
            type={type}
            onClose={() => setShowPopup(false)}
            onSubmit={students => handleUpdate(input, students)}
          />
        )}
        <Flex justifyContent="space-between" width={1}>
          {renderStudents()}
        </Flex>
      </>
    )
  }

  return (
    <Container>
      <Field disabled name={name} render={renderField} {...rest} />
    </Container>
  )
}

export default StudentsPickerField
