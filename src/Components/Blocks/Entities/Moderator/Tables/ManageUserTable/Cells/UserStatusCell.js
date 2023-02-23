import React from 'react'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'

import { Flex } from 'Components/UI'

import { Text } from 'Components/Blocks/Entities/Moderator/Tables/ManageUserTable/styles'

const UserStatusCell = ({ value }) => {
  const bannedDate = DateTime.fromISO(value?.created_at).toFormat('dd.MM.yyyy')

  const blockedMessage = value?.status
    ? `${value.status || '-'} <br/> since ${bannedDate}`
    : 'Active'

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      pl="15px"
      pr="15px"
      textAlign="center"
      width={1}
    >
      <Text textAlign="center">
        <InnerHTML html={blockedMessage} />
      </Text>
    </Flex>
  )
}

UserStatusCell.defaultProps = {
  value: null,
}

UserStatusCell.propTypes = {
  value: PropTypes.object,
}
export default UserStatusCell
