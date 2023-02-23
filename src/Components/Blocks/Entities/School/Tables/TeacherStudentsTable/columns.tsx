import { useMemo } from 'react'

import {
  ActionsCell,
  ActivityCell,
  ClassroomCell,
  UserCell,
} from 'Components/Blocks/Entities/School/Tables/TeacherStudentsTable/Cells'

const COLUMNS = [
  {
    Header: 'Students',
    accessor: 'full_name',
    Cell: UserCell,
    width: 4,
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
    Header: 'Classroom',
    Cell: ClassroomCell,
    width: 2,
    headerCenter: true,
    cellCenter: true,
    cellRight: false,
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
]

export function useColumns(isSelectable: boolean) {
  return useMemo(() => {
    if (!isSelectable) return COLUMNS

    return COLUMNS.slice(0, -1)
  }, [isSelectable])
}
