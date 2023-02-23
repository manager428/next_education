import styled from 'styled-components'

import { addStudentGlyph } from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
`

export const AddStudentIcon = styled(Icon).attrs({
  icon: addStudentGlyph,
  size: 24,
})`
  margin-top: 2px;
  cursor: pointer;
`

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`

export const UsersContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  cursor: pointer;
`
