export enum NOTIFICATION_SUBSRIBE_EVENTS {
  UNREAD_MESSAGE_NOTIFICATION = 'unreadMessageNotification',
  UNDREAD_NOTIFICATION = 'unreadNotification',
  FRIENDS_NOTIFICATION = 'friendsNotification',
  NO_UNDREAD_MESSAGE = 'noUnreadMessage',
  NO_FRIENDS_NOTIFICATION = 'noFriendsNotification',
  NO_UNREAD_NOTIFICATION = 'noUnreadNotification',
}

export enum NOTIFICATION_EMIT_EVENTS {
  SET_NOTIFICATION_USER_ID = 'setNotificationUserId',
}

export enum CHAT_SUBSCRIBE_EVENTS {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  NEW_MESSAGE = 'newMessage',
  EDIT_MESSAGE_SUCCESS = 'editMessageSuccess',
  DELETE_MESSAGE_SUCCESS = 'deleteMessageSuccess',
  UNREAD_MESSAGE = 'unreadMessage',
}

export enum CHAT_EMIT_EVENTS {
  SET_CHAT_ROOM = 'setChatRoom',
  SET_USER_NAME = 'setUserName',
  SET_USER_ID = 'setUserId',
  SET_PLATFORM = 'setPlatform',
  LEAVE_FROM_ROOM = 'leaveFromRoom',
  LOAD_HISTORY = 'loadHistory',
  EDIT_MESSAGE = 'editMessage',
  DELETE_MESSAGE = 'deleteMessage',
  NEW_MESSAGE = 'newMessage',
  SET_AVATAR = 'setAvatar',
}
