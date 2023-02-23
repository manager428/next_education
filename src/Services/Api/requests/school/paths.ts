const SCHOOL_API_PATHS = {
  schoolDetails: (schoolId: number) => `school/${schoolId}`,
  schoolTeachers: (schoolId: number) => `school/${schoolId}/teachers`,
  schoolClassrooms: (schoolId: number) => `school/${schoolId}/classes`,
  schoolStudents: (schoolId: number) => `school/${schoolId}/students`,
  teacherStudents: (schoolId: number, teacherId: number) =>
    `school/${schoolId}/teacher/${teacherId}/students`,
  teacherClassrooms: (schoolId: number, teacherId: number) =>
    `school/${schoolId}/teacher/${teacherId}/classes`,
  classroomStudents: (schoolId: number, teacherId: number, classroomId) =>
    `school/${schoolId}/teacher/${teacherId}/classes/${classroomId}/students`,
  deleteTeacher: (schoolId: number, teacherId: number) =>
    `school/${schoolId}/teacher/${teacherId}`,
  reassignClassToTeacher: schoolId =>
    `school/${schoolId}/classes/reassign-teacher`,
  reassignStudentToTeacher: schoolId =>
    `school/${schoolId}/students/reassign-teacher`,
  changeStudentPassword: (schoolId, studentId) =>
    `school/${schoolId}/student/${studentId}/reset-password`,
  deleteStudent: (schoolId, studentId) =>
    `school/${schoolId}/student/${studentId}`,
  updateSchoolProfile: (schoolId: number) => `school/${schoolId}`,
}

export default SCHOOL_API_PATHS
