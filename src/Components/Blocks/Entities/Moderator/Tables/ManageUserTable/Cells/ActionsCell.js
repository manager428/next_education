/* eslint-disable camelcase */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'Components/UI'

import { useTableContext } from '../context'
import { TableActionButton } from '../styles'

function ActionsCell({ row }) {
  const { onModalOpen, onRemoveFromBanOrBlock } = useTableContext()

  const original = row?.original

  const isBanned = original.is_banned
  const isBlocked = original.is_blocked

  const handleBan = useCallback(() => {
    onModalOpen({
      entity: { ...original, user_id: original.id },
      type: 'banModal',
    })
  }, [original])

  const handleBlock = useCallback(() => {
    onModalOpen({
      entity: { ...original, user_id: original.id },
      type: 'blockModal',
    })
  }, [original])

  return (
    <Flex alignItems="center" flexWrap="wrap" justifyContent="center" width={1}>
      {!isBanned ? (
        <TableActionButton onClick={handleBan}>Ban</TableActionButton>
      ) : (
        <TableActionButton
          active={isBanned}
          onClick={() => onRemoveFromBanOrBlock(original.id)}
        >
          Unban
        </TableActionButton>
      )}

      {!isBlocked ? (
        <TableActionButton mt="8px" onClick={handleBlock}>
          Block
        </TableActionButton>
      ) : (
        <TableActionButton
          active={isBlocked}
          mt="8px"
          onClick={() => onRemoveFromBanOrBlock(original.id)}
        >
          Unblock
        </TableActionButton>
      )}
    </Flex>
  )
}

ActionsCell.defaultProps = {
  row: {},
}

ActionsCell.propTypes = {
  row: PropTypes.object,
}

export default ActionsCell
