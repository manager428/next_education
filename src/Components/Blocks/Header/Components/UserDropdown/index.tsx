import React, { useCallback, useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'

import { Link } from 'Components/UI'

import { USER_ROLES } from 'Constants/ids'
import {
  PARENT_PATHS,
  PRIVATE_PATHS,
  SCHOOL_PATHS,
  TEACHER_PATHS,
} from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import { logout } from 'Store/auth/thunks'

import { useScopedI18n } from 'Services/I18n'

import {
  ArrowIcon,
  ArrowWrap,
  Avatar,
  Container,
  LinkItem,
  Links,
} from './styles'

type Props = {
  id: number
  role: USER_ROLES
  avatar: string
}

const UserDropdown: React.FC<Props> = ({ id, role, avatar }) => {
  const ref = useRef(null)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const s = useScopedI18n('header')
  const me = useMe()

  const [isShowDropdown, setShowDropdown] = useState(false)

  const handleHideDropdown = () => {
    setShowDropdown(false)
  }

  useOutsideClick({ ref, onClick: handleHideDropdown })

  useEffect(() => {
    router.events.on('routeChangeComplete', handleHideDropdown)

    // eslint-disable-next-line consistent-return
    return () => {
      if (typeof window === 'undefined') return
      router.events.off('routeChangeComplete', handleHideDropdown)
    }
  }, [router])

  const handleShowDropdown = useCallback(() => {
    setShowDropdown(true)
  }, [])

  const handleLogOut = useCallback(async () => {
    await dispatch(logout({ withApiLogout: true }))
  }, [])

  const handleGoSettings = useCallback(
    async e => {
      e.stopPropagation()

      handleHideDropdown()

      if (role === USER_ROLES.schoolAdmin) {
        router.push(SCHOOL_PATHS.SETTINGS)
      } else {
        router.push(PRIVATE_PATHS.SETTINGS)
      }
    },
    [role],
  )

  const handleProfileClick = useCallback(
    e => {
      e.stopPropagation()

      handleHideDropdown()

      switch (role) {
        case USER_ROLES.parent:
          router.push(PARENT_PATHS.MANAGE)
          break
        case USER_ROLES.schoolAdmin:
          router.push(SCHOOL_PATHS.MANAGE)
          break
        default:
          router.push(`${PRIVATE_PATHS.USER_PROFILE(id)}`)
          break
      }
    },
    [role],
  )

  function renderTeacherItems() {
    return (
      <Links width="180px">
        <LinkItem onClick={handleProfileClick}>Social Profile</LinkItem>
        <LinkItem>
          <Link href={TEACHER_PATHS.MANAGE}>My students</Link>
        </LinkItem>
        <LinkItem>
          <Link href={TEACHER_PATHS.CLASSES()}>My classrooms</Link>
        </LinkItem>
        <LinkItem onClick={handleGoSettings}>{s('settings')}</LinkItem>
        <LinkItem onClick={handleLogOut}>{s('logout')}</LinkItem>
      </Links>
    )
  }

  function renderStudentsItems() {
    return (
      <Links>
        <LinkItem onClick={handleProfileClick}>{s('profile')}</LinkItem>
        <LinkItem onClick={handleGoSettings}>{s('settings')}</LinkItem>
        <LinkItem onClick={handleLogOut}>{s('logout')}</LinkItem>
      </Links>
    )
  }

  function renderModeratorItems() {
    return (
      <Links>
        <LinkItem onClick={handleGoSettings}>Settings</LinkItem>
        <LinkItem onClick={handleLogOut}>Logout</LinkItem>
      </Links>
    )
  }

  function renderSchoolAdminItems() {
    return (
      <Links>
        <LinkItem onClick={handleProfileClick}>Dashboard</LinkItem>
        <LinkItem onClick={handleGoSettings}>Settings</LinkItem>
        <LinkItem onClick={handleLogOut}>Logout</LinkItem>
      </Links>
    )
  }

  function renderParentItems() {
    return (
      <Links>
        <LinkItem onClick={handleProfileClick}>{s('dashboard')}</LinkItem>
        <LinkItem onClick={handleGoSettings}>{s('settings')}</LinkItem>
        <LinkItem onClick={handleLogOut}>{s('logout')}</LinkItem>
      </Links>
    )
  }

  function renderButtonsByRole() {
    switch (role) {
      case USER_ROLES.moderator:
        return renderModeratorItems()

      case USER_ROLES.schoolAdmin:
        return renderSchoolAdminItems()

      case USER_ROLES.parent:
        return renderParentItems()

      case USER_ROLES.student:
        return renderStudentsItems()

      case USER_ROLES.teacher:
        return renderTeacherItems()

      default:
        return null
    }
  }

  return (
    <Container
      highlight={router.asPath === PRIVATE_PATHS.USER_PROFILE(me?.id ?? 0)}
      ref={ref}
      onClick={handleShowDropdown}
    >
      <Avatar src={avatar} />

      <ArrowWrap>
        <ArrowIcon />
      </ArrowWrap>

      {isShowDropdown && renderButtonsByRole()}
    </Container>
  )
}

export default UserDropdown
