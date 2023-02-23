import React from 'react'

import Image from 'next/image'

import { noUserPosts } from 'Assets/images/common'

import { useScopedI18n } from 'Services/I18n'

import { PostsWrap } from './styles'

const NoPosts = () => {
  const s = useScopedI18n('profile.content.postsAndChallenges')

  return (
    <PostsWrap>
      <div className="left-side">
        <div className="blue-title">{s('postsCouldBeHere')}</div>
        <div className="info">{s('takeALook')}</div>
        <div className="info">{s('youCanDo')}</div>
      </div>
      <div className="right-side">
        <Image alt="" src={noUserPosts} />
      </div>
    </PostsWrap>
  )
}

export default NoPosts
