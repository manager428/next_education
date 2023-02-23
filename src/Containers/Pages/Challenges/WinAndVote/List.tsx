import React, { useState } from 'react'
import Masonry from 'react-masonry-css'

import filter from 'lodash/filter'
import find from 'lodash/find'
import get from 'lodash/get'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import take from 'lodash/take'

import { noChallenges } from 'Assets/images/challenges'

import ListItem from 'Containers/Pages/Challenges/WinAndVote/ListItem'

import Loader from 'Components/UI/Loader'

import { useAppSelector } from 'Hooks/useStore'

import _ from 'Services/I18n'

import { ListContent, ListWrapper, LoadMore } from './styles'

type Props = {
  searchQuery: string
  sorting: string
  onOpenModal: (id: number) => void
  posts: []
  isLoading: boolean
}

const List: React.FC<Props> = ({
  searchQuery,
  sorting = 'latest',
  onOpenModal,
  posts,
  isLoading = false,
}) => {
  const { me, isLoggedIn } = useAppSelector(state => state.me)

  const [loadMoreCount, setLoadMoreCount] = useState(12)

  const handleLoadMore = () => {
    setLoadMoreCount(prevState => prevState + 10)
  }

  const renderChallenges = (type: string) => {
    let challenges: any = [...posts]

    if (searchQuery.length > 0) {
      challenges = filter(challenges, (challenge: any) =>
        includes(lowerCase(challenge.title), lowerCase(searchQuery)),
      )
    }

    if (type === 'popular') {
      challenges = sortBy(
        challenges,
        (challenge: any) => challenge.likes_count,
      ).reverse()
    }

    challenges = map(take(challenges, loadMoreCount), (item: any) => ({
      ...item,
      isLiked: find(item.likes, like => like.user_id === me?.id) !== undefined,
      comments: map(item.comments, comment => ({
        ...comment,
        isLiked:
          find(comment.likes, like => like.user_id === me?.id) !== undefined,
      })),
    }))

    return map(challenges, (challenge: any) => {
      const comments = get(challenge, 'comments', [])

      return (
        <ListItem
          comments={comments}
          commentsCount={challenge.comments_count}
          created={challenge.created_at}
          description={challenge.content}
          id={challenge.id}
          isLiked={challenge.is_liked}
          isLoggedIn={isLoggedIn}
          key={challenge.id}
          likesCount={challenge.likes_count}
          previewUrl={challenge.image}
          title={challenge.title}
          username={challenge.author_name}
          video={challenge.video}
          onLike={() => null}
          onOpen={onOpenModal}
        />
      )
    })
  }

  const isTwoPosts = [...posts].length === 2

  return (
    <ListWrapper>
      <ListContent>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {posts.length > 0 ? (
              <>
                <Masonry
                  breakpointCols={3} // default ''
                  className={
                    isTwoPosts
                      ? 'my-gallery-class with-2-posts'
                      : 'my-gallery-class'
                  }
                  columnClassName="my-masonry-grid_column"
                >
                  {renderChallenges(sorting)}
                </Masonry>
                {posts.length > loadMoreCount && (
                  <LoadMore onClick={handleLoadMore}>
                    {_('buttons.loadMore')}
                  </LoadMore>
                )}
              </>
            ) : (
              <img
                alt=""
                src={noChallenges.src}
                style={{ width: '644px', height: '460px', margin: '0 auto' }}
              />
            )}
          </>
        )}
      </ListContent>
    </ListWrapper>
  )
}

export default List
