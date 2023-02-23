/* eslint-disable camelcase */
export type DiscussionType = {
  id: number

  author: {
    id: number
    full_name: string
    avatar: string
    friends_data: any
  }

  tags: string[]
  date: string
  content: string
  image: string
  likesCount: number
  isLiked: boolean

  comments: {
    id: string
    author_data: {
      full_name: string
      avatar: string
      id: number
    }
    isLiked: boolean
    likesCount: number
    comment: string
  }[]
  commentsCount: number

  showLoadMoreComments: boolean

  onLoadMoreComments: () => void
  onAddComment: (id: number, message: string) => void
  onAddLike: (id: number) => void
  onAddCommentLike: (id: number, commentId: number) => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}
