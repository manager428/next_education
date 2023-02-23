const TEACHER_API_PATHS = {
  getStudents: `teacher/students`,
  addBadge: `teacher/manage/add-badge`,
  removeStudent: (id: number) => `teacher/student/${id}`,
  changeStudentPassword: `teacher/manage/change-password`,
  classes: `teacher/classes`,
  getClassDetails: (id: number) => `teacher/class/${id}`,
  addClass: 'teacher/class',
  deleteClass: (id: number) => `teacher/class/${id}`,
  updateClass: (id: number) => `teacher/class/${id}`,
  assignToClass: (id: number) => `teacher/class/${id}/students`,
  addStudent: `teacher/student`,
  updateYearOfBirth: (id: number) => `teacher/student/${id}/year-of-birth`,
  search: `teacher/search`,
}

export default TEACHER_API_PATHS
