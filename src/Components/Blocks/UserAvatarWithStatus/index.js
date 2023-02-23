import React from 'react'
import PT from 'prop-types'

import { Avatar } from './styles'

const UserAvatarWithStatus = ({ width, height, status, image }) => (
  <Avatar height={height} online={status} width={width}>
    <img alt="" src={image} />
    <div className="status" />
  </Avatar>
)

UserAvatarWithStatus.defaultProps = {
  width: 72,
  height: 72,
  status: false,
}

UserAvatarWithStatus.propTypes = {
  height: PT.number,
  image: PT.string.isRequired,
  status: PT.oneOfType([PT.bool, PT.string]),
  width: PT.number,
}

export default UserAvatarWithStatus
