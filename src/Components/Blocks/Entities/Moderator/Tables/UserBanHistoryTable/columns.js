import { useMemo } from 'react'

import { DateTime } from 'luxon'

import { ContentCell } from 'Components/Blocks/Entities/Moderator/Tables/UserBanHistoryTable/Cells'

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
        Header: 'Ban Duration',
        accessor: 'ban_days',
        Cell: ({ value, row }) =>
          row.original.status === 'Blocked' ? 'Blocked' : value,
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Reason',
        accessor: 'complaint_reason',
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'Explanatory note',
        Cell: ContentCell,
        accessor: 'text_reason',
        width: 5,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
    ],
    [],
  )
}
