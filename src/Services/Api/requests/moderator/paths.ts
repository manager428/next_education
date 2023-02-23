const MODERATOR_API_PATHS = {
  users: 'moderator/users',
  banUser: 'moderator/ban',
  blockUser: 'moderator/block',
  updateComment: (section: string, id: number) =>
    `moderator/${section}/comment/${id}`,
  addWarning: 'moderator/warning',
  addUserBookmark: 'moderator/update-list',
  removeBanOrBlock: `moderator/ban-or-block`,
  complaints: `moderator/complaints`,
  comments: `moderator/comments`,
  deleteComment: (section: string, id: number) =>
    `moderator/${section}/comment/${id}`,
  userComments: (id: number) => `moderator/user/${id}/comments`,
  userComplaints: (id: number) => `moderator/user/${id}/complaints`,
  userBanHistory: (id: number) => `moderator/user/${id}/ban-history`,
  addComplaint: `moderator/user/complaint`,
}

export default MODERATOR_API_PATHS
