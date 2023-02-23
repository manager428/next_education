import React, { useCallback, useState } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'
import take from 'lodash/take'

import { Flex } from 'Components/UI'

import { DISCUSSIONS_TAGS } from 'Constants/discussions'

import { entityToOptions } from 'Utils/common'

import { Container, Tag, ViewAllButton } from './styles'
import { TagsProps } from './types'

const TAGS_OPTIONS = [
  {
    label: 'LATEST',
    value: 'latest',
  },
  {
    label: 'POPULAR',
    value: 'popular',
  },
  ...entityToOptions(DISCUSSIONS_TAGS, { withHash: true, uppercase: true }),
]

const Tags: React.FC<TagsProps> = ({ onSortSelect, onTagSelect }) => {
  const [tags, setTags] = useState<string[]>([])
  const [sort, setSort] = useState('latest')

  const [isViewAll, setViewAll] = useState(false)

  const handleAddTag = useCallback(selected => {
    setTags(prevTags => {
      if (includes(prevTags, selected)) {
        const updatedTags = filter(prevTags, prevTag => prevTag !== selected)
        onTagSelect(updatedTags)

        return updatedTags
      }

      onTagSelect([...prevTags, selected])

      return [...prevTags, selected]
    })
  }, [])

  const handleSortChange = useCallback(value => {
    setSort(value)
    onSortSelect(value)
  }, [])

  const renderTags = useCallback(
    () =>
      map(take(TAGS_OPTIONS, isViewAll ? TAGS_OPTIONS.length : 10), option => {
        const isSortOptions =
          option.value === 'latest' || option.value === 'popular'

        return (
          <Tag
            active={
              isSortOptions
                ? sort === option.value
                : includes(tags, option.value)
            }
            key={option.value}
            onClick={() =>
              isSortOptions
                ? handleSortChange(option.value)
                : handleAddTag(option.value)
            }
          >
            {option.label}
          </Tag>
        )
      }),
    [isViewAll, tags, sort],
  )

  return (
    <Container>
      {renderTags()}

      {!isViewAll && (
        <Flex width={1}>
          <ViewAllButton onClick={() => setViewAll(true)}>
            View All Tags
          </ViewAllButton>
        </Flex>
      )}
    </Container>
  )
}

export default Tags
