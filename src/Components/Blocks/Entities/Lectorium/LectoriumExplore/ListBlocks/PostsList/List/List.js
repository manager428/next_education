import React, { PureComponent } from 'react'
import Masonry from 'react-masonry-css'
import PropTypes from 'prop-types'

import Image from 'next/image'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import take from 'lodash/take'

import { noPostsImage } from 'Assets/images/common'

import { Flex, Loader } from 'Components/UI'

import ListPost from 'Components/Blocks/List/ListPost'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import _ from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import { Content, ListWrapper, LoadMore } from './styles'

class List extends PureComponent {
  state = {
    isModalOpen: false,
    loadMoreCount: 12,
    selectedId: 0,
  }

  handleCloseModal = () => {
    // Need to have updated parent screen ( if liked added)
    const { onModalCallback } = this.props
    onModalCallback()

    this.setState({
      isModalOpen: false,
      selectedId: 0,
    })
  }

  showPostDetails = id => {
    this.setState({
      selectedId: id,
      isModalOpen: true,
    })
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      loadMoreCount: prevState.loadMoreCount + 10,
    }))
  }

  getPosts = sorting => {
    const { loadMoreCount } = this.state
    const { searchQuery, data } = this.props

    let posts = [...data]

    if (searchQuery.length > 0) {
      posts = filter(data, post =>
        includes(lowerCase(post.title), lowerCase(searchQuery)),
      )
    }

    if (sorting === 'popular') {
      posts = sortBy(posts, post => post.likes_count).reverse()
    }

    posts = take(posts, loadMoreCount)

    return posts
  }

  renderPosts = () => {
    const { sorting, isLogged, type } = this.props
    const posts = this.getPosts(sorting)

    return map(posts, post => (
      <ListPost
        isLogged={isLogged}
        item={post}
        key={post.id}
        postType={type}
        showPopup={this.showPostDetails}
      />
    ))
  }

  render() {
    const { isLoading, isLogged, sorting, lectoriumId, type, data } = this.props
    const { isModalOpen, loadMoreCount, selectedId } = this.state

    const posts = this.getPosts(sorting)

    return (
      <ListWrapper>
        <Content>
          {selectedId > 0 && isModalOpen && (
            <AddCommentModal
              experienceId={selectedId}
              experienceType={type}
              isLogged={isLogged}
              lectoriumId={lectoriumId}
              postId={selectedId}
              postType={type}
              section={COMPLAINT_SECTIONS.LECTORIUM}
              onClose={this.handleCloseModal}
            />
          )}

          {isLoading ? (
            <Loader />
          ) : (
            <>
              {posts.length === 0 ? (
                <Flex alignItems="flex-start" justifyContent="center" width={1}>
                  <Flex width={600}>
                    <Image
                      alt="no posts"
                      height={400}
                      src={noPostsImage}
                      unoptimized
                      width="600px"
                    />
                  </Flex>
                </Flex>
              ) : (
                <Masonry
                  breakpointCols={3} // default ''
                  className="my-gallery-class"
                  columnClassName="my-masonry-grid_column"
                >
                  {this.renderPosts()}
                </Masonry>
              )}

              {data.length > loadMoreCount && (
                <LoadMore onClick={this.handleLoadMore}>
                  {_('buttons.loadMore')}
                </LoadMore>
              )}
            </>
          )}
        </Content>
      </ListWrapper>
    )
  }
}

List.defaultProps = {
  sorting: 'latest',
  onModalCallback: () => null,
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  lectoriumId: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  sorting: PropTypes.string,
  type: PropTypes.string.isRequired,
  onModalCallback: PropTypes.func,
}

export default List
