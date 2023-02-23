import React, { useState } from 'react'

import truncate from 'lodash/truncate'

import {
  BlockTitle,
  BlockTitleText,
  EditIcon,
} from 'Components/Blocks/Entities/Profile/styles'

import _, { useScopedI18n } from 'Services/I18n'

import { BioText, ReadMore, Wrap } from './styles'

type Props = {
  bio: string
  onEditClick: (type: string) => void
  isOwnProfile: boolean
}

const truncateLength = 110

const UserBio: React.FC<Props> = ({ bio, onEditClick, isOwnProfile }) => {
  const s = useScopedI18n('profile.sidebar')
  const [isTruncated, setIsTruncated] = useState(true)

  return (
    <Wrap>
      <BlockTitle>
        <BlockTitleText>
          {s('about')}
          {isOwnProfile && (
            <span
              className="edit-block"
              role="button"
              tabIndex={0}
              onClick={() => onEditClick('bio')}
              onKeyDown={() => onEditClick('bio')}
            >
              <EditIcon />
              {_('general.edit')}
            </span>
          )}
        </BlockTitleText>
      </BlockTitle>
      <BioText>
        {isTruncated ? truncate(bio, { length: truncateLength }) : bio}
      </BioText>
      {bio.length > truncateLength && isTruncated && (
        <ReadMore onClick={() => setIsTruncated(false)}>
          {_('buttons.readMore')}
        </ReadMore>
      )}
      {bio.length > truncateLength && !isTruncated && (
        <ReadMore onClick={() => setIsTruncated(true)}>Read less</ReadMore>
      )}
    </Wrap>
  )
}

export default UserBio
