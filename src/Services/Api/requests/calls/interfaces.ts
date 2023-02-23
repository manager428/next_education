export interface ICreateCallParams {
  title: string
  description: string
  public_access: boolean
  call_type: string
  students_age: string
  field_trip: boolean
  start_time: string
  end_time: string
  teacher_classes_ids?: string[] | []
  country?: string
  teachers_number?: number
  students_level?: string
  id?: number
  tags?: string[]
  images: File[]
  files?: File[]
  assigned_students?: number[]
  user_timezone?: string
}

export interface ICallsApiDetailResponse {
  id: number
  title: string
  description: string
  country?: string
  tags?: string[]
  images?: string[]
  call_type: 'all' | 'group' | 'individual' | 'class' | 'field_trips'
  start_time: string
  end_time: string
  students_age?: string
  students_age_label?: string
  students_level?: string
  teachers_number: number
  is_opened: boolean
  is_creator: boolean
  is_joined: boolean
  is_finished: boolean
  attachments: Array<{
    file_url: string
  }>
  author_data: {
    country: string
  }

  participants: Array<{
    author_data: {
      id: number
      avatar: string
      full_name: string
    }
  }>
  participants_count: number
  all_participants: Array<{
    author_data: {
      id: number
      avatar: string
      full_name: string
    }
  }>
  call_students: Array<any>
  allow_join_students: boolean
  public_access: boolean
  joined_classes_names: string
}

export type CallSetOpenedParams = {
  is_opened: boolean
}
