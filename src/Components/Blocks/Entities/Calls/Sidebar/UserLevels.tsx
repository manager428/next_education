import React, { useCallback } from 'react'

import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'

import { Flex } from 'Components/UI'
import Checkbox from 'Components/UI/Checkbox'

import {
  LabelText,
  SidebarDescription,
  SidebarTitle,
} from 'Components/Blocks/Entities/Calls/Sidebar/styles'

import { ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'

type Props = {
  values: string[]
  onSelect: (values: string[]) => void
}

const UserLevel: React.FC<Props> = ({ values, onSelect }) => {
  const handleSelectOption = useCallback(
    (e, option) => {
      e.preventDefault()
      const { value } = option
      const updated = includes(values, value)
        ? filter(values, oldOption => oldOption !== value)
        : [...values, value]

      onSelect(updated)
    },
    [values],
  )

  const renderOptions = useCallback(
    () =>
      map(ENGLISH_LEVEL_OPTIONS, option => (
        <Flex
          key={option.label}
          mb="14px"
          width={1}
          onClick={e => handleSelectOption(e, option)}
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Checkbox
            checked={includes(values, option.value)}
            color="#CAD2E3"
            id={option.label}
            withLabel
          >
            <LabelText>{option.label}</LabelText>
          </Checkbox>
        </Flex>
      )),
    [values],
  )

  return (
    <Flex flexWrap="wrap" width={1}>
      <SidebarTitle mb="14px">User Levels</SidebarTitle>
      <SidebarDescription mb="14px">
        Choose your students english level
      </SidebarDescription>

      <Flex flexWrap="wrap">{renderOptions()}</Flex>
    </Flex>
  )
}

export default UserLevel
