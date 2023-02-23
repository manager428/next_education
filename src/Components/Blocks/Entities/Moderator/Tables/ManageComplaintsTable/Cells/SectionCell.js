import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import { SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

import { useTableContext } from '../context'
import { SectionButton, SectionName } from '../styles'

const SectionCell = ({ value, row }) => {
  const { onPostViewModalOpen } = useTableContext()

  const entityId = get(row, ['original', 'extra_data', 'entity_id'])
  const experienceType = get(row, ['original', 'extra_data', 'experience_type'])

  const handleClick = useCallback(() => {
    switch (value) {
      case 'Lectorium':
        if (
          experienceType === SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS ||
          experienceType === SHARE_EXPERIENCE_TYPES.STUDENT_POSTS
        ) {
          onPostViewModalOpen({
            entityId,
            experienceType,
            section: 'lectorium',
          })
        }
        if (experienceType === SHARE_EXPERIENCE_TYPES.COMMENTS) {
          window.open(PUBLIC_PATHS.LECTORIUM_EXPLORE(entityId))
        }

        break
      case 'Challenges':
        onPostViewModalOpen({ entityId, experienceType, section: 'challenge' })
        break
      case 'Blog':
        window.open(PUBLIC_PATHS.BLOG_POST(entityId))
        break
      case 'Community':
        onPostViewModalOpen({ entityId, experienceType, section: 'community' })
        break
      case 'Debates':
        window.open(PUBLIC_PATHS.DEBATE(entityId))
        break

      default:
        break
    }
  }, [value])

  return (
    <Flex flexWrap="wrap">
      <Flex flexWrap="wrap" justifyContent="center" width={1}>
        <SectionName>{value}</SectionName>
        <SectionButton mt="12px" width={100} onClick={handleClick}>
          Go To Post
        </SectionButton>
      </Flex>
    </Flex>
  )
}

SectionCell.propTypes = {
  row: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
}

export default SectionCell
