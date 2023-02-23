import React from 'react'

import { idialogueActivities } from 'Assets/images/landing'

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

const StreamLine = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={80}
        pt={80}
        width={1}
      >
        <Section justifyContent="center" margin="0 auto" maxWidth="1020px">
          <Flex alignSelf="center" flexWrap="wrap" width={500}>
            <SectionHeader width={1}>
              Streamline your classroom routines
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Every tool your classroom needs. In one intuitive
              <br />
              platform. Stream lectures in real-time with built-in video
              <br />
              conferencing tools. Record and upload class meetings
              <br />
              for self-paced learning. Create polls, quizzes, and
              <br />
              synchronous discussions to encourage student
              <br />
              comprehension and participation.
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

          <Flex alignSelf="flex-start" justifyContent="flex-start">
            <VideoBlock
              alignItems="flex-start"
              height={320}
              left="-50px"
              position="relative"
              width={460}
            >
              <Image
                height={320}
                layout="fixed"
                objectFit="contain"
                src={idialogueActivities}
                width={460}
              />
            </VideoBlock>
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
        <Section justifyContent="center" maxWidth="765px">
          <Flex alignSelf="center" flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Streamline your classroom routines
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Every tool your classroom needs. In one intuitive platform. Stream
              lectures in real-time with built-in video conferencing tools.
              Record and upload class meetings for self-paced learning. Create
              polls, quizzes, and synchronous discussions to encourage student
              comprehension and participation.
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

          <Flex alignSelf="center" justifyContent="flex-start" ml={0}>
            <VideoBlock alignItems="flex-start" height={298} width={380}>
              <Image
                height={298}
                objectFit="contain"
                src={idialogueActivities}
                width={380}
              />
            </VideoBlock>
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
              Streamline your classroom routines
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={240} width={288}>
                  <Image height={240} src={idialogueActivities} width={288} />
                </VideoBlock>
              </Flex>
            </Flex>

            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Every tool your classroom needs. In one intuitive platform. Stream
              lectures in real-time with built-in video conferencing tools.
              Record and upload class meetings for self-paced learning. Create
              polls, quizzes, and synchronous discussions to encourage student
              comprehension and participation.
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default StreamLine
