import times from 'lodash/times'

export enum CALL_ENUM {
  ALL = 'all',
  GROUP_CALLS = 'group',
  INDIVIDUAL_CALLS = 'individual',
  CLASS_CALLS = 'class',
  FIELD_TRIPS = 'field_trips',
}

export enum CALL_USER_STATUS_ENUM {
  pending = 'new',
  accepted = 'accepted',
  declined = 'declined',
}

export enum CALL_STATUS {
  ALL = 'all',
  SEARCH = 'search',
  SCHEDULED = 'scheduled',
  FINISHED = 'finished',
}

export const CALL_TABS = [
  {
    label: 'View All',
    value: CALL_ENUM.ALL,
  },
  {
    label: 'Group Calls',
    value: CALL_ENUM.GROUP_CALLS,
  },
  {
    label: 'Your Scheduled Calls',
    value: 'scheduled',
  },
  {
    label: 'Field Trips',
    value: CALL_ENUM.FIELD_TRIPS,
  },
]

export const GROUP_CALLS_OPTIONS = [
  {
    label: 'ALL CALLS',
    value: CALL_ENUM.ALL,
  },
  {
    label: 'GROUP CALLS',
    value: CALL_ENUM.GROUP_CALLS,
  },
  {
    label: 'INDIVIDUAL CALLS',
    value: CALL_ENUM.INDIVIDUAL_CALLS,
  },
  {
    label: 'CLASS CALLS',
    value: CALL_ENUM.CLASS_CALLS,
  },
]

export const TEACHER_NUMBER_OPTIONS = [
  ...times(9, index => {
    const teacherAmount = index + 2

    return {
      label: `${teacherAmount} teachers`,
      value: teacherAmount,
    }
  }),
  {
    label: 'Any number of teachers',
    value: 0,
  },
]

export const GROUP_CALL_TAGS = [
  'Animals',
  'Art & Design',
  'Collaborative projects',
  'Culture & Traditions',
  'Discussions',
  'ESL',
  'Environment',
  'Expert Hours',
  'Geography & Travel',
  'Health & Wellness',
  'History',
  'Music',
  'Professional Development',
  'Science & Nature',
  'Social & Emotional Learning',
  'Social studies',
  'Technology',
  'Virtual Tours',
]

export const ALLOWED_MINUTES_BEFORE_CALL = 1

export const JITSI_CONFIG_OVERWRITE = {
  startWithAudioMuted: true,
  startWithVideoMuted: true,
  enableWelcomePage: false,
  prejoinPageEnabled: true,
  desktopSharingFrameRate: {
    min: 30,
    max: 30,
  },
  disabledSounds: ['PARTICIPANT_JOINED_SOUND', 'PARTICIPANT_LEFT_SOUND'],
}

export const JITSI_INTERFACE_CONFIG_OVERWRITE = {
  interfaceConfigOverwrite: {
    DEFAULT_LOGO_URL: null,
    SHOW_POWERED_BY: false,
    SHOW_PROMOTIONAL_CLOSE_PAGE: false,
    SHOW_JITSI_WATERMARK: false,
    SHOW_CHROME_EXTENSION_BANNER: false,
    JITSI_WATERMARK_LINK: '#',
    SHOW_BRAND_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    HIDE_DEEP_LINKING_LOGO: true,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
    HIDE_INVITE_MORE_HEADER: true,
    DISABLE_FOCUS_INDICATOR: true,
    TOOLBAR_BUTTONS: [
      'microphone',
      'camera',
      'closedcaptions',
      'desktop',
      'fullscreen',
      'fodeviceselection',
      'hangup',
      'chat',
      'etherpad',
      'settings',
      'raisehand',
      'videoquality',
      'filmstrip',
      'shortcuts',
      'tileview',
      'mute-everyone',
      'security',
    ],
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  },
}
