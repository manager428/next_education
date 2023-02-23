import React from 'react'

import { noUserPosts } from 'Assets/images/common'

import { DummyPostItemWrap } from 'Components/Blocks/Entities/Profile/Content/Posts/styles'

const DummyPostItem = () => (
  <DummyPostItemWrap>
    <div className="title">Your post could be here!</div>
    <div className="img-wrap">
      <img alt="" src={noUserPosts.src} />
    </div>
    <div className="info">
      Take a look at the community section and tell everyone something
      interesting!
    </div>
    <div className="info">
      You can do as many interesting posts as you want and get rewards for them!
    </div>
  </DummyPostItemWrap>
)

export default DummyPostItem
