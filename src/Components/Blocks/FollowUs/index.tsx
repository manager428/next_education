import React from 'react'

import Link from 'next/link'

import {
  socialFacebookGlyph,
  socialInstagramGlyph,
  socialTwitterGlyph,
} from 'Assets/svg/common'

import { SOCIAL_LINKS } from 'Constants/common'

import { Container, SocialContainer, SocialIcon, Title } from './styles'

type Props = {
  color?: string
  facebookLink?: string
  twitterLink?: string
  instagramLink?: string
}

const FollowUs: React.FC<Props> = ({
  color = '#49CEB1',
  facebookLink = SOCIAL_LINKS.facebook,
  twitterLink = SOCIAL_LINKS.twitter,
  instagramLink = SOCIAL_LINKS.instagram,
}) => (
  <Container>
    <SocialContainer>
      <Link href={facebookLink} passHref>
        <a target="_blank">
          <SocialIcon fill={color} icon={socialFacebookGlyph} />
        </a>
      </Link>
    </SocialContainer>
    <SocialContainer>
      <Link href={twitterLink} passHref>
        <a target="_blank">
          <SocialIcon fill={color} icon={socialTwitterGlyph} />
        </a>
      </Link>
    </SocialContainer>
    <SocialContainer>
      <Link href={instagramLink} passHref>
        <a target="_blank">
          <SocialIcon fill={color} icon={socialInstagramGlyph} />
        </a>
      </Link>
    </SocialContainer>
    <Title color={color}>FOLLOW US</Title>
  </Container>
)

export default FollowUs
