import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import includes from 'lodash/includes'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import LinksDropdown from 'Components/Blocks/Entities/Landing/LinksDropdown'
import LanguageSwitcher from 'Components/Blocks/LanguageSwitcher'

import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS, LANDING_PATHS, PUBLIC_PATHS } from 'Constants/paths'

import useLocale from 'Hooks/useLocale'

import _, { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import {
  Container,
  FaqLink,
  HomeLogo,
  HomeLogoSmallest,
  Inner,
  LinkWrapper,
  NavLink,
  SignInLink,
  SignUpLink,
} from './styles'

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

const Header: React.FC = () => {
  const s = useScopedI18n('landing.header')
  const router = useRouter()
  const locale = useLocale()

  const renderLinks = (marginRight = '30px') =>
    map(LANDING_LINKS(s), path => (
      <Flex flexShrink={0} key={path.href} mr={marginRight}>
        <Link href={path.href} passHref>
          <NavLink selected={includes(router.asPath, path.href)}>
            {path.title}
          </NavLink>
        </Link>
      </Flex>
    ))

  return (
    <Container className="header" key={locale}>
      <Inner>
        <Flex alignContent="center" alignItems="center">
          <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
            <Flex>
              <Link href="/" passHref>
                <Flex as="a">
                  <HomeLogo />
                </Flex>
              </Link>

              <Flex
                alignContent="center"
                alignItems="center"
                flexShrink={0}
                ml={20}
              >
                {renderLinks()}
              </Flex>
            </Flex>
          </Media>

          <Media at={MEDIA_SIZES.TABLET}>
            <Flex>
              <Link href="/">
                <Flex as="a">
                  <HomeLogoSmallest />
                </Flex>
              </Link>
              <Flex
                alignContent="center"
                alignItems="center"
                flexShrink={0}
                ml={20}
              >
                {renderLinks('15px')}
              </Flex>
            </Flex>
          </Media>

          <Media at={MEDIA_SIZES.MOBILE}>
            <Flex>
              <Link href="/">
                <Flex as="a">
                  <HomeLogoSmallest />
                </Flex>
              </Link>
              <Flex
                alignContent="center"
                alignItems="center"
                flexShrink={0}
                ml="10px"
              >
                <LinksDropdown />
              </Flex>
            </Flex>
          </Media>
        </Flex>

        <Flex alignItems="center">
          <Link href={AUTH_PATHS.SIGN_IN} passHref>
            <SignInLink>{_('header.signIn')}</SignInLink>
          </Link>

          <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
            <Link href={AUTH_PATHS.SIGN_UP} passHref>
              <SignUpLink>{_('header.signUp')}</SignUpLink>
            </Link>
          </Media>

          <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
            <Flex ml={15}>
              <Link href={PUBLIC_PATHS.FAQ('guest', 'all')} passHref>
                <LinkWrapper>
                  <FaqLink />
                </LinkWrapper>
              </Link>
            </Flex>
          </Media>

          <Flex ml={15}>
            <LanguageSwitcher />
          </Flex>
        </Flex>
      </Inner>
    </Container>
  )
}

export default Header
