import React from 'react'

import { Flex } from 'Components/UI'

import { AvatarDropdown } from './Components'
import { Container, Inner } from './styles'

const ManageHeader: React.FC = () => (
  <Container>
    <Inner>
      <Flex>
        <AvatarDropdown />
      </Flex>
    </Inner>
  </Container>
)

export default ManageHeader
