import React from 'react'

import { androidGlyph, appleGlyph } from 'Assets/svg/landing'

import { Icon } from 'Components/UI'

import { Wrap } from 'Components/Blocks/Entities/Profile/Content/WeeklyProgress/styles'
import {
  BlockTitle,
  ContentTitleText,
} from 'Components/Blocks/Entities/Profile/styles'

const NoProgress = () => (
  <Wrap>
    <BlockTitle>
      <ContentTitleText>Progress in App</ContentTitleText>
    </BlockTitle>
    <div className="no-progress-info">
      Install the iDialogue App on your smartphone to chat with your friends
      more often and improve your English Skills faster. Afrer installing the
      App your learning progress will appear here!
    </div>
    <div className="download-title">Download for</div>
    <div className="buttons-wrap">
      <a
        href="https://play.google.com/store/apps/details?id=com.idialogue.chat"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="button">
          <Icon icon={androidGlyph} size={22} />
          Android
        </div>
      </a>
      <a
        href="https://apps.apple.com/ua/app/idialogue/id1493777821"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="button">
          <Icon icon={appleGlyph} size={20} />
          IOS
        </div>
      </a>
    </div>
  </Wrap>
)

export default NoProgress
