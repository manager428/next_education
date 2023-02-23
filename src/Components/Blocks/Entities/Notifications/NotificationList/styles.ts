import styled from 'styled-components'

import { deleteIconGlyph } from 'Assets/svg/common'
import {
  notificationAnnouncementGlyph,
  notificationAttentionGlyph,
  notificationBadgeGlyph,
  notificationBlogGlyph,
  notificationCallGlyph,
  notificationChallengeGlyph,
  notificationCommentedGlyph,
  notificationCommunityGlyph,
  notificationDebateGlyph,
  notificationGeneralGlyph,
  notificationLectoriumGlyph,
  notificationLikedGlyph,
  notificationTeacherCommunityGlyph,
} from 'Assets/svg/notifications'

import { Flex, Icon } from 'Components/UI'

export const ListContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const ListDate = styled(Flex)`
  color: #bdbdbd;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 20px;
`

export const NotificationsContainer = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const NotificationCardContainer = styled(Flex)`
  width: 100%;
  border: 2px solid #d3dae8;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 16px 14px 60px;
  position: relative;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

export const NotificationCallIcon = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationCallGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationDebateIcon = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationDebateGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationBadgeIcon = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationBadgeGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationBlogIcon = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationBlogGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationGeneralIcon = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationGeneralGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationTeacherCommunityIcon = styled(Icon).attrs<{
  isNew?: boolean
}>(props => ({
  icon: notificationTeacherCommunityGlyph,
  size: 32,
  fill: props.isNew ? '#49CEB1' : '#D3DAE8',
}))<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationCommentedIcon = styled(Icon).attrs<{
  isNew?: boolean
}>(props => ({
  icon: notificationCommentedGlyph,
  size: 32,
  fill: props.isNew ? '#49CEB1' : '#D3DAE8',
}))<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationLikedIcon = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationLikedGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationAttentionIcon = styled(Icon).attrs<{
  isNew?: boolean
}>(props => ({
  icon: notificationAttentionGlyph,
  size: 32,
  fill: props.isNew ? '#49CEB1' : '#D3DAE8',
}))<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationAnnouncement = styled(Icon).attrs<{ isNew?: boolean }>(
  props => ({
    icon: notificationAnnouncementGlyph,
    size: 32,
    fill: props.isNew ? '#49CEB1' : '#D3DAE8',
  }),
)<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationCommunityIcon = styled(Icon).attrs<{
  isNew?: boolean
}>(props => ({
  icon: notificationCommunityGlyph,
  size: 32,
  fill: props.isNew ? '#49CEB1' : '#D3DAE8',
}))<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationChallengeIcon = styled(Icon).attrs<{
  isNew?: boolean
}>(props => ({
  icon: notificationChallengeGlyph,
  size: 32,
  fill: props.isNew ? '#49CEB1' : '#D3DAE8',
}))<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationLectoroiumIcon = styled(Icon).attrs<{
  isNew?: boolean
}>(props => ({
  icon: notificationLectoriumGlyph,
  size: 32,
  fill: props.isNew ? '#49CEB1' : '#D3DAE8',
}))<any>`
  position: absolute;
  left: 14px;
  top: -10px;
`

export const NotificationCardHeader = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`

export const NotificationCardTitle = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #071d40;
  padding-bottom: 8px;
  border-bottom: 2px solid #d3dae8;
`

export const NotificationCardDate = styled(Flex)`
  color: #828282;
  font-size: 14px;
  line-height: 18px;
`

export const NotificationCardMessage = styled(Flex)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #071d40;
`

export const NotificationCardButton = styled(Flex).attrs({
  as: 'button',
})`
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 5px;
  color: #49ceb1;
  padding: 6px;
  box-shadow: none;
  background-color: white;
  cursor: pointer;

  a {
    color: #49ceb1;
  }
`

export const NotificationDeleteButton = styled(Icon).attrs({
  icon: deleteIconGlyph,
  fill: '#828282',
  size: 14,
})`
  cursor: pointer;
`
