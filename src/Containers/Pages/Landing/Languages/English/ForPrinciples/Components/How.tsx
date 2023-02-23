import React from 'react'

import { idialogueFeatures } from 'Assets/images/landing'

import {
  Container,
  Section,
  Text,
} from 'Containers/Pages/Landing/Languages/English/ForPrinciples/styles'
import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  Title,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Now = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Flex justifyContent="center" width={1}>
          <Title>
            But{' '}
            <Text color="#49CEB1" fontSize={36} lineHeight="36px">
              how?
            </Text>
            …Simple! As 1...2...3!
          </Title>
        </Flex>
        <Section maxWidth="1030px" mt={40}>
          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-end"
            mr={40}
          >
            <VideoBlock alignItems="flex-start" height={290} width={404}>
              <Image height={290} src={idialogueFeatures} width={404} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={550}>
            <SectionHeader mt={0} width={1}>
              Rise to the challenge
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              This is a time where school differentiation is more important than
              ever because of today&lsquo;s ultra-competitive education market.
              iDialogue helps schools design exciting learning experiences so
              they can focus on meeting their goals for student engagement,
              success rates, and parental satisfaction all while differentiating
              themselves against competitors in their area!
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
        <Flex justifyContent="center" width={1}>
          <Title fontSize={24} lineHeight="24px">
            But{' '}
            <Text color="#49CEB1" fontSize={24} lineHeight="24px">
              how?
            </Text>
            …Simple! As 1...2...3!
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={704} mt={40}>
          <Flex alignSelf="center" justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={224} width={320}>
              <Image
                height={224}
                layout="fixed"
                src={idialogueFeatures}
                width={320}
              />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Rise to the challenge
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              This is a time where school differentiation is more important than
              ever because of today&lsquo;s ultra-competitive education market.
              iDialogue helps schools design exciting learning experiences so
              they can focus on meeting their goals for student engagement,
              success rates, and parental satisfaction all while differentiating
              themselves against competitors in their area!
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
          <Title
            fontSize={22}
            justifyContent="center"
            lineHeight="22px"
            width={1}
          >
            But{' '}
            <Text color="#49CEB1" fontSize={22} lineHeight="22px">
              how?
            </Text>
            …Simple! As 1...2...3!
          </Title>
          <SectionHeader
            fontSize="22px"
            justifyContent="center"
            lineHeight="22px"
            mt={28}
            textAlign="center"
            width={1}
          >
            Rise to the challenge
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={200} width={288}>
              <Image
                height={200}
                layout="fixed"
                src={idialogueFeatures}
                width={288}
              />
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
              This is a time where school differentiation is more important than
              ever because of today&lsquo;s ultra-competitive education market.
              iDialogue helps schools design exciting learning experiences so
              they can focus on meeting their goals for student engagement,
              success rates, and parental satisfaction all while differentiating
              themselves against competitors in their area!
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

export default Now
