/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWithConfirmation, Flex } from 'Components/UI'

import { useTableContext } from '../context'
import {
  ActionButton,
  BanIcon,
  BlockIcon,
  Text,
  UnblockUserIcon,
  WarningIcon,
} from '../styles'

function ActionsCell({ row }) {
  const { onModalOpen, onRemoveFromBan } = useTableContext()

  const entity = row?.original

  return (
    <Flex alignItems="center" flexWrap="wrap" justifyContent="center" width={1}>
      <ActionButton
        onClick={() =>
          onModalOpen({
            entity: {
              ...entity,
              full_name: entity?.user_data?.full_name,
            },
            type: 'warningModal',
          })
        }
      >
        <WarningIcon />
      </ActionButton>

      <ActionButton
        onClick={() =>
          onModalOpen({
            entity: {
              ...entity,
              avatar: entity?.user_data?.avatar,
              full_name: entity?.user_data?.full_name,
            },
            type: 'banModal',
          })
        }
      >
        <BanIcon active={entity?.user_data.is_banned} />
      </ActionButton>

      <ActionButton
        onClick={() =>
          onModalOpen({
            entity: {
              ...entity,
              avatar: entity?.user_data?.avatar,
              full_name: entity?.user_data?.full_name,
            },
            type: 'blockModal',
          })
        }
      >
        <BlockIcon active={entity?.user_data.is_blocked} />
      </ActionButton>

      <Flex justifyContent="flex-start" mr="10px" mt="5px" pl={16} width={1}>
        <ButtonWithConfirmation
          confirmationButtonText="Remove"
          confirmationText="Are you sure you want to remove from block or ban?"
          icon={<UnblockUserIcon />}
          title="CANCEL"
          type="icon"
          onSubmit={() => onRemoveFromBan(entity.user_id)}
        />
      </Flex>

      <Flex justifyContent="center" mt="6px" width={1}>
        <Text fontSize="12px" textAlign="center" width={1}>
          Actions with the complained user
        </Text>
      </Flex>
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
