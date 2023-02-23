import React, { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import find from 'lodash/find'
import includes from 'lodash/includes'
import map from 'lodash/map'

import { LANDING_PATHS } from 'Constants/paths'

import useOutsideClick from 'Hooks/useOutsideClick'

import { useScopedI18n } from 'Services/I18n'

import { ArrowIcon, ArrowWrap, Container, LinkItem, Links } from './styles'

const LANDING_LINKS = scoped => [
  {
    href: LANDING_PATHS.PARENTS,
    title: scoped('families'),
  },
  {
    href: LANDING_PATHS.EDUCATORS,
    title: scoped('teachers'),
  },
  {
    href: LANDING_PATHS.PRINCIPLES,
    title: scoped('educators'),
  },
  {
    href: LANDING_PATHS.PARTNERS,
    title: scoped('companies'),
  },
]

const HOME_LINK = { href: '/', title: 'Home' }

const LinksDropdown: React.FC = () => {
  const ref = useRef(null)
  const router = useRouter()
  const s = useScopedI18n('landing.header')

  const [selectedLink, setSelectedLink] = useState(LANDING_LINKS(s)[0])
  const [isShowDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const selected =
      find(LANDING_LINKS(s), item => item.href === router.pathname) || HOME_LINK
    setSelectedLink(selected)
  }, [])

  useEffect(() => {
    const selected =
      find(LANDING_LINKS(s), item => item.href === router.pathname) || HOME_LINK

    setSelectedLink(selected)
    setShowDropdown(false)
  }, [router.pathname])

  useOutsideClick({ ref, onClick: () => setShowDropdown(false) })

  const handleShowDropdown = useCallback(() => {
    setShowDropdown(prevState => !prevState)
  }, [])

  return (
    <Container ref={ref} onClick={handleShowDropdown}>
      <ArrowWrap>
        <ArrowIcon />
      </ArrowWrap>

      {selectedLink.title}

      {isShowDropdown && (
        <Links>
          {map(LANDING_LINKS(s), link => (
            <Link href={link.href} passHref>
              <LinkItem highlighted={includes(router.asPath, link.href)}>
                {link.title}
              </LinkItem>
            </Link>
          ))}
        </Links>
      )}
    </Container>
  )
}

export default LinksDropdown
