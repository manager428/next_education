import React, { ReactElement } from 'react'

import { pick } from '@styled-system/props'

import { Flex } from 'Components/UI'

import { Container, Title } from './styles'

const PublicProfileMessage = ({
  title,
  actionButton,
  ...rest
}: {
  title: string
  actionButton: ReactElement
  [rest: string]: any
}) => (
  <Container {...pick(rest)} width={1}>
    <Title>{title}</Title>
    <Flex justifyContent="center" width={1}>
      {actionButton}
    </Flex>
  </Container>
)

export default PublicProfileMessage
