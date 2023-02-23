import React from 'react'

import { DateTime } from 'luxon'
import Link from 'next/link'

import map from 'lodash/map'

import {
  whiteFacebookGlyph,
  whiteInstagramGlyph,
  whiteTwitterGlyph,
} from 'Assets/svg/common'
import { appleGlyph, googleGlyph, logoWhiteGlyph } from 'Assets/svg/landing'

import { Flex, Icon } from 'Components/UI'

import {
  SocialIcon,
  SocialLink,
  SocialWrap,
} from 'Components/Blocks/Footer/styles'

import { SOCIAL_LINKS } from 'Constants/common'
import { MEDIA_SIZES } from 'Constants/media'
import { PUBLIC_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import {
  Copyright,
  FooterContainer,
  InnerContainer,
  SectionHead,
  SectionList,
  Separator,
  StoreLink,
} from './styles'

const SOCIALS = [
  {
    url: SOCIAL_LINKS.instagram,
    icon: whiteInstagramGlyph,
  },
  {
    url: SOCIAL_LINKS.twitter,
    icon: whiteTwitterGlyph,
  },
  {
    url: SOCIAL_LINKS.facebook,
    icon: whiteFacebookGlyph,
  },
]

const Footer: React.FC = () => {
  const s = useScopedI18n('footer')

  return (
    <FooterContainer backgroundColor="#49CEB1" pb={30} pt={20}>
      <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
        <InnerContainer maxWidth={980}>
          <Flex flexShrink={0} width={182}>
            <Icon height={38} icon={logoWhiteGlyph} width={182} />
          </Flex>
          <Flex alignItems="flex-start" flexShrink={0} ml={80} mt="8px">
            <Flex flexWrap="wrap">
              <SectionList>
                {/* <li> */}
                {/*  <Link href={PUBLIC_PATHS.ABOUT} passHref> */}
                {/*    <a>{s('aboutUs')}</a> */}
                {/*  </Link> */}
                {/* </li> */}
                <li>
                  <Link href={PUBLIC_PATHS.BLOG}>
                    <a href="/blog">{s('blog')}</a>
                  </Link>
                </li>

                <li>
                  <Link href={PUBLIC_PATHS.TERMS} passHref>
                    <a>{s('terms')}</a>
                  </Link>
                </li>

                <li>
                  <Link href={PUBLIC_PATHS.POLICY} passHref>
                    <a>{s('privacy')}</a>
                  </Link>
                </li>
              </SectionList>
            </Flex>
            <Flex flexWrap="wrap" ml={24} width={122}>
              <SectionList>
                <li>
                  <Link href={PUBLIC_PATHS.FAQ('guest', 'all')} passHref>
                    <a>{s('faq')}</a>
                  </Link>
                </li>
              </SectionList>
            </Flex>
          </Flex>

          <Flex
            alignContent="flex-start"
            alignItems="flex-start"
            flexGrow={1}
            flexWrap="wrap"
            justifyContent="flex-end"
            mt="8px"
          >
            <Flex flexWrap="wrap" justifyContent="center" width={144}>
              <SectionHead justifyContent="center">
                {s('getTheApp')}
              </SectionHead>
              <Flex
                flexWrap="wrap"
                justifyContent="flex-end"
                mt={14}
                width={134}
              >
                <StoreLink
                  as="a"
                  href="https://play.google.com/store/apps/details?id=com.idialogue.chat"
                  mb={14}
                  target="_blank"
                >
                  <Icon
                    height={16}
                    icon={googleGlyph}
                    width={14}
                    wrapperStyles={{
                      mr: '8px',
                    }}
                  />{' '}
                  GOOGLE PLAY
                </StoreLink>
                <StoreLink
                  as="a"
                  href="https://apps.apple.com/ua/app/idialogue/id1493777821"
                  target="_blank"
                >
                  <Icon
                    height={18}
                    icon={appleGlyph}
                    width={14}
                    wrapperStyles={{
                      mr: '8px',
                    }}
                  />
                  APP STORE
                </StoreLink>
              </Flex>
            </Flex>
          </Flex>

          <Separator mb={20} />

          <Flex alignItems="center" width={1}>
            <Copyright>
              Copyright © {DateTime.now().year} <span>iDialogue.com</span>
            </Copyright>

            <Flex ml={176}>
              <SocialWrap>
                {map(SOCIALS, social => (
                  <SocialLink
                    href={social.url}
                    key={social.url}
                    target="_blank"
                  >
                    <SocialIcon icon={social.icon} />
                  </SocialLink>
                ))}
              </SocialWrap>
            </Flex>
          </Flex>
        </InnerContainer>
      </Media>

      <Media lessThan={MEDIA_SIZES.TABLET}>
        <InnerContainer maxWidth={288}>
          <Flex flexShrink={0} width={1}>
            <Icon height={24} icon={logoWhiteGlyph} width={114} />
          </Flex>
          <Flex alignItems="flex-start" flexShrink={0} mt="14px">
            <Flex flexWrap="wrap">
              <SectionList>
                {/* <li> */}
                {/*  <Link href={PUBLIC_PATHS.ABOUT} passHref> */}
                {/*    <a>{s('aboutUs')}</a> */}
                {/*  </Link> */}
                {/* </li> */}
                <li>
                  <Link href={PUBLIC_PATHS.BLOG}>
                    <a href="/blog">{s('blog')}</a>
                  </Link>
                </li>

                <li>
                  <Link href={PUBLIC_PATHS.TERMS} passHref>
                    <a>{s('terms')}</a>
                  </Link>
                </li>

                <li>
                  <Link href={PUBLIC_PATHS.POLICY} passHref>
                    <a>{s('privacy')}</a>
                  </Link>
                </li>
              </SectionList>
            </Flex>
            <Flex flexWrap="wrap" maxWidth={122} ml={32} width={1}>
              <SectionList>
                <li>
                  <Link href={PUBLIC_PATHS.FAQ('guest', 'all')} passHref>
                    <a>{s('faq')}</a>
                  </Link>
                </li>
              </SectionList>
            </Flex>
          </Flex>

          <Flex
            alignContent="flex-start"
            alignItems="flex-start"
            flexGrow={1}
            flexWrap="wrap"
            justifyContent="flex-start"
            mt="8px"
          >
            <Flex flexWrap="wrap" justifyContent="flex-start" width={1}>
              <SectionHead justifyContent="flex-start">
                {s('getTheApp')}
              </SectionHead>
              <Flex
                flexWrap="wrap"
                justifyContent="flex-start"
                mt={14}
                width={1}
              >
                <StoreLink
                  as="a"
                  href="https://play.google.com/store/apps/details?id=com.idialogue.chat"
                  mb={14}
                  mr="8px"
                  target="_blank"
                >
                  <Icon
                    height={16}
                    icon={googleGlyph}
                    width={14}
                    wrapperStyles={{
                      mr: '8px',
                    }}
                  />{' '}
                  GOOGLE PLAY
                </StoreLink>
                <StoreLink
                  as="a"
                  href="https://apps.apple.com/ua/app/idialogue/id1493777821"
                  target="_blank"
                >
                  <Icon
                    height={18}
                    icon={appleGlyph}
                    width={14}
                    wrapperStyles={{
                      mr: '8px',
                    }}
                  />
                  APP STORE
                </StoreLink>
              </Flex>
            </Flex>
          </Flex>

          <Separator mb={20} />

          <Flex alignItems="center" flexWrap="wrap" width={1}>
            <Flex justifyContent="center" width={1}>
              <SocialWrap>
                {map(SOCIALS, social => (
                  <SocialLink
                    href={social.url}
                    key={social.url}
                    target="_blank"
                  >
                    <SocialIcon icon={social.icon} />
                  </SocialLink>
                ))}
              </SocialWrap>
            </Flex>

            <Copyright justifyContent="center" mt={14} width={1}>
              Copyright © {DateTime.now().year} <span>iDialogue.com</span>
            </Copyright>
          </Flex>
        </InnerContainer>
      </Media>
    </FooterContainer>
  )
}

export default Footer
