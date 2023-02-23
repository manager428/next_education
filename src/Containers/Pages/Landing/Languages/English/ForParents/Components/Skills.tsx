import React from 'react'

import { parentsGlobal } from 'Assets/images/landing'

import {
  Container,
  Section,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'
import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Skills = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pt={80} width={1}>
        <Section justifyContent="space-between" maxWidth="1030px">
          <Flex alignSelf="center" flexWrap="wrap" width={500}>
            <SectionHeader width={1}>
              Develop 21st century skills!
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              The main idea behind iDialogue is to help students thrive in our
              interconnected world as they develop creativity, compassion,
              critical thinking, intercultural communication skills, and global
              citizenship.
            </SectionDescription>

            <NativeLink
              href="#pricing"
              mb={70}
              minwidth="180px"
              mt="16px"
              variant="orange"
            >
              GET STARTED
            </NativeLink>
          </Flex>

          <Flex flexGrow={1} ml={20}>
            <Flex>
              <VideoBlock alignItems="flex-start" height={352} width={440}>
                <Image height={352} src={parentsGlobal} width={440} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth={720}>
          <Flex alignSelf="center" flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="22px" width={1}>
              Develop 21st century skills!
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              The main idea behind iDialogue is to help students thrive in our
              interconnected world as they develop creativity, compassion,
              critical thinking, intercultural communication skills, and global
              citizenship.
            </SectionDescription>

            <NativeLink
              href="#pricing"
              mb={67}
              minwidth="180px"
              mt="16px"
              variant="orange"
            >
              GET STARTED
            </NativeLink>
          </Flex>

          <Flex alignItems="flex-end" flexGrow={1} ml="12px">
            <Flex>
              <VideoBlock alignItems="flex-start" height={256} width={320}>
                <Image height={256} src={parentsGlobal} width={320} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth={288}>
          <Flex alignSelf="center" flexWrap="wrap" width={1}>
            <SectionHeader
              fontSize="18px"
              justifyContent="center"
              lineHeight="24px"
              width={1}
            >
              Develop 21st century skills!
            </SectionHeader>
            <SectionDescription
              fontSize="14px"
              justifyContent="center"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              The main idea behind iDialogue is to help students thrive in our
              interconnected world as they develop creativity, compassion,
              critical thinking, intercultural communication skills, and global
              citizenship.
            </SectionDescription>
          </Flex>

          <Flex mt={20} width={1}>
            <Image
              height={236}
              layout="fixed"
              objectFit="cover"
              src={parentsGlobal}
              width={288}
            />
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Skills
