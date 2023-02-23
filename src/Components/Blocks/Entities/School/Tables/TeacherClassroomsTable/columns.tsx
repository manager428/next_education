import { useMemo } from 'react'

import {
  ActionsCell,
  ClassCell,
  StudentsCell,
} from 'Components/Blocks/Entities/School/Tables/TeacherClassroomsTable/Cells'

const COLUMNS = [
  {
    Header: 'Classroom name',
    Cell: ClassCell,
    width: 3,
    cellCenter: true,
    accessor: 'class_name',
    sortType: 'basic',
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
    Header: 'Edit',
    Cell: ActionsCell,
    width: 0.5,
    headerCenter: true,
    disableSortBy: true,
  },
]

export function useColumns(isSelectable: boolean) {
  return useMemo(() => {
    if (!isSelectable) return COLUMNS

    return COLUMNS.slice(0, -1)
  }, [isSelectable])
}
