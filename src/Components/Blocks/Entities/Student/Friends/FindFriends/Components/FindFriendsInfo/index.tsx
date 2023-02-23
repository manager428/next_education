import React from 'react'

import { addingTeachersGlyph } from 'Assets/svg/teachers'

import { Element, Icon } from 'Components/UI'

import { useScopedI18n } from 'Services/I18n'

import { Container } from './styles'

const FindFriendsInfo: React.FC = () => {
  const s = useScopedI18n('friends')

  return (
    <Container alignItems="center" width={528}>
      <Icon height={120} icon={addingTeachersGlyph} width={246} />
      <Element fontSize="16px" lineHeight="22px" ml={32}>
        {s('findStudentFriends')}
      </Element>
    </Container>
  )
}

export default FindFriendsInfo
