import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import PropTypes from 'prop-types'

import { copyGlyph } from 'Assets/svg/common'
import {
  shareFacebookGlyph,
  shareLinkedinGlyph,
  shareTwitterGlyph,
} from 'Assets/svg/share'

import { Icon, Input } from 'Components/UI'

import _ from 'Services/I18n'

import { copyToClipboard } from 'Utils/common'

import {
  ButtonsContainer,
  CloseButton,
  Content,
  CopyButton,
  CopyField,
  Modal,
  ShareButton,
  Title,
} from './styles'

const ShareModal = ({ title, isOpen, onClose }) => {
  const pageUrl = window?.location

  const handleCopyClick = () => {
    copyToClipboard(pageUrl)
  }

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content>
        <CloseButton onClick={onClose} />

        <Title width={1}>{_('general.share')}</Title>

        <ButtonsContainer mt={20}>
          <ShareButton mr={40}>
            <FacebookShareButton url={pageUrl}>
              <Icon icon={shareFacebookGlyph} mb="5px" size={64} />
              Facebook
            </FacebookShareButton>
          </ShareButton>

          <ShareButton mr={40}>
            <TwitterShareButton url={pageUrl}>
              <Icon icon={shareTwitterGlyph} mb="5px" size={64} />
              Twitter
            </TwitterShareButton>
          </ShareButton>

          <ShareButton>
            <LinkedinShareButton
              source={pageUrl}
              summary={title}
              title={title}
              url={pageUrl}
            >
              <Icon icon={shareLinkedinGlyph} mb="5px" size={64} />
              LinkedIn
            </LinkedinShareButton>
          </ShareButton>
        </ButtonsContainer>
        <CopyField mt={30}>
          <Input disabled name="share-code" value={pageUrl} />
          <CopyButton ml={20} onClick={handleCopyClick}>
            <Icon
              fill="white"
              icon={copyGlyph}
              size={14}
              wrapperStyles={{ mr: 10 }}
            />
            {_('buttons.copy')}
          </CopyButton>
        </CopyField>
      </Content>
    </Modal>
  )
}

ShareModal.defaultProps = {
  title: null,
}

ShareModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default ShareModal
