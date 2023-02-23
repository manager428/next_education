/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import InnerHtml from 'dangerously-set-html-content'

import { Flex } from 'Components/UI'

import { ContentBar } from 'Components/Blocks/Entities/Moderator/Tables/ManageComplaintsTable/styles'

const ContentCell = ({ value, type, row }) => (
  <Flex flexWrap="wrap" width={1}>
    <ContentBar>
      {type === 'reason' && row?.original?.complaint_reason && (
        <strong>{row?.original?.complaint_reason}</strong>
      )}
      <InnerHtml html={value} />
    </ContentBar>
  </Flex>
)

ContentCell.defaultProps = {
  type: null,
}

ContentCell.propTypes = {
  row: PropTypes.object.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
}
export default ContentCell
