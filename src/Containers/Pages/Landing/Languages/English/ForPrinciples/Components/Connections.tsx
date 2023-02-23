import React from 'react'

import { idialogueCollaborate } from 'Assets/images/landing'

import {
  Container,
  Section,
} from 'Containers/Pages/Landing/Languages/English/ForPrinciples/styles'
import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Element, Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Connections = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={80}
        pt={80}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={980}>
          <Flex flexWrap="wrap" width={500}>
            <SectionHeader width={1}>Build global connections</SectionHeader>
            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              Transform classrooms into global learning centers by connecting
              students with partners from 150 countries for collaborative
              projects and discussions as part of their coursework.
              <Element mt={16}>
                Our collaborative activities can be easily customized to meet
                the needs of any class, in any discipline.
              </Element>
              <Element mt={16}>
                This educational approach creates learning opportunities in
                which students can achieve academic goals while developing a
                deeper understanding of social, emotional, and cultural
                competencies.
              </Element>
              <Element fontStyle="italic" fontWeight={600} mt={16}>
                It’s time to learn with the world, and not just about it!
              </Element>
            </SectionDescription>

            <NativeLink
              href="#pricing"
              minwidth="180px"
              mt="16px"
              variant="orange"
            >
              GET STARTED
            </NativeLink>
          </Flex>

          <Flex
            alignSelf="flex-start"
            flexGrow={1}
            justifyContent="flex-start"
            ml={20}
          >
            <Flex>
              <VideoBlock alignItems="flex-start" height={406} width={460}>
                <Image
                  height={406}
                  objectFit="contain"
                  src={idialogueCollaborate}
                  width={460}
                />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={740}>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Build global connections
            </SectionHeader>
            <SectionDescription
              flexWrap="wrap"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Transform classrooms into global learning centers by connecting
              students with partners from 150 countries for collaborative
              projects and discussions as part of their coursework.
              <Element mt={16}>
                Our collaborative activities can be easily customized to meet
                the needs of any class, in any discipline.
              </Element>
              <Element mt={16}>
                This educational approach creates learning opportunities in
                which students can achieve academic goals while developing a
                deeper understanding of social, emotional, and cultural
                competencies.
              </Element>
              <Element fontStyle="italic" fontWeight={600} mt={16}>
                It’s time to learn with the world, and not just about it!
              </Element>
            </SectionDescription>

            <NativeLink
              href="#pricing"
              minwidth="180px"
              mt="16px"
              variant="orange"
            >
              GET STARTED
            </NativeLink>
          </Flex>

          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-start"
            ml={20}
          >
            <Flex>
              <VideoBlock alignItems="flex-start" height={220} width={320}>
                <Image height={220} src={idialogueCollaborate} width={320} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="288px">
          <Flex flexWrap="wrap" width={1}>
            <SectionHeader
              fontSize="18px"
              justifyContent="center"
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Build global connections
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={200} width={288}>
                  <Image height={200} src={idialogueCollaborate} width={288} />
                </VideoBlock>
              </Flex>
            </Flex>

            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Transform classrooms into global learning centers by connecting
              students with partners from 150 countries for collaborative
              projects and discussions as part of their coursework.
              <Element mt={16}>
                Our collaborative activities can be easily customized to meet
                the needs of any class, in any discipline.
              </Element>
              <Element mt={16}>
                This educational approach creates learning opportunities in
                which students can achieve academic goals while developing a
                deeper understanding of social, emotional, and cultural
                competencies.
              </Element>
              <Element fontStyle="italic" fontWeight={600} mt={16}>
                It’s time to learn with the world, and not just about it!
              </Element>
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Connections
