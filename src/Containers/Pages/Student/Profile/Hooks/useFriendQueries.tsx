import { useCallback, useState } from 'react'

import { friendsApi } from 'Services/Api/requests'

const useFriendQueries = ({ userId }: { userId: number }) => {
  const [isLoading, setLoading] = useState(false)

  const addToFriend = useCallback(async () => {
    setLoading(true)
    await friendsApi.sendFriendRequest(userId)
    setLoading(false)
  }, [userId])

  const deleteFromFriends = useCallback(async () => {
    setLoading(true)
    await friendsApi.deleteFriend(userId)
    setLoading(false)
  }, [userId])

  const approveFriendRequest = useCallback(async () => {
    setLoading(true)
    await friendsApi.approveFriendRequest(userId)
    setLoading(false)
  }, [userId])

  const rejectFriendRequest = useCallback(async () => {
    setLoading(true)
    await friendsApi.rejectFriendRequest(userId)
    setLoading(false)
  }, [userId])

  const cancelFriendRequest = useCallback(async () => {
    setLoading(true)
    await friendsApi.cancelOwnFriendRequest(userId)
    setLoading(false)
  }, [userId])

  return {
    isLoading,
    addToFriend,
    deleteFromFriends,
    approveFriendRequest,
    rejectFriendRequest,
    cancelFriendRequest,
  }
}

export default useFriendQueries
