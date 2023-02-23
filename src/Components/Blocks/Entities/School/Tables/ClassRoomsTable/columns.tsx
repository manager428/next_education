import { useMemo } from 'react'

import { ActionsCell, ClassCell, StudentsCell, TeacherCell } from './Cells'

export function useColumns() {
  return useMemo(
    () => [
      {
        Header: 'Classroom name',
        Cell: ClassCell,
        width: 3,
        cellCenter: true,
        accessor: 'class_name',
        sortType: 'basic',
      },
      {
        Header: 'Teacher',
        Cell: TeacherCell,
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
