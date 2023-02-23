import React, { useCallback, useState } from 'react'

import get from 'lodash/get'

import { useUserContext } from 'Containers/Pages/Moderator/User/context'
import { Container } from 'Containers/Pages/Moderator/User/styles'

import { UserComplaintsTable } from 'Components/Blocks/Entities/Moderator/Tables'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import moderatorApi, {
  UserComplaintsParams,
} from 'Services/Api/requests/moderator'

const Complaints: React.FC = () => {
  const { onUpdateUser } = useUserContext()
  const { id } = useRouterQueryParams()

  const [isLoading, setLoading] = useState(false)
  const [complaintsData, setComplaintsData] = useState<{
    complaints?: Array<{
      user_id: string
      user_data: {
        is_banned: boolean
      }
    }>
  }>({})

  const fetchData = useCallback(
    async params => {
      if (!id) return

      setLoading(true)

      const dateSortBy = get(params.sortBy, [0, 'desc'])

      const updatedParams: UserComplaintsParams = {
        section: params.section,
        order: dateSortBy === false ? 'asc' : 'desc',
        page: params.pageIndex + 1,
      }

      if (typeof dateSortBy === 'undefined') {
        delete updatedParams.order
      }

      const response = await moderatorApi.userComplaints(updatedParams, +id)

      setComplaintsData(response?.data)

      onUpdateUser(get(response?.data, 'user', {}))
      setLoading(false)
    },
    [id],
  )

  return (
    <Container pt="28px" width={1}>
      <UserComplaintsTable
        data={complaintsData}
        isLoading={isLoading}
        onFetch={fetchData}
      />
    </Container>
  )
}

export default Complaints
