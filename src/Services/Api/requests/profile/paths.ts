const PROFILE_API_PATHS = {
  update: `user`,
  details: (id: number) => `user/${id}`,
  challenges: (id: number) => `user/${id}/challenges`,
  communities: (id: number) => `user/${id}/communities`,
  debates: (id: number) => `user/${id}/debates`,
  lectoriums: (id: number) => `user/${id}/lectoriums`,
}

export default PROFILE_API_PATHS
