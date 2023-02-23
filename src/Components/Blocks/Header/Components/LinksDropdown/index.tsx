import React, { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import find from 'lodash/find'
import includes from 'lodash/includes'
import map from 'lodash/map'

import { PUBLIC_PATHS } from 'Constants/paths'

import useOutsideClick from 'Hooks/useOutsideClick'

import { useScopedI18n } from 'Services/I18n'

import { ArrowIcon, ArrowWrap, Container, LinkItem, Links } from './styles'

const LINKS = scoped => [
  {
    href: PUBLIC_PATHS.LECTORIUM,
    title: scoped('lectorium'),
  },
  {
    href: PUBLIC_PATHS.CHALLENGES,
    title: scoped('challenges'),
  },
  {
    href: PUBLIC_PATHS.DEBATES,
    title: scoped('debates'),
  },
  {
    href: PUBLIC_PATHS.BLOG,
    title: scoped('blog'),
  },
]

const LinksDropdown: React.FC = () => {
  const ref = useRef(null)
  const router = useRouter()
  const s = useScopedI18n('header')

  const [selectedLink, setSelectedLink] = useState(LINKS(s)[0])
  const [isShowDropdown, setShowDropdown] = useState(false)

  const selected =
    find(LINKS(s), item => item.href === router.pathname) || LINKS(s)[0]

  useEffect(() => {
    setSelectedLink(selected)
  }, [])

  useEffect(() => {
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
          {map(LINKS(s), link => (
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
