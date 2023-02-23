import React, { useRef, useState } from 'react'

import { Flex } from 'Components/UI'

import {
  ActionButton,
  Container,
  DeleteIcon,
  EditIcon,
  MenuButton,
  MenuContainer,
} from 'Components/Blocks/Entities/Chat/CallChatMessageMenu/styles'

import useOutsideClick from 'Hooks/useOutsideClick'

type Props = {
  id: number
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const CallChatMessageMenu: React.FC<Props> = ({ id, onEdit, onDelete }) => {
  const ref = useRef(null)
  const [isOpen, setOpen] = useState<boolean>(false)

  useOutsideClick({ ref, onClick: () => setOpen(false) })

  const handleClick = (): void => {
    setOpen(true)
  }

  const handleEditClick = (): void => {
    onEdit(id)
  }

  const handleDeleteClick = (): void => {
    onDelete(id)
  }

  const renderMenu = (): React.ReactNode => (
    <MenuContainer ref={ref}>
      <ActionButton mb="12px" onClick={handleEditClick}>
        <EditIcon />
        Edit
      </ActionButton>
      <ActionButton onClick={handleDeleteClick}>
        <DeleteIcon />
        Delete
      </ActionButton>
    </MenuContainer>
  )

  return (
    <Container>
      <Flex onClick={handleClick}>
        <MenuButton />
      </Flex>

      {isOpen && renderMenu()}
    </Container>
  )
}

export default CallChatMessageMenu
