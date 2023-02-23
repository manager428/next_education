import { useMemo } from 'react'

import {
  ActionsCell,
  UserActivityCell,
  UserInfoCell,
  UsernameCell,
  UserStatusCell,
} from 'Components/Blocks/Entities/Moderator/Tables/ManageUserTable/Cells'

export function useColumns() {
  return useMemo(
    () => [
      {
        Header: 'Name or Username',
        Cell: UsernameCell,
        width: 2,
        headerCenter: true,
        cellCenter: true,
      },
      {
        Header: 'User Info',
        Cell: UserInfoCell,
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'User Activity',
        Cell: UserActivityCell,
        width: 1,
        headerCenter: true,
        cellCenter: true,
        sortType: 'basic',
        disableSortBy: true,
      },
      {
        Header: 'User Status',
        accessor: 'user_block_status',
        Cell: UserStatusCell,
        width: 1,
        headerCenter: true,
        cellCenter: true,
        disableSortBy: true,
      },
      {
        Header: 'Actions with User',
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
