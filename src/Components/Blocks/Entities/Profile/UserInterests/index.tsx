import React, { useState } from 'react'

import shortId from 'shortid'

import map from 'lodash/map'

import {
  BlockTitle,
  BlockTitleText,
  BlockTitleViewAllText,
  EditIcon,
} from 'Components/Blocks/Entities/Profile/styles'

import _, { useScopedI18n } from 'Services/I18n'

import { InterestItem, InterestsWrap, Wrap } from './styles'

type Props = {
  basicInterests: string
  isOwnProfile: boolean
  onEditClick: (type: string) => void
}

const UserInterests: React.FC<Props> = ({
  basicInterests,
  onEditClick,
  isOwnProfile,
}) => {
  const s = useScopedI18n('profile.sidebar')
  const interests = basicInterests.length > 0 ? basicInterests.split(',') : []
  const [isShowAll, setIsShowAll] = useState(false)

  return (
    <Wrap>
      <BlockTitle>
        <BlockTitleText>
          {s('interests')}
          {isOwnProfile && (
            <span
              className="edit-block"
              role="button"
              tabIndex={0}
              onClick={() => onEditClick('interests')}
              onKeyDown={() => onEditClick('interests')}
            >
              <EditIcon />
              {_('general.edit')}
            </span>
          )}
        </BlockTitleText>
        {!isShowAll && (
          <BlockTitleViewAllText onClick={() => setIsShowAll(true)}>
            {s('viewAll')}
          </BlockTitleViewAllText>
        )}
        {isShowAll && (
          <BlockTitleViewAllText onClick={() => setIsShowAll(false)}>
            {s('viewPartially')}
          </BlockTitleViewAllText>
        )}
      </BlockTitle>
      <InterestsWrap showAll={isShowAll}>
        {map(interests, interest => (
          <InterestItem key={shortId.generate()}>
            #{interest.trim()}
          </InterestItem>
        ))}
      </InterestsWrap>
    </Wrap>
  )
}

export default UserInterests
