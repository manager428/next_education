import React, { useCallback, useState } from 'react'

import get from 'lodash/get'

import { UserBanHistoryTable } from 'Components/Blocks/Entities/Moderator/Tables'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import moderatorApi, {
  UserBanHistoryParams,
} from 'Services/Api/requests/moderator'

import { useUserContext } from '../../context'
import { Container } from '../../styles'

const BanHistory: React.FC = () => {
  const { onUpdateUser } = useUserContext()
  const { id } = useRouterQueryParams()

  const [isLoading, setLoading] = useState(false)
  const [bansData, setBansData] = useState<{
    bans?: Array<{
      id: string
    }>
  }>({})

  const fetchData = useCallback(
    async params => {
      if (!id) return

      setLoading(true)

      const dateSortBy = get(params.sortBy, [0, 'desc'])

      const updatedParams: UserBanHistoryParams = {
        id: +id,
        order: dateSortBy === false ? 'asc' : 'desc',
        page: params.pageIndex + 1,
      }

      if (typeof dateSortBy === 'undefined') {
        delete updatedParams.order
      }

      const response = await moderatorApi.userBanHistory(updatedParams)

      setBansData(response?.data)

      onUpdateUser(get(response?.data, 'user', {}))

      setLoading(false)
    },
    [id],
  )

  return (
    <Container pt="28px" width={1}>
      <UserBanHistoryTable
        data={bansData}
        isLoading={isLoading}
        onFetch={fetchData}
      />
    </Container>
  )
}

export default BanHistory
