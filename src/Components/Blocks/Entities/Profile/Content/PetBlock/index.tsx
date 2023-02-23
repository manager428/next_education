import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { Line } from 'rc-progress'

import get from 'lodash/get'

import { bigGreenRobot } from 'Assets/images/common'

import {
  LeftPart,
  RightPart,
  Wrap,
} from 'Components/Blocks/Entities/Profile/Content/PetBlock/styles'
import { Props } from 'Components/Blocks/Entities/Profile/Content/PetBlock/types'

import { useScopedI18n } from 'Services/I18n'

import { getCharacterSource } from 'Utils/character'

const PetBlock: React.FC<Props> = ({ character }) => {
  const [level, setLevel] = useState(0)
  const s = useScopedI18n('profile.content.petBlock')

  const petName = get(character, 'name', '')
  const age = get(character, 'age', 0)
  const characterImage = getCharacterSource(character)
  const activities = get(character, 'activities', 0)
  const activitiesNextLevel = get(character, 'activities_next_level', 0)

  useEffect(() => {
    setTimeout(() => {
      setLevel((activities * 100) / activitiesNextLevel)
    }, 1000)
  })

  const renderUserPet = () => (
    <>
      <LeftPart>
        <div className="title">
          {s('hi')} {petName}
        </div>
        <div className="age">{s('age', { age })}</div>
        <div className="progress-block">
          <div className="progress-info">
            <span>{activities}</span>/ {activitiesNextLevel} {s('nextGrowth')}
          </div>
          <Line
            percent={level}
            strokeColor="#ffffff"
            strokeWidth={4}
            trailColor="#92E2D0"
            trailWidth={4}
          />
        </div>
        <div className="info">{s('older')}</div>
      </LeftPart>
      <RightPart>
        {characterImage !== null && (
          <Image alt="" height="200px" src={characterImage} width="200px" />
        )}
      </RightPart>
    </>
  )

  const renderDefaultPetBlock = () => (
    <>
      <LeftPart>
        <div className="default-block">
          <div className="title">{s('noPet')}</div>
          <div className="info">{s('install')}</div>
          <div className="info">{s('yourPetWillGrow')}</div>
        </div>
      </LeftPart>
      <RightPart>
        <Image height="200px" src={bigGreenRobot} width="200px" />
      </RightPart>
    </>
  )

  return (
    <Wrap>
      {Object.values(character).length > 0
        ? renderUserPet()
        : renderDefaultPetBlock()}
    </Wrap>
  )
}

export default PetBlock
