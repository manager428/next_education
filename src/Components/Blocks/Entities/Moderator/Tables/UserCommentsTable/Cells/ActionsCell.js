/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWithConfirmation, Flex } from 'Components/UI'

import { useTableContext } from '../context'
import { ActionButton, DeleteCommentIcon, EditCommentIcon } from '../styles'

function ActionsCell({ row }) {
  const { onModalOpen, onDeleteComment } = useTableContext()

  const entity = row?.original

  return (
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent="flex-start"
      width={1}
    >
      <ActionButton
        mr="10px"
        onClick={() => onModalOpen({ entity, type: 'commentModal' })}
      >
        <EditCommentIcon />
      </ActionButton>
      <Flex mr="10px">
        <ButtonWithConfirmation
          confirmationButtonText="DELETE"
          confirmationText="Are you sure you want to delete the comment?"
          icon={<DeleteCommentIcon />}
          title="CANCEL"
          type="icon"
          onSubmit={() =>
            onDeleteComment({
              section: entity.section,
              commentId: entity.comment_id,
              experienceType: entity?.experience_type,
            })
          }
        />
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
