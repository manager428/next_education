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
} from 'Containers/Pages/Landing/Languages/English/ForEducators/styles'
import { NavButton } from 'Containers/Pages/Landing/styles'

import { Flex } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const TopSection = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#E9F6F4"
        justifyContent="center"
        pb={60}
        pt={90}
        width={1}
      >
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
              <TopTitle color="#49CEB1" fontSize="22px" fontWeight={700}>
                FOR EDUCATORS
              </TopTitle>
              <TopText
                color="#071D40"
                fontSize={42}
                fontWeight={700}
                lineHeight="50px"
                mb={20}
                mt={15}
              >
                Bring the world <br />
                to your classroom!
              </TopText>

              <Link href="#pricing" passHref>
                <NavButton minwidth="160px">GET STARTED</NavButton>
              </Link>
            </TopBlock>
          </Section>
        </InnerContainer>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="#E9F6F4"
        justifyContent="center"
        pb={60}
        pt={90}
        width={1}
      >
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
            <TopBlock
              alignSelf="center"
              flexGrow={1}
              flexWrap="wrap"
              maxWidth="302px"
            >
              <TopTitle
                color="#49CEB1"
                fontSize="18px"
                fontWeight={700}
                lineHeight="18px"
                width={1}
              >
                FOR EDUCATORS
              </TopTitle>
              <TopText
                color="#071D40"
                fontSize={28}
                fontWeight={700}
                lineHeight="33px"
                mb={14}
                mt={14}
              >
                Bring the world <br />
                to your classroom!
              </TopText>

              <Link href="#pricing" passHref>
                <NavButton minwidth="160px">GET STARTED</NavButton>
              </Link>
            </TopBlock>
          </Section>
        </InnerContainer>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container
        backgroundColor="#E9F6F4"
        justifyContent="center"
        pb={60}
        pt={34}
        width={1}
      >
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
                FOR EDUCATORS
              </TopTitle>
              <TopText
                color="#071D40"
                fontSize={24}
                fontWeight={700}
                justifyContent="center"
                lineHeight="28px"
                mb={14}
                mt={14}
                width={1}
              >
                Bring the world <br />
                to your classroom!
              </TopText>

              <Link href="#pricing" passHref>
                <NavButton minwidth="160px">GET STARTED</NavButton>
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
      </Container>
    </Media>
  </Flex>
)

export default TopSection
