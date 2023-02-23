export interface IMeResponse {
  readonly id: number
  readonly avatar: string
  readonly role: string
  readonly email: string
  readonly username: string
  readonly first_name: string
  readonly last_name: string
  readonly full_name: string
  readonly ageLevel: string
  readonly age: string | null
  readonly year_of_birth: number
  readonly language_code: string
  readonly country: string
  readonly created_at: string
  readonly classrooms_empty_level: {
    id: number
    class_logo: string
    class_name: string
    students_count: number
  }[]
  readonly notifications: {
    chat: boolean
    friends: boolean
    notifications: boolean
  }
  readonly school?: {
    id: number
    logo: string
    school_name: string
  }
}
