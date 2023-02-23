import React from 'react'

import { idialogueBadges } from 'Assets/images/landing'

import {
  Container,
  Section,
} from 'Containers/Pages/Landing/Languages/English/ForEducators/styles'
import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Grow = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section maxWidth="1030px">
          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-end"
            mr={40}
          >
            <VideoBlock alignItems="flex-start">
              <Image
                height={220}
                objectFit="cover"
                src={idialogueBadges}
                width={426}
              />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={500}>
            <SectionHeader width={1}>Grow professionally</SectionHeader>
            <SectionDescription mt={16} width={1}>
              Expand your professional network. Attend educational webinars on a
              variety of topics (from SEL to STEM). Get certificates, celebrate
              your achievements and gain recognition in a global community of
              educators.
            </SectionDescription>

            <NativeLink href="#pricing" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth={720} mt={40}>
          <Flex alignSelf="center" justifyContent="flex-end" mr={20}>
            <VideoBlock alignItems="flex-start" height={164} width={320}>
              <Image height={164} src={idialogueBadges} width={320} />
            </VideoBlock>
          </Flex>
          <Flex alignSelf="center" flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Grow professionally
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              textAlign="justify"
              width={1}
            >
              Expand your professional network. Attend educational webinars on a
              variety of topics (from SEL to STEM). Get certificates, celebrate
              your achievements and gain recognition in a global community of
              educators.
            </SectionDescription>

            <NativeLink href="#pricing" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Flex flexWrap="wrap" justifyContent="center" width={1}>
          <SectionHeader
            fontSize="18px"
            justifyContent="center"
            lineHeight="24px"
            textAlign="center"
            width={1}
          >
            Grow professionally
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={20}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={148} width={288}>
              <Image height={148} src={idialogueBadges} width={288} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={1}>
            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              Unleash your students&apos; natural curiosity by allowing them to
              interact with peers from all over the globe in a safe environment.
              Create projects, start a challenge or join a video call with a
              partner classroom! These virtual connections eliminate
              geographical and academic barriers and improve motivation and
              engagement!
            </SectionDescription>

            <Flex justifyContent="center" width={1}>
              <NativeLink href="#pricing" minwidth="180px" mt="16px">
                GET STARTED
              </NativeLink>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Grow
