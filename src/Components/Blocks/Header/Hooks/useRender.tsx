import React, { useCallback, useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import includes from 'lodash/includes'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  LinksDropdown,
  NotificationPulser,
  UserDropdown,
} from 'Components/Blocks/Header/Components'
import { Color } from 'Components/Blocks/Header/Components/NotificationPulser/types'
import LanguageSwitcher from 'Components/Blocks/LanguageSwitcher'

import { USER_ROLES } from 'Constants/ids'
import { MEDIA_SIZES } from 'Constants/media'
import {
  AUTH_PATHS,
  MODERATOR_PATHS,
  PRIVATE_PATHS,
  PUBLIC_PATHS,
  STUDENT_PATHS,
  TEACHER_PATHS,
} from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'

import { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import { PRIVATE_LINKS, PUBLIC_LINKS, RESPONSIVE_ROUTES } from '../constants'
import {
  ActionLink,
  CallCalendarIcon,
  ChatIcon,
  FriendsIcon,
  HomeLogo,
  HomeLogoSmall,
  Inner,
  NavLink,
  NotificationIcon,
  SignInLink,
  SignUpLink,
  TeacherForumIcon,
  TeacherFriendsIcon,
} from '../styles'

const useRender = () => {
  const router = useRouter()
  const me = useMe()
  const { isLoggedIn } = useRole()
  const s = useScopedI18n('header')

  const isResponsive = RESPONSIVE_ROUTES.includes(router.pathname)

  const [iconNotifications, setIconNotifications] = useState({
    chat: false,
    notifications: false,
    friends: false,
  })

  useEffect(() => {
    if (me?.notifications) {
      setIconNotifications({
        chat: !!me.notifications.chat,
        notifications: !!me.notifications.notifications,
        friends: !!me.notifications.friends,
      })
    }
  }, [me?.notifications])

  const renderLinks = useCallback(
    () =>
      map(isLoggedIn ? PRIVATE_LINKS(s) : PUBLIC_LINKS(s), path => (
        <Flex flexShrink={0} key={path.href} mr={30}>
          <Link href={path.href} passHref>
            <NavLink selected={includes(router.asPath, path.href)}>
              {path.title}
            </NavLink>
          </Link>
        </Flex>
      )),
    [router, isLoggedIn, s],
  )

  const renderUserLinks = useCallback(() => {
    switch (me?.role) {
      case USER_ROLES.teacher:
        return (
          <Flex mb="5px">
            <Flex alignItems="center" margin="0 12px">
              <Link href={PRIVATE_PATHS.CALLS} passHref>
                <a title={s('callCalendar')}>
                  <CallCalendarIcon
                    highlighted={
                      router.pathname === PRIVATE_PATHS.CALLS ? true : undefined
                    }
                  />
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px">
              <Link href={PRIVATE_PATHS.TEACHER_FORUM} passHref>
                <a title={s('teachersForum')}>
                  <TeacherForumIcon
                    highlighted={
                      router.pathname === PRIVATE_PATHS.TEACHER_FORUM
                        ? true
                        : undefined
                    }
                  />
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px" position="relative">
              <Link href={TEACHER_PATHS.MANAGE} passHref>
                <a title={s('virtualClassroom')}>
                  <FriendsIcon
                    highlighted={
                      router.pathname === TEACHER_PATHS.MANAGE
                        ? true
                        : undefined
                    }
                  />
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px" position="relative">
              <Link href={TEACHER_PATHS.FRIENDS} passHref>
                <a title={s('myNetwork')}>
                  <TeacherFriendsIcon
                    highlighted={
                      router.pathname === TEACHER_PATHS.FRIENDS
                        ? true
                        : undefined
                    }
                  />

                  {iconNotifications.friends && (
                    <NotificationPulser color={Color.orange} />
                  )}
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px" position="relative">
              <Link href={PRIVATE_PATHS.CHAT} passHref>
                <a title={s('chat')}>
                  <ChatIcon
                    highlighted={
                      router.pathname === PRIVATE_PATHS.CHAT ? true : undefined
                    }
                  />
                  {iconNotifications.chat && (
                    <NotificationPulser color={Color.green} />
                  )}
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px" position="relative">
              <Link href={PRIVATE_PATHS.NOTIFICATIONS()} passHref>
                <a title={s('notifications')}>
                  <NotificationIcon
                    highlighted={
                      router.pathname === PRIVATE_PATHS.NOTIFICATIONS()
                        ? true
                        : undefined
                    }
                  />
                  {iconNotifications.notifications && (
                    <NotificationPulser color={Color.red} />
                  )}
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px">
              <Link href={PUBLIC_PATHS.FAQ(USER_ROLES.teacher, 'all')} passHref>
                <ActionLink
                  highlighted={
                    router.pathname === PUBLIC_PATHS.FAQ('[role]')
                      ? true
                      : undefined
                  }
                  title="FAQ"
                >
                  FAQ
                </ActionLink>
              </Link>
            </Flex>

            {me?.avatar && (
              <UserDropdown avatar={me.avatar} id={me.id} role={me.role} />
            )}
          </Flex>
        )
      case USER_ROLES.student:
        return (
          <Flex mb="5px">
            <Flex alignItems="center" position="relative">
              <Link
                href={`${PRIVATE_PATHS.USER_PROFILE(me.id)}?tab=call-calendar`}
                passHref
              >
                <a title={s('callCalendar')}>
                  <CallCalendarIcon
                    highlighted={
                      router.asPath ===
                      `${PRIVATE_PATHS.USER_PROFILE(me.id)}?tab=call-calendar`
                        ? true
                        : undefined
                    }
                  />
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" position="relative">
              <Link href={STUDENT_PATHS.FRIENDS(me.id)} passHref>
                <a title={s('myNetwork')}>
                  <FriendsIcon
                    highlighted={
                      router.asPath === STUDENT_PATHS.FRIENDS(me.id)
                        ? true
                        : undefined
                    }
                  />
                  {iconNotifications.friends && (
                    <NotificationPulser color={Color.orange} />
                  )}
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" position="relative">
              <Link href={PRIVATE_PATHS.CHAT} passHref>
                <a title={s('chat')}>
                  <ChatIcon
                    highlighted={
                      router.pathname === PRIVATE_PATHS.CHAT ? true : undefined
                    }
                  />
                  {iconNotifications.chat && (
                    <NotificationPulser color={Color.green} />
                  )}
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin position="relative">
              <Link href={PRIVATE_PATHS.NOTIFICATIONS()} passHref>
                <a title={s('notifications')}>
                  <NotificationIcon
                    highlighted={
                      router.pathname === PRIVATE_PATHS.NOTIFICATIONS()
                        ? true
                        : undefined
                    }
                  />
                  {iconNotifications.notifications && (
                    <NotificationPulser color={Color.red} />
                  )}
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center">
              <Link href={PUBLIC_PATHS.FAQ(USER_ROLES.student, 'all')} passHref>
                <ActionLink
                  highlighted={includes(
                    router.asPath,
                    PUBLIC_PATHS.FAQ(USER_ROLES.student),
                  )}
                  title="FAQ"
                >
                  FAQ
                </ActionLink>
              </Link>
            </Flex>

            {me?.avatar && (
              <UserDropdown avatar={me.avatar} id={me.id} role={me.role} />
            )}

            <Flex ml="12px">
              <LanguageSwitcher />
            </Flex>
          </Flex>
        )
      case USER_ROLES.moderator:
        return (
          <Flex mb="5px">
            <Flex alignItems="center" margin="0 12px">
              <Link href={MODERATOR_PATHS.MANAGE_USERS} passHref>
                <a>
                  <FriendsIcon
                    highlighted={
                      router.pathname === MODERATOR_PATHS.MANAGE_USERS
                        ? true
                        : undefined
                    }
                  />
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px">
              <Link href={PUBLIC_PATHS.FAQ(USER_ROLES.student, 'all')} passHref>
                <ActionLink
                  highlighted={
                    router.pathname === PUBLIC_PATHS.FAQ(USER_ROLES.student)
                      ? true
                      : undefined
                  }
                >
                  FAQ
                </ActionLink>
              </Link>
            </Flex>

            {me?.avatar && (
              <UserDropdown avatar={me.avatar} id={me.id} role={me.role} />
            )}
          </Flex>
        )
      case USER_ROLES.parent:
        return (
          <Flex mb="5px">
            <Flex alignItems="center" margin="0 12px">
              <Link href={PUBLIC_PATHS.FAQ(USER_ROLES.student)} passHref>
                <ActionLink
                  highlighted={
                    router.pathname === PUBLIC_PATHS.FAQ(USER_ROLES.teacher)
                      ? true
                      : undefined
                  }
                >
                  FAQ
                </ActionLink>
              </Link>
            </Flex>

            {me?.avatar && (
              <UserDropdown avatar={me.avatar} id={me.id} role={me.role} />
            )}

            <Flex ml="12px">
              <LanguageSwitcher />
            </Flex>
          </Flex>
        )

      case USER_ROLES.schoolAdmin:
        return (
          <Flex mb="5px">
            <Flex alignItems="center" margin="0 12px" position="relative">
              <Link href={PRIVATE_PATHS.CALLS} passHref>
                <a title={s('callCalendar')}>
                  <CallCalendarIcon
                    highlighted={
                      router.asPath === PRIVATE_PATHS.CALLS ? true : undefined
                    }
                  />
                </a>
              </Link>
            </Flex>

            <Flex alignItems="center" margin="0 12px">
              <Link href={PUBLIC_PATHS.FAQ(USER_ROLES.student)} passHref>
                <ActionLink
                  highlighted={
                    router.pathname === PUBLIC_PATHS.FAQ(USER_ROLES.teacher)
                      ? true
                      : undefined
                  }
                >
                  FAQ
                </ActionLink>
              </Link>
            </Flex>

            {me?.avatar && (
              <UserDropdown avatar={me.avatar} id={me.id} role={me.role} />
            )}
          </Flex>
        )
      default:
        return null
    }
  }, [router, me, iconNotifications])

  const renderHeader = useCallback(() => {
    if (isLoggedIn) {
      return (
        <Inner>
          <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
            <Flex alignItems="center" justifyContent="space-between">
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Flex alignItems="center">
                <Link href={isLoggedIn ? PRIVATE_PATHS.HOME : '/'}>
                  <Flex as="a">
                    {isLoggedIn ? <HomeLogo /> : <HomeLogoSmall />}
                  </Flex>
                </Link>
                <Flex ml={10}>{renderLinks()}</Flex>
              </Flex>
              <Flex>{renderUserLinks()}</Flex>
            </Flex>
          </Media>

          <Media lessThan={MEDIA_SIZES.DESKTOP}>
            <Flex alignItems="center" justifyContent="space-between">
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Flex alignItems="center">
                <Link href={isLoggedIn ? PRIVATE_PATHS.HOME : '/'}>
                  <Flex as="a">{isLoggedIn && <HomeLogoSmall />}</Flex>
                </Link>
                <Flex ml={10}>
                  <LinksDropdown />
                </Flex>
              </Flex>
              <Flex>{renderUserLinks()}</Flex>
            </Flex>
          </Media>
        </Inner>
      )
    }

    return (
      <Inner>
        {isResponsive ? (
          <Flex alignContent="center" alignItems="center">
            <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/">
                <Flex as="a">
                  <HomeLogo />
                </Flex>
              </Link>
            </Media>

            <Media lessThan={MEDIA_SIZES.TABLET}>
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href="/">
                <Flex as="a">
                  <HomeLogoSmall />
                </Flex>
              </Link>
            </Media>
          </Flex>
        ) : (
          <Flex alignContent="center" alignItems="center">
            <Link href="/" passHref>
              <Flex as="a">
                <HomeLogo />
              </Flex>
            </Link>
          </Flex>
        )}

        <Flex alignItems="center">
          <Link href={AUTH_PATHS.SIGN_IN} passHref>
            <SignInLink>{s('signIn')}</SignInLink>
          </Link>
          <Link href={AUTH_PATHS.SIGN_UP} passHref>
            <SignUpLink>{s('signUp')}</SignUpLink>
          </Link>
        </Flex>
      </Inner>
    )
  }, [isLoggedIn, router, iconNotifications])

  return {
    renderHeader,
    setIconNotifications,
  }
}

export default useRender
