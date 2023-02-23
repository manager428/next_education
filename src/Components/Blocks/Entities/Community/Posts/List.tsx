import React, { useCallback, useState } from 'react'
import Masonry from 'react-masonry-css'

import map from 'lodash/map'

import { Loader } from 'Components/UI'

import {
  Content,
  ListWrapper,
} from 'Components/Blocks/Entities/Community/Posts/styles'
import PostItem from 'Components/Blocks/List/ListPost'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import { ADD_COMMENT_MODAL_TYPES } from 'Constants/ids'

import useRole from 'Hooks/useRole'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

// TODO: add type for Post
type Props = {
  posts: any[]
  isLoading: boolean
}

// TODO add onLike, onCommentLike handlers for POST

const List: React.FC<Props> = ({ posts, isLoading }) => {
  const { isLoggedIn = false } = useRole()
  const [modalState, setModalState] = useState({
    isOpen: false,
    entityId: 0,
  })

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      entityId: 0,
    })
  }

  const handleOpenModal = (id: number) => {
    setModalState({
      entityId: id,
      isOpen: true,
    })
  }

  const renderData = useCallback(
    () =>
      map(posts, post => (
        <PostItem
          isLogged={isLoggedIn}
          item={post}
          key={post.id}
          postType="community"
          showPopup={handleOpenModal}
        />
      )),
    [posts],
  )

  return (
    <ListWrapper>
      <Content>
        {modalState?.entityId !== 0 && (
          <AddCommentModal
            postId={modalState?.entityId}
            postType={ADD_COMMENT_MODAL_TYPES.COMMUNITY}
            section={COMPLAINT_SECTIONS.COMMUNITY}
            onClose={handleCloseModal}
          />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <Masonry
            breakpointCols={3} // default ''
            className="my-gallery-class"
            columnClassName="my-masonry-grid_column"
          >
            {renderData()}
          </Masonry>
        )}
      </Content>
    </ListWrapper>
  )
}

export default List
