import React from 'react'

import { downloadGlyph } from 'Assets/svg/calls'

import { Flex, Icon, Link } from 'Components/UI'

import {
  InfoBlock,
  InfoCounter,
} from 'Components/Blocks/Entities/Profile/Content/DigitalPassport/styles'

import { STUDENT_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

const InfoBar = ({
  userId,
  countriesCount,
  travelsCount,
  isShowDownload,
}: {
  userId: number
  countriesCount: number
  travelsCount: number
  isShowDownload: boolean
}) => {
  const s = useScopedI18n('digitalPassport')
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" width={1}>
      <Flex>
        <InfoBlock minWidth="220px">
          {s('visitedCountries')}: <InfoCounter>{countriesCount}</InfoCounter>
        </InfoBlock>
        <InfoBlock minWidth="220px" ml="20px">
          {s('numberOfTravels')}: <InfoCounter>{travelsCount}</InfoCounter>
        </InfoBlock>
      </Flex>

      {isShowDownload && (
        <Flex>
          <Link
            green
            href={STUDENT_PATHS.DIGITAL_PASSPORT(userId)}
            minWidth="40px"
          >
            <Icon fill="white" icon={downloadGlyph} size={15} />
          </Link>
        </Flex>
      )}
    </Flex>
  )
}

export default InfoBar
