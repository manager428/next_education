import React from 'react'
import PropTypes from 'prop-types'

import InnerHtml from 'dangerously-set-html-content'

import { Flex } from 'Components/UI'

import { ContentBar } from 'Components/Blocks/Entities/Moderator/Tables/UserCommentsTable/styles'

const ContentCell = ({ value }) => (
  <Flex flexWrap="wrap" width={1}>
    <ContentBar>
      <InnerHtml html={value} />
    </ContentBar>
  </Flex>
)

ContentCell.propTypes = {
  value: PropTypes.string.isRequired,
}
export default ContentCell
