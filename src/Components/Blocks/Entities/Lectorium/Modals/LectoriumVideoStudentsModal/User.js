import React from 'react'
import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import {
  Avatar,
  Name,
  UserWrapper,
} from 'Components/Blocks/Entities/Lectorium/Modals/LectoriumVideoStudentsModal/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

const User = ({ name, avatar, id }) => {
  const router = useRouter()

  const handleUserClick = () => {
    router.push(PRIVATE_PATHS.USER_PROFILE(id))
  }
  return (
    <UserWrapper onClick={handleUserClick}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </UserWrapper>
  )
}

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default User
