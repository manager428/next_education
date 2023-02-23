import React from 'react'

import { format, parseISO } from 'date-fns'
import { useRouter } from 'next/router'

import get from 'lodash/get'
import map from 'lodash/map'

import { LectoriumPost } from 'Components/Blocks/Entities/Lectorium/index'
import {
  Container,
  Title,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/ListBlocks/RelatedVideos/styles'

import { SHARE_EXPERIENCE_COUNT } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

type Props = {
  title?: string
  color?: string
  posts: Array<any>
}

const RelatedVideos: React.FC<Props> = ({
  title = 'More related videos',
  color = undefined,
  posts,
}) => {
  const router = useRouter()

  if (posts.length === 0) return null

  return (
    <Container>
      <Title mb={20}>{title}</Title>

      {map(posts, post => {
        const author = get(post, 'author_data.full_name', '')
        const likesCount = get(post, 'likes_count', 0)
        const postTitle = get(post, 'title', '')
        const type = get(post, 'share_experience', '')
        const postsAmount = get(post, SHARE_EXPERIENCE_COUNT[type], 0)
        const preview = get(post, 'preview_url', '')
        const createdAt = parseISO(get(post, 'created_at'))
        const date = format(createdAt, 'dd MMM yyyy')
        const id = get(post, 'id', 0)
        const isLiked = false
        const privacy = get(post, 'privacy')
        const postProgressStatus = get(post, 'post_progress_status', '')

        return (
          <LectoriumPost
            author={author}
            color={color}
            date={date}
            isLiked={isLiked}
            key={id}
            likes={likesCount}
            marginBottom={20}
            postsAmount={postsAmount}
            preview={preview}
            privacy={privacy}
            status={postProgressStatus}
            title={postTitle}
            type={type}
            onHandleClick={() => router.push(PUBLIC_PATHS.LECTORIUM_POST(id))}
          />
        )
      })}
    </Container>
  )
}

export default RelatedVideos
