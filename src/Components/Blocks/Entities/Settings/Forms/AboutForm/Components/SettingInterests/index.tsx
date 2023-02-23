import React, { useState } from 'react'

import shortId from 'shortid'

import map from 'lodash/map'
import without from 'lodash/without'

import {
  Container,
  Inner,
  InterestItem,
  Label,
} from 'Components/Blocks/Entities/Settings/Forms/AboutForm/Components/SettingInterests/styles'

import { INTERESTS } from 'Constants/common'

import { useScopedI18n } from 'Services/I18n'

type Props = {
  userInterests: string[]
  onSelect: (interests: string[]) => void
}

const SettingInterests: React.FC<Props> = ({ userInterests, onSelect }) => {
  const s = useScopedI18n('settings')
  const [selectedInterests, setSelectedInterests] = useState(userInterests)

  const handleSelect = interest => {
    const updatedInterest = selectedInterests.includes(interest)
      ? without(selectedInterests, interest, '')
      : without([...selectedInterests, interest], '')

    setSelectedInterests(updatedInterest)

    onSelect(updatedInterest)
  }

  return (
    <Container flexWrap="wrap" width={1}>
      <Label>{s('fields.chooseInterestsLabel')}</Label>
      <Inner>
        {map(INTERESTS, interest => (
          <InterestItem
            key={shortId.generate()}
            selected={selectedInterests.includes(interest)}
            onClick={() => handleSelect(interest)}
          >
            #{interest}
          </InterestItem>
        ))}
      </Inner>
    </Container>
  )
}

export default SettingInterests
