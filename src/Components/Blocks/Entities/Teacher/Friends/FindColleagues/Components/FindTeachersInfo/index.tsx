import React from 'react'

import { addingTeachersGlyph } from 'Assets/svg/teachers'

import { Element, Icon } from 'Components/UI'

import { Container } from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/Components/FindTeachersInfo/styles'

const FindTeachersInfo: React.FC = () => (
  <Container alignItems="center" width={528}>
    <Icon height={120} icon={addingTeachersGlyph} width={246} />
    <Element fontSize="16px" lineHeight="22px" ml={32}>
      You can find colleagues by starting typing their name or nickname in the
      search box above
    </Element>
  </Container>
)

export default FindTeachersInfo
