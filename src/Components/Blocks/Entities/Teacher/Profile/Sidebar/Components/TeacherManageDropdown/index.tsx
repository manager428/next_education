import React, { useRef, useState } from 'react'

import {
  Container,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  RequestButton,
  Wrap,
} from 'Components/Blocks/Entities/Teacher/Profile/Sidebar/Components/TeacherManageDropdown/styles'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import { openDeleteTeacherModal } from 'Store/modals/slice'

type Props = {
  selectedUser: {
    userId: number
    avatar: string
    fullName: string
  }
}

const TeacherManageDropdown: React.FC<Props> = ({ selectedUser }) => {
  const ref = useRef(null)
  const dispatch = useAppDispatch()

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useOutsideClick({ ref, onClick: () => setIsMenuVisible(false) })

  const handleShowDeleteStudentModal = () => {
    const { userId, avatar, fullName } = selectedUser
    dispatch(
      openDeleteTeacherModal({
        userId,
        avatar,
        fullName,
      }),
    )
    setIsMenuVisible(false)
  }

  return (
    <Wrap width={1}>
      <Container ref={ref}>
        <RequestButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
          Manage the teacher
        </RequestButton>

        <MenuButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <MenuIcon />
        </MenuButton>

        {isMenuVisible && (
          <Menu>
            <MenuItem
              className="menu-item"
              type="button"
              onClick={handleShowDeleteStudentModal}
            >
              Delete Teacher
            </MenuItem>
          </Menu>
        )}
      </Container>
    </Wrap>
  )
}

export default TeacherManageDropdown
