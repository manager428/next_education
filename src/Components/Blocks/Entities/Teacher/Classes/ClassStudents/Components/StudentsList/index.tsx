import React, { useCallback, useMemo } from 'react'

import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { Element, Flex } from 'Components/UI'

import { ITeacher } from 'Services/Api/requests/teacher/interfaces'

import Student from './Student'
import { Column, Container } from './styles'

const StudentsList: React.FC<{
  data: ITeacher[]
  isSelectable: boolean
  selectedIds: number[]
}> = ({ data, isSelectable, selectedIds }) => {
  const renderStudents = useCallback(
    ({ leftColumn, rightColumn }) => {
      if (leftColumn.length === 0) {
        return (
          <Element fontSize={16} lineHeight="28px" textAlign="left" width={1}>
            There are no students in the classroom. Invite students using the
            classroom <br />
            code above, or reassign them from other classrooms.
          </Element>
        )
      }
      return (
        <Flex alignItems="flex-start" justifyContent="space-between" width={1}>
          <Column>
            {map(leftColumn, student => (
              <Student
                age={student.age}
                avatar={student.avatar}
                classDetails={{
                  id: student.class_details.id,
                  className: student.class_details.class_name,
                }}
                country={student.country}
                fullName={student.full_name}
                id={student.id}
                isSelectable={isSelectable}
                isSelected={selectedIds.includes(student.id)}
                key={student.id}
                yearOfBirth={student?.year_of_birth}
              />
            ))}
          </Column>

          {rightColumn.length > 0 && (
            <Column>
              {map(rightColumn, student => (
                <Student
                  age={student.age}
                  avatar={student.avatar}
                  classDetails={{
                    id: student.class_details.id,
                    className: student.class_details.class_name,
                  }}
                  country={student.country}
                  fullName={student.full_name}
                  id={student.id}
                  isSelectable={isSelectable}
                  isSelected={selectedIds.includes(student.id)}
                  key={student.id}
                  yearOfBirth={student?.year_of_birth}
                />
              ))}
            </Column>
          )}
        </Flex>
      )
    },
    [selectedIds, isSelectable],
  )

  const splitUsersByColumn = useMemo(
    () =>
      reduce(
        data,
        (
          acc: { rightColumn: any[]; leftColumn: any[] },
          user: any,
          index: number,
        ) => {
          if (index % 2) {
            acc.rightColumn.push(user)
          } else {
            acc.leftColumn.push(user)
          }

          return acc
        },
        { leftColumn: [], rightColumn: [] },
      ),
    [data, selectedIds, isSelectable],
  )

  return <Container mt={24}>{renderStudents(splitUsersByColumn)}</Container>
}

export default StudentsList
