import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { landingLaptop2 } from 'Assets/images/landing'

import {
  Container,
  InnerContainer,
  Section,
  TopBlock,
  TopImageBlock,
  TopText,
  TopTitle,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'
import { NavButton } from 'Containers/Pages/Landing/styles'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const TopSection = () => (
  <Container
    backgroundColor="#FFE9E3"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <InnerContainer>
        <Section alignItems="center" justifyContent="space-between" pb={32}>
          <TopImageBlock mt="17px">
            <Image
              height={280}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop2}
              width={486}
            />
          </TopImageBlock>
          <TopBlock flexGrow={1} flexWrap="wrap" maxWidth={480}>
            <TopTitle color="#49CEB1" fontSize={22} fontWeight={700}>
              FOR PARENTS
            </TopTitle>
            <TopText
              color="#071D40"
              fontSize={42}
              fontWeight={700}
              lineHeight="50px"
              mt={15}
            >
              Make your child thrive!
            </TopText>

            <TopText
              color="#071D40"
              fontSize={24}
              lineHeight="34px"
              mb={20}
              mt={20}
            >
              An award-winning educational platform loved by 100,000 parents and
              students all over the world.
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
              height={216}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop2}
              width={374}
            />
          </TopImageBlock>
          <TopBlock flexGrow={1} flexWrap="wrap" maxWidth="302px">
            <TopTitle
              color="#49CEB1"
              fontSize="18px"
              fontWeight={700}
              lineHeight="18px"
              width={1}
            >
              FOR PARENTS
            </TopTitle>
            <TopText
              color="#071D40"
              fontSize={28}
              fontWeight={700}
              lineHeight="33px"
              mt="14px"
            >
              Make your child thrive!
            </TopText>

            <TopText
              color="#071D40"
              fontSize={16}
              lineHeight="22px"
              mb={14}
              mt={14}
            >
              An award-winning educational platform loved by 100,000 parents and
              students all over the world.
            </TopText>

            <Link href="#pricing" passHref>
              <NavButton minwidth="160px">START THE JOURNEY</NavButton>
            </Link>
          </TopBlock>
        </Section>
      </InnerContainer>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <InnerContainer>
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
              color="#49CEB1"
              fontSize="16px"
              fontWeight={700}
              justifyContent="center"
              lineHeight="16px"
              width={1}
            >
              FOR PARENTS
            </TopTitle>
            <TopText
              color="#071D40"
              fontSize={24}
              fontWeight={700}
              justifyContent="center"
              lineHeight="28px"
              mt="14px"
              width={1}
            >
              Make your child thrive!
            </TopText>

            <TopText
              color="#071D40"
              fontSize={16}
              justifyContent="center"
              lineHeight="22px"
              mb={14}
              mt={14}
              textAlign="center"
            >
              An award-winning educational platform loved by 100,000 parents and
              students all over the world.
            </TopText>

            <Link href="#pricing" passHref>
              <NavButton minwidth="160px">START THE JOURNEY</NavButton>
            </Link>
          </TopBlock>

          <TopImageBlock mt="28px">
            <Image
              height={166}
              layout="fixed"
              placeholder="blur"
              src={landingLaptop2}
              width={288}
            />
          </TopImageBlock>
        </Section>
      </InnerContainer>
    </Media>
  </Container>
)

export default TopSection
