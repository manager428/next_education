export type CommentItemProps = {
  comment: any
  onAddCommentLike: (commentId: number) => void
  onUsernameClick: (replyTo: string) => void
}
