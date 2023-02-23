export interface IDiscussionsParams {
  order: 'latest' | 'popular'
  page: number
  tag?: string
}

export interface IDiscussionsCommentsParams {
  id: number
  page: number
}

export interface IDiscussionCreateParams {
  content: string
  image: File
  tags?: string[]
}
