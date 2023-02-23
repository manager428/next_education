import React, { useCallback, useRef, useState } from 'react'

import Link from 'next/link'

import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'
import useRole from 'Hooks/useRole'

import _ from 'Services/I18n'

import {
  Author,
  AuthorAvatar,
  AuthorContainer,
  AuthorMenuDropdown,
} from './styles'

type Props = {
  authorId: number
  avatarUrl: string
  name: string
  commentRef: any
  username: string

  onReply: (userId: number, username: string) => void
  onShowSignIn: (isShow: boolean) => void
}
const AuthorMenu: React.FC<Props> = ({
  authorId,
  avatarUrl,
  name,
  username,
  onReply,
  onShowSignIn,
}) => {
  const ref = useRef(null)
  const me = useMe()
  const { isLoggedIn } = useRole()

  const [isShowMenu, setShowMenu] = useState(false)

  useOutsideClick({ ref, onClick: () => setShowMenu(false) })

  const isNotMe = authorId !== 0 && authorId !== me?.id

  const handleReply = () => {
    if (!isNotMe) return

    onReply(authorId, username)

    setShowMenu(false)
  }

  const handleToggleMenu = useCallback(() => {
    if (!isLoggedIn) {
      onShowSignIn(true)
      return
    }
    setShowMenu(prevState => !prevState)
  }, [])

  return (
    <AuthorContainer ref={ref}>
      <Author>
        {authorId !== 0 ? (
          <Link href={PRIVATE_PATHS.USER_PROFILE(authorId)} passHref>
            <a>
              <AuthorAvatar alt="" src={avatarUrl} />
            </a>
          </Link>
        ) : (
          <AuthorAvatar alt="" src={avatarUrl} />
        )}

        <span
          role="button"
          tabIndex={0}
          onClick={handleToggleMenu}
          onKeyDown={handleToggleMenu}
        >
          {name}
        </span>

        {authorId !== 0 && isShowMenu && (
          <AuthorMenuDropdown>
            {isNotMe && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleReply}
                onKeyDown={handleReply}
              >
                {_('buttons.replyMessage')}
              </span>
            )}
            <span>
              <Link href={PRIVATE_PATHS.USER_PROFILE(authorId)}>
                <a>{_('buttons.goToUserProfile')}</a>
              </Link>
            </span>
          </AuthorMenuDropdown>
        )}
      </Author>
    </AuthorContainer>
  )
}

export default AuthorMenu
