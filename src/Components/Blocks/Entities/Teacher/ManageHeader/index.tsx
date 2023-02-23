import React from 'react'

import { Flex } from 'Components/UI'

import { useAppDispatch } from 'Hooks/useStore'

import { openAddClassModal, openAddStudentModal } from 'Store/modals/slice'

import { theme } from 'Theme'

import { AvatarDropdown } from './Components'
import { Button, Container, Inner } from './styles'

const ManageHeader: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <Container>
      <Inner>
        <Flex>
          <AvatarDropdown />
        </Flex>
        <Flex>
          <Button
            color={theme.colors.green}
            mr={20}
            width={110}
            onClick={() => dispatch(openAddStudentModal())}
          >
            + New Student
          </Button>
          <Button
            color={theme.colors.blueLight}
            onClick={() => dispatch(openAddClassModal())}
          >
            + New Classroom
          </Button>
        </Flex>
      </Inner>
    </Container>
  )
}

export default ManageHeader
