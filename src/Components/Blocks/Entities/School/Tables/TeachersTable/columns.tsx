import { useMemo } from 'react'

import {
  ActionsCell,
  ActivityCell,
  StudentsCell,
  TeacherClassesCell,
  UserCell,
} from 'Components/Blocks/Entities/School/Tables/TeachersTable/Cells'

export function useColumns() {
  return useMemo(
    () => [
      {
        Header: 'Teachers',
        accessor: 'full_name',
        Cell: UserCell,
        width: 3,
        cellCenter: true,
        sortType: 'basic',
      },
      {
        Header: 'Activity & Info',
        Cell: ActivityCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Students',
        Cell: StudentsCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Classrooms',
        Cell: TeacherClassesCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Edit User',
        Cell: ActionsCell,
        width: 0.7,
        headerRight: true,
        disableSortBy: true,
      },
    ],
    [],
  )
}
