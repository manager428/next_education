import React from 'react'

import { partnersExperts } from 'Assets/images/landing'

import { Element, Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  Title,
  VideoBlock,
} from '../../styles'
import { Container, Section } from '../styles'

const Now = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Flex justifyContent="center" width={1}>
          <Title>How?</Title>
        </Flex>
        <Section maxWidth="1030px" mt={40}>
          <Flex flexGrow={1} justifyContent="flex-end" mr={40}>
            <VideoBlock
              alignItems="flex-start"
              height={388}
              mt={20}
              width={404}
            >
              <Image height={388} src={partnersExperts} width={404} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={550}>
            <SectionHeader fontSize={28} mt={0} width={1}>
              Share your expertise
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Being a Guest Speaker gives you the opportunity to share your
              expertise with classrooms around the world to inspire and bring
              learning to life for students. Your skills and expertise may be
              just what someone, somewhere in the world is searching for!
              happen!
            </SectionDescription>

            <Element
              fontSize="20px"
              fontWeight={600}
              lineHeight="28px"
              mt={16}
              width={1}
            >
              As a Guest Expert, you can select between three types <br />
              of virtual activities:
            </Element>
            <Element fontSize="20px" mt={16} width={1}>
              📚 Donating pre-recorded content to our educational library
            </Element>
            <Element fontSize="20px" mt={16} width={1}>
              💬 Hosting virtual fireside chats
            </Element>
            <Element fontSize="20px" mt={16} width={1}>
              ✈️ Facilitating virtual field trips
            </Element>

            <NativeLink href="#contact" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Flex justifyContent="center" width={1}>
          <Title fontSize={24} lineHeight="24px">
            How?
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={724} mt={40}>
          <Flex alignItems="flex-end" justifyContent="flex-end">
            <VideoBlock
              alignItems="flex-start"
              height={308}
              mb={35}
              mr={20}
              width={320}
            >
              <Image height={308} src={partnersExperts} width={320} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Share your expertise
            </SectionHeader>
            <SectionDescription
              fontSize={16}
              lineHeight="22px"
              mt="12px"
              width={1}
            >
              Being a Guest Speaker gives you the opportunity to share your
              expertise with classrooms around the world to inspire and bring
              learning to life for students. Your skills and expertise may be
              just what someone, somewhere in the world is searching for!
              happen!
            </SectionDescription>

            <Element
              fontSize={16}
              fontWeight={600}
              lineHeight="22px"
              mt="12px"
              width={1}
            >
              As a Guest Expert, you can select between three types <br />
              of virtual activities:
            </Element>
            <Element fontSize={16} lineHeight="22px" mt="12px" width={1}>
              📚 Donating pre-recorded content to our educational library
            </Element>
            <Element fontSize={16} lineHeight="22px" mt="12px" width={1}>
              💬 Hosting virtual fireside chats
            </Element>
            <Element fontSize={16} lineHeight="22px" mt="12px" width={1}>
              ✈️ Facilitating virtual field trips
            </Element>

            <NativeLink href="#contact" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Flex flexWrap="wrap" justifyContent="center" width={1}>
          <Title
            fontSize={22}
            justifyContent="center"
            lineHeight="22px"
            width={1}
          >
            How?
          </Title>
          <SectionHeader
            fontSize="18px"
            justifyContent="center"
            lineHeight="22px"
            mt={28}
            textAlign="center"
            width={1}
          >
            Share your expertise
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={278} width={288}>
              <Image height={278} src={partnersExperts} width={288} />
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
              Being a Guest Speaker gives you the opportunity to share your
              expertise with classrooms around the world to inspire and bring
              learning to life for students. Your skills and expertise may be
              just what someone, somewhere in the world is searching for!
              happen!
            </SectionDescription>

            <Element
              fontSize={14}
              fontWeight={600}
              lineHeight="20px"
              mt="12px"
              width={1}
            >
              As a Guest Expert, you can select between three types <br />
              of virtual activities:
            </Element>
            <Element fontSize={14} lineHeight="20px" mt="12px" width={1}>
              📚 Donating pre-recorded content to our educational library
            </Element>
            <Element fontSize={14} lineHeight="20px" mt="12px" width={1}>
              💬 Hosting virtual fireside chats
            </Element>
            <Element fontSize={14} lineHeight="20px" mt="12px" width={1}>
              ✈️ Facilitating virtual field trips
            </Element>

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

export default Now
