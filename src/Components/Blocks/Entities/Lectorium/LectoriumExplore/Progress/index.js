import React from 'react'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { lectoriumCheckGlyph } from 'Assets/svg/lectorium'

import { Icon } from 'Components/UI'

import {
  Container,
  Content,
  Description,
  Dot,
  Name,
  ProgressLine,
  Status,
  StatusContainer,
  Step,
  StepsList,
  Title,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/Progress/styles'

import { ACTIVITY_TYPES, POST_PROGRESS_TYPES } from 'Constants/lectorium'

import { useScopedI18n } from 'Services/I18n'

const Progress = ({
  videoDuration,
  readingDuration,
  quizDuration,
  newWordsDuration,
  progress,
  activity,
}) => {
  const s = useScopedI18n('lectorium.view')
  return (
    <Container>
      <Title>{s('taskDescription')}</Title>
      <StepsList>
        <Step>
          <StatusContainer>
            <Status>
              {get(progress, [POST_PROGRESS_TYPES.VIDEO]) === 'active' && (
                <Icon height={18} icon={lectoriumCheckGlyph} width={18} />
              )}
            </Status>

            <ProgressLine />
          </StatusContainer>
          <Content>
            <Name>
              {s('video')} <Dot /> {videoDuration}
            </Name>
            <Description>{s('videoDescription')}</Description>
          </Content>
        </Step>
        <Step>
          <StatusContainer>
            <Status>
              {get(progress, [POST_PROGRESS_TYPES.READING]) === 'active' && (
                <Icon height={18} icon={lectoriumCheckGlyph} size={18} />
              )}
            </Status>
            <ProgressLine />
          </StatusContainer>
          <Content>
            <Name>
              {s('reading')} <Dot /> {readingDuration}
            </Name>
            <Description>{s('readingDescription')}</Description>
          </Content>
        </Step>
        {activity === ACTIVITY_TYPES.quiz && (
          <Step>
            <StatusContainer>
              <Status>
                {get(progress, [POST_PROGRESS_TYPES.QUIZ]) === 'active' && (
                  <Icon height={18} icon={lectoriumCheckGlyph} width={18} />
                )}
              </Status>
              <ProgressLine />
            </StatusContainer>
            <Content>
              <Name>
                {s('quiz')} <Dot /> {quizDuration}
              </Name>
              <Description>{s('quizDescription')}</Description>
            </Content>
          </Step>
        )}
        {activity === ACTIVITY_TYPES.newWords && (
          <Step>
            <StatusContainer>
              <Status>
                {get(progress, [POST_PROGRESS_TYPES.WORDS]) === 'active' && (
                  <Icon height={18} icon={lectoriumCheckGlyph} width={18} />
                )}
              </Status>
              <ProgressLine />
            </StatusContainer>
            <Content>
              <Name>
                Learn New Words <Dot /> {newWordsDuration}
              </Name>
              <Description>
                Take a short test to improve your knowledge
              </Description>
            </Content>
          </Step>
        )}
        <Step>
          <StatusContainer>
            <Status>
              {get(progress, [POST_PROGRESS_TYPES.SHARE_EXPERIENCE]) ===
                'active' && (
                <Icon height={18} icon={lectoriumCheckGlyph} width={18} />
              )}
            </Status>
          </StatusContainer>
          <Content>
            <Name>{s('share')}</Name>
            <Description>{s('shareDescription')}</Description>
          </Content>
        </Step>
      </StepsList>
    </Container>
  )
}

Progress.defaultProps = {
  activity: '',
  quizDuration: '',
  newWordsDuration: '',
}

Progress.propTypes = {
  activity: PropTypes.string,
  newWordsDuration: PropTypes.string,
  progress: PropTypes.object.isRequired,
  quizDuration: PropTypes.string,
  readingDuration: PropTypes.string.isRequired,
  videoDuration: PropTypes.string.isRequired,
}
export default Progress
