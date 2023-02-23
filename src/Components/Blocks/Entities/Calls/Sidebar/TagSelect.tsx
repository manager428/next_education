import React, { useCallback, useEffect, useState } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'
import uniq from 'lodash/uniq'

import { Flex } from 'Components/UI'
import Checkbox from 'Components/UI/Checkbox'

import {
  LabelText,
  ResetButton,
  SidebarTitle,
  Tag,
  TagCounter,
} from 'Components/Blocks/Entities/Calls/Sidebar/styles'

import { GROUP_CALL_TAGS } from 'Constants/calls'

const TAGS = uniq(['Expert Hours', 'Virtual Tours', ...GROUP_CALL_TAGS])

type Props = {
  values: typeof TAGS
  onSelect: (values: string[]) => void
}

const TagSelect: React.FC<Props> = ({ values, onSelect }) => {
  const [isSelectedAll, setSelectedAll] = useState(false)

  useEffect(() => {
    if (values.length === TAGS.length) {
      setSelectedAll(true)
    }
  }, [values])

  const handleSelectTag = (tag: string): void => {
    const updated = includes(values, tag)
      ? filter(values, oldTag => oldTag !== tag)
      : [...values, tag]

    onSelect(updated)
  }

  const handleReset = useCallback(() => {
    onSelect([])
    setSelectedAll(false)
  }, [])

  const handleSelectAll = useCallback(
    e => {
      e.preventDefault()

      if (isSelectedAll) {
        setSelectedAll(false)
        onSelect([])
      } else {
        setSelectedAll(true)
        onSelect(TAGS)
      }
    },
    [isSelectedAll],
  )

  const renderTags = useCallback(
    () =>
      map(TAGS, tag => (
        <Tag
          key={tag}
          selected={includes(values, tag)}
          onClick={() => handleSelectTag(tag)}
        >
          #{tag}
        </Tag>
      )),
    [values],
  )

  return (
    <Flex flexWrap="wrap" width={1}>
      <SidebarTitle mb={20}>
        Search events by <span>tags</span>
      </SidebarTitle>

      <Flex justifyContent="space-between" width={1}>
        <Flex alignItems="center" onClick={handleSelectAll}>
          <Checkbox
            checked={isSelectedAll}
            color="#CAD2E3"
            id="tag-select"
            withLabel
            onChange={() => null}
          >
            <LabelText>Select all</LabelText>
          </Checkbox>
        </Flex>
        <Flex mr="15px">
          <ResetButton onClick={handleReset}>Reset all Tags</ResetButton>
        </Flex>
      </Flex>

      {values.length > 0 && (
        <Flex mt={20}>
          <TagCounter>{values.length} Tags Selected</TagCounter>
        </Flex>
      )}

      <Flex flexWrap="wrap" mt={20} width={1}>
        {renderTags()}
      </Flex>
    </Flex>
  )
}

export default TagSelect
