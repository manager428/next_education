import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { landingLaptop3 } from 'Assets/images/landing'

import { NavButton } from 'Containers/Pages/Landing/styles'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

import {
  Container,
  InnerContainer,
  Section,
  TopBlock,
  TopImageBlock,
  TopText,
  TopTitle,
} from '../styles'

const TopSection = () => (
  <Container
    backgroundColor="#E9F5FF"
    justifyContent="center"
    p="0 25px"
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <InnerContainer>
        <Section alignItems="center" justifyContent="space-between">
          <TopImageBlock>
            <Image
              height={400}
              placeholder="blur"
              src={landingLaptop3}
              width={462}
            />
          </TopImageBlock>
          <TopBlock
            alignItems="flex-start"
            flexGrow={1}
            flexWrap="wrap"
            maxWidth={480}
          >
            <TopTitle
              color={theme.colors.green}
              fontSize={22}
              fontWeight={700}
              width={1}
            >
              FOR PARTNERS
            </TopTitle>
            <TopText
              alignLeft
              color="#071D40"
              fontSize={42}
              fontWeight={700}
              lineHeight="50px"
              mb={14}
              mt={15}
              width={1}
            >
              Join the collaborative learning revolution
            </TopText>

            <Link href="#pricing" passHref>
              <NavButton minwidth="160px">START THE JOURNEY</NavButton>
            </Link>
          </TopBlock>
        </Section>
      </InnerContainer>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <InnerContainer>
        <Section alignItems="flex-start" justifyContent="center">
          <TopImageBlock mr="20px">
            <Image
              height={336}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop3}
              width={388}
            />
          </TopImageBlock>
          <TopBlock
            alignSelf="center"
            flexGrow={1}
            flexWrap="wrap"
            maxWidth="302px"
          >
            <TopTitle
              color={theme.colors.green}
              fontSize="18px"
              fontWeight={700}
              lineHeight="18px"
              width={1}
            >
              FOR PARTNERS
            </TopTitle>
            <TopText
              color="#071D40"
              fontSize={28}
              fontWeight={700}
              lineHeight="33px"
              mb={14}
              mt={14}
            >
              Join the collaborative learning revolution
            </TopText>

            <Link href="#pricing" passHref>
              <NavButton minwidth="160px">START THE JOURNEY</NavButton>
            </Link>
          </TopBlock>
        </Section>
      </InnerContainer>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <InnerContainer p="40px 0px">
        <Section
          alignItems="flex-start"
          justifyContent="center"
          margin="0 auto"
          maxWidth="280px"
        >
          <TopBlock
            flexGrow={1}
            flexWrap="wrap"
            justifyContent="center"
            width={1}
          >
            <TopTitle
              color={theme.colors.green}
              fontSize="16px"
              fontWeight={700}
              justifyContent="center"
              lineHeight="16px"
              width={1}
            >
              FOR PARTNERS
            </TopTitle>
            <TopText
              color="#071D40"
              fontSize={24}
              fontWeight={700}
              justifyContent="center"
              lineHeight="28px"
              mb={14}
              mt={14}
              textAlign="center"
              width={1}
            >
              Join the collaborative learning revolution
            </TopText>

            <Link href="#pricing" passHref>
              <NavButton minwidth="160px">START THE JOURNEY</NavButton>
            </Link>
          </TopBlock>

          <TopImageBlock mt="28px">
            <Image
              height={194}
              layout="fixed"
              objectFit="contain"
              placeholder="blur"
              src={landingLaptop3}
              width={288}
            />
          </TopImageBlock>
        </Section>
      </InnerContainer>
    </Media>
  </Container>
)

export default TopSection
