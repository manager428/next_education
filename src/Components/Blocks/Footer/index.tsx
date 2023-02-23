import React from 'react'

import Link from 'next/link'

import map from 'lodash/map'

import {
  whiteFacebookGlyph,
  whiteInstagramGlyph,
  whiteTwitterGlyph,
} from 'Assets/svg/common'
import { androidGlyph, appleGlyph } from 'Assets/svg/landing'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import {
  DownloadButton,
  DownloadContainer,
  FooterTitle,
  Inner,
  NativeLink,
  SocialIcon,
  SocialLink,
  SocialWrap,
  Title,
  Wrap,
} from 'Components/Blocks/Footer/styles'

import { SOCIAL_LINKS } from 'Constants/common'
import { PUBLIC_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'

import { useScopedI18n } from 'Services/I18n'

type Props = {
  withoutDownload?: boolean
  withRadius?: boolean
}
const Footer: React.FC<Props> = ({
  withoutDownload = false,
  withRadius = false,
}) => {
  const s = useScopedI18n('footer')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  const me = useMe()

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

  return (
    <Wrap borderRadius={withRadius}>
      <Inner>
        {!withoutDownload && (
          <DownloadContainer>
            <Title>{s('downloadApp')}</Title>
            <Flex mt={10}>
              <DownloadButton
                as="a"
                href="https://play.google.com/store/apps/details?id=com.idialogue.chat"
                mr={14}
                target="_blank"
              >
                <Icon
                  icon={androidGlyph}
                  wrapperStyles={{ mr: 10, size: 20 }}
                />
                Android
              </DownloadButton>
              <DownloadButton
                as="a"
                href="https://apps.apple.com/ua/app/idialogue/id1493777821"
                target="_blank"
              >
                <Icon icon={appleGlyph} wrapperStyles={{ mr: 10, size: 20 }} />
                IOS
              </DownloadButton>
            </Flex>
          </DownloadContainer>
        )}
        <FooterTitle>{s('follow')}</FooterTitle>
        <Flex flexWrap="wrap">
          <SocialWrap>
            {map(SOCIALS, social => (
              <SocialLink
                href={social.url}
                key={social.url}
                rel="noreferrer noopener"
                target="_blank"
              >
                <SocialIcon icon={social.icon} />
              </SocialLink>
            ))}
          </SocialWrap>
          <Flex justifyContent="center" mt={20} width={1}>
            <Link href={PUBLIC_PATHS.PRIVACY} passHref>
              <NativeLink rel="noreferrer noopener">
                {s('privacyAndTerms')}
              </NativeLink>
            </Link>
          </Flex>
        </Flex>
      </Inner>
    </Wrap>
  )
}

export default Footer
