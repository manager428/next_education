import React from 'react'

import {
  Container,
  NotFoundImage,
  SubTitle,
  Title,
} from 'Components/Blocks/NotFoundBlock/styles'

const NotFoundBlock = () => (
  <Container>
    <Title>Ooops... Looks like you are lost</Title>
    <SubTitle>
      Unfortunately, the page you were looking for could not be found. It may be
      temporarily unavailable, moved, private or no longer exists.
    </SubTitle>
    <NotFoundImage />
  </Container>
)

export default NotFoundBlock
