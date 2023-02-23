import React from 'react'

import { lessonsToLife } from 'Assets/images/landing'

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

const BringLessons = () => (
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
            <SectionHeader width={1}>Bring your lessons to life</SectionHeader>
            <SectionDescription mt={16} width={1}>
              Connect lessons with experiences, and bring your students
              face-to-face with leading experts from all over the world. Imagine
              being able to visit the Great Wall of China or invite NASA
              Astronauts into your classroom. With iDialogue, you can do just
              that!
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
            <VideoBlock alignItems="flex-start" height={310} width={424}>
              <Image height={310} src={lessonsToLife} width={424} />
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
              Bring your lessons to life
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Connect lessons with experiences, and bring your students
              face-to-face with leading experts from all over the world. Imagine
              being able to visit the Great Wall of China or invite NASA
              Astronauts into your classroom. With iDialogue, you can do just
              that!
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

          <Flex alignSelf="center" justifyContent="flex-start" ml={20}>
            <VideoBlock alignItems="flex-start" height={236} width={320}>
              <Image
                height={236}
                objectFit="contain"
                src={lessonsToLife}
                width={320}
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
              Bring your lessons to life
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={212} width={288}>
                  <Image height={212} src={lessonsToLife} width={288} />
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
              Connect lessons with experiences, and bring your students
              face-to-face with leading experts from all over the world. Imagine
              being able to visit the Great Wall of China or invite NASA
              Astronauts into your classroom. With iDialogue, you can do just
              that!
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default BringLessons
