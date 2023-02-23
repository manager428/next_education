const PARENT_API_PATHS = {
  getInfo: `parent`,
  addChild: `parent/add-child`,
  reassignChild: (userId: number) => `parent/child/${userId}/reassign`,
  changeChildPassword: (userId: number) =>
    `parent/child/${userId}/change-password`,
  deleteChild: (userId: number) => `parent/child/${userId}`,
}

export default PARENT_API_PATHS
