import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Container,
  MenuLink,
} from 'Components/Blocks/Entities/Moderator/Header/styles'

import { MODERATOR_PATHS } from 'Constants/paths'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <Container justifyContent="center">
      <Link href={MODERATOR_PATHS.MANAGE_USERS} passHref>
        <MenuLink active={router.pathname === MODERATOR_PATHS.MANAGE_USERS}>
          USERS
        </MenuLink>
      </Link>

      <Link href={MODERATOR_PATHS.MANAGE_COMPLAINTS} passHref>
        <MenuLink
          active={router.pathname === MODERATOR_PATHS.MANAGE_COMPLAINTS}
        >
          COMPLAINTS
        </MenuLink>
      </Link>

      <Link href={MODERATOR_PATHS.MANAGE_COMMENTS} passHref>
        <MenuLink active={router.pathname === MODERATOR_PATHS.MANAGE_COMMENTS}>
          COMMENTS
        </MenuLink>
      </Link>
    </Container>
  )
}

export default Header
