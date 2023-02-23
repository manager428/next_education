import { useMemo } from 'react'

import {
  ActionsCell,
  ActivityCell,
  ClassroomCell,
  TeacherCell,
  UserCell,
} from 'Components/Blocks/Entities/School/Tables/StudentsTable/Cells'

export function useColumns() {
  return useMemo(
    () => [
      {
        Header: 'Students',
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
        Header: 'Teacher Name',
        Cell: TeacherCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Classroom',
        Cell: ClassroomCell,
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
