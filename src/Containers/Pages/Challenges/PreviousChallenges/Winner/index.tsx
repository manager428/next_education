import React from 'react'

import get from 'lodash/get'

import { commentsGlyph, likeGlyph } from 'Assets/svg/common'

import Icon from 'Components/UI/Icon'

import { WinnerWrap } from './styles'

type Props = {
  winnerData: Record<string, any>
  type?: 'winner' | 'all'
  currentIndex?: number
  onOpen: (id: number) => void
}

const Winner: React.FC<Props> = ({
  winnerData,
  onOpen,
  type,
  currentIndex = -1,
}) => {
  const id = get(winnerData, 'id', 0)
  const image = get(winnerData, 'image', '')
  const name = get(winnerData, 'author_name', '')
  const title = get(winnerData, 'title', '')
  const likes = get(winnerData, 'likes_count', 0)
  const comments = get(winnerData, 'comments_count', 0)

  const getPlace = () => {
    switch (currentIndex) {
      case 0:
      case 3:
        return '1st Place'
      case 1:
      case 4:
        return '2nd Place'
      case 2:
      case 5:
        return '3d Place'
      default:
        return ''
    }
  }

  const handleItemClick = () => {
    onOpen(id)
  }

  const place = getPlace()

  return (
    <WinnerWrap className="winner-wrap" onClick={handleItemClick}>
      <div className="image-wrap">
        {image.length > 0 && <img alt="" src={image} />}
      </div>
      <div className="info">
        <div className="name">
          {type === 'winner' && place.length > 0 && (
            <span className="place">{place}&nbsp;</span>
          )}
          {name}
        </div>
        <div className="topic-name">
          <span className="topic">Topic:&nbsp;</span>
          {title}
        </div>
        <div className="likes-comments">
          <div className="likes">
            <Icon
              fill="#bdbdbd"
              height={14}
              icon={likeGlyph}
              width={16}
              wrapperStyles={{ mr: '5px' }}
            />
            {likes}
          </div>
          <div className="comments">
            <Icon
              fill="#bdbdbd"
              height={14}
              icon={commentsGlyph}
              width={14}
              wrapperStyles={{ mr: '5px' }}
            />
            {comments}
          </div>
        </div>
      </div>
    </WinnerWrap>
  )
}

export default Winner
