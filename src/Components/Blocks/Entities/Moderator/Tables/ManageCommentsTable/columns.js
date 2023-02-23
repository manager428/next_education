import { useMemo } from 'react'

import { DateTime } from 'luxon'

import {
  ActionsCell,
  ContentCell,
  SectionCell,
  UserCell,
} from 'Components/Blocks/Entities/Moderator/Tables/ManageCommentsTable/Cells'

export function useColumns() {
  return useMemo(
    () => [
      {
        Header: 'Date',
        Cell: ({ value }) =>
          DateTime.fromISO(value).toFormat('dd.MM.yy') || '-',
        accessor: 'created_at',
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
      },
      {
        Header: 'Section',
        Cell: SectionCell,
        accessor: 'section_title',
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Author',
        Cell: UserCell,
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Comment',
        Cell: ContentCell,
        accessor: 'comment',
        width: 3,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Actions',
        Cell: ActionsCell,
        width: 1,
        headerCenter: true,
        cellCenter: true,
        disableSortBy: true,
      },
    ],
    [],
  )
}
