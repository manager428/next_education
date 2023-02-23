import { useMemo } from 'react'

import { DateTime } from 'luxon'

import {
  ContentCell,
  SectionCell,
  UserCell,
} from 'Components/Blocks/Entities/Moderator/Tables/UserComplaintsTable/Cells'

export function useColumns() {
  return useMemo(
    () => [
      {
        Header: 'Date',
        Cell: ({ value }) =>
          DateTime.fromISO(value.replace(/ /g, 'T')).toFormat('dd.MM.yy') ||
          '-',
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
        Header: 'From',
        Cell: UserCell,
        accessor: 'author_data',
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'To',
        Cell: UserCell,
        accessor: 'user_data',
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Reason & Explanatory note',
        Cell: props => ContentCell({ ...props, type: 'reason' }),
        accessor: 'text_reason',
        width: 3,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
    ],
    [],
  )
}
