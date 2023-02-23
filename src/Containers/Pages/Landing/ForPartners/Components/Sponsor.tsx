import React from 'react'

import { partnersChallenge } from 'Assets/images/landing'

import { Element, Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from '../../styles'
import { Container, Section } from '../styles'

const Sponsor = () => (
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
            <SectionHeader width={1}>Sponsor a challenge</SectionHeader>
            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              Every month we organize Challenges centered around essential
              topics (like Sustainability, Human Rights, and Emotional
              well-being). These learning adventures are designed to
              intrinsically motivate and engage students in the discussion
              process by harnessing gaming principles that meet their
              psychological needs for autonomy, competency, and social
              relationships.
              <Element fontWeight={600} mt={16} width={1}>
                Reach out if you would like to propose an idea for our next
                challenge!
              </Element>
            </SectionDescription>

            <NativeLink
              href="#contact"
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
            <VideoBlock alignItems="flex-start" height={274} width={404}>
              <Image height={254} src={partnersChallenge} width={404} />
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
        <Section justifyContent="space-between" maxWidth={740}>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Sponsor a challenge
            </SectionHeader>
            <SectionDescription
              flexWrap="wrap"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Every month we organize Challenges centered around essential
              topics (like Sustainability, Human Rights, and Emotional
              well-being). These learning adventures are designed to
              intrinsically motivate and engage students in the discussion
              process by harnessing gaming principles that meet their
              psychological needs for autonomy, competency, and social
              relationships.
              <Element fontWeight={600} mt={16} width={1}>
                Reach out if you would like to propose an idea for our next
                challenge!
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
              <VideoBlock alignItems="flex-start" height={202} width={320}>
                <Image height={202} src={partnersChallenge} width={320} />
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
              Sponsor a challenge
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <VideoBlock alignItems="flex-start" height={200} width={288}>
                <Image height={200} src={partnersChallenge} width={288} />
              </VideoBlock>
            </Flex>

            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Every month we organize Challenges centered around essential
              topics (like Sustainability, Human Rights, and Emotional
              well-being). These learning adventures are designed to
              intrinsically motivate and engage students in the discussion
              process by harnessing gaming principles that meet their
              psychological needs for autonomy, competency, and social
              relationships.
              <Element fontWeight={600} mt={16} width={1}>
                Reach out if you would like to propose an idea for our next
                challenge!
              </Element>
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Sponsor
