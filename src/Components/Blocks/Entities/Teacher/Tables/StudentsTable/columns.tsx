import { useMemo } from 'react'

import {
  ActionsCell,
  ActivityCell,
  ClassCell,
  UserCell,
  UsernameCell,
} from 'Components/Blocks/Entities/Teacher/Tables/StudentsTable/Cells'

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
        Header: 'Classroom Name',
        Cell: ClassCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Username',
        Cell: UsernameCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
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
