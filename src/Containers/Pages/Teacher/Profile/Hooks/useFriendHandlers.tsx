import { useCallback, useState } from 'react'

import { friendsApi } from 'Services/Api/requests'

const useFriendHandlers = ({ userId }: { userId: number }) => {
  const [isLoading, setLoading] = useState(false)

  const addToFriend = useCallback(async () => {
    setLoading(true)
    await friendsApi.sendFriendRequest(userId).finally(() => {
      setLoading(false)
    })
  }, [userId])

  const deleteFromFriends = useCallback(async () => {
    setLoading(true)
    await friendsApi.deleteFriend(userId).finally(() => {
      setLoading(false)
    })
  }, [userId])

  const approveFriendRequest = useCallback(async () => {
    setLoading(true)
    await friendsApi.approveFriendRequest(userId).finally(() => {
      setLoading(false)
    })
  }, [userId])

  const rejectFriendRequest = useCallback(async () => {
    setLoading(true)
    await friendsApi.rejectFriendRequest(userId).finally(() => {
      setLoading(false)
    })
  }, [userId])

  const cancelFriendRequest = useCallback(async () => {
    setLoading(true)
    await friendsApi.cancelOwnFriendRequest(userId).finally(() => {
      setLoading(false)
    })
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

export default useFriendHandlers
