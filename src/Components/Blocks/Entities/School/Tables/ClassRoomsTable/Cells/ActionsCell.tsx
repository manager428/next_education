import React, { useCallback, useRef, useState } from 'react'

import { threeDotsGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import { openSchoolReassignClassToTeacherModal } from 'Store/modals/slice'

import { theme } from 'Theme'

import { List, ListButton, Option } from '../styles'

const ActionsCell: React.FC<{
  row: {
    original: {
      id: number
      class_name: string
    }
  }
}> = ({ row: { original } }) => {
  const ref = useRef()
  const dispatch = useAppDispatch()

  const [isShowDropdown, setShowDropdown] = useState(false)

  useOutsideClick({ ref, onClick: () => setShowDropdown(false) })

  const handleShowDropdown = useCallback(() => {
    setShowDropdown(prevState => !prevState)
  }, [])

  const handleReassign = () => {
    setShowDropdown(false)

    dispatch(
      openSchoolReassignClassToTeacherModal({
        classIds: [original.id],
        classroomName: original.class_name,
      }),
    )
  }

  return (
    <Flex
      alignItems="center"
      alignSelf="flex-stretch"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      ref={ref}
      width={1}
    >
      <Element as="button" mt="7px" onClick={handleShowDropdown}>
        <Icon
          fill={theme.colors.graySecondary}
          icon={threeDotsGlyph}
          size={28}
        />
      </Element>

      {isShowDropdown && (
        <List>
          <Option>
            <ListButton onClick={handleReassign}>Reassign Teacher</ListButton>
          </Option>
        </List>
      )}
    </Flex>
  )
}

export default ActionsCell
