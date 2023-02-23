import React from 'react'

import { idialogueExplore } from 'Assets/images/landing'

import {
  Container,
  Section,
  Text,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'
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
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Flex justifyContent="center" width={1}>
          <Title>
            But{' '}
            <Text color="#49CEB1" fontSize={36} lineHeight="36px">
              how?
            </Text>
            …Simple!
          </Title>
        </Flex>
        <Section maxWidth="1030px" mt={40}>
          <Flex flexGrow={1} justifyContent="flex-end" mr={40}>
            <Flex>
              <VideoBlock alignItems="flex-start" height={428} width={400}>
                <Image height={428} src={idialogueExplore} width={400} />
              </VideoBlock>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={550}>
            <SectionHeader mt={0} width={1}>
              Explore the world through <br />
              virtual field trips
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              With iDialogue students are invited to travel around the globe
              with no passport, no plane tickets and no luggage.
              <br />
              <br />
              These immersive, virtual activities include topics such as Indian
              cousin from Calcutta, sustainability from Costa Rica and design
              thinking from Silicon Valley.
              <br />
              <br />
              The tours last about 60 mins and are live-streamed by the guides
              directly from the location. Forget about slideshows or
              pre-recorded videos, this is a live adventure and anything can
              happen!
            </SectionDescription>

            <NativeLink href="#pricing" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
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
        <Flex justifyContent="center" width={1}>
          <Title fontSize={24} lineHeight="24px">
            But{' '}
            <Text color="#49CEB1" fontSize={24} lineHeight="24px">
              how?
            </Text>
            …Simple!
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={704} mt={40}>
          <Flex justifyContent="flex-end">
            <Flex>
              <VideoBlock alignItems="flex-start" height={320} width={300}>
                <Image height={320} src={idialogueExplore} width={300} />
              </VideoBlock>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Explore the world through <br />
              virtual field trips
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              With iDialogue students are invited to travel around the globe
              with no passport, no plane tickets and no luggage.
              <br />
              <br />
              These immersive, virtual activities include topics such as Indian
              cousin from Calcutta, sustainability from Costa Rica and design
              thinking from Silicon Valley.
              <br />
              <br />
              The tours last about 60 mins and are live-streamed by the guides
              directly from the location. Forget about slideshows or
              pre-recorded videos, this is a live adventure and anything can
              happen!
            </SectionDescription>

            <NativeLink href="#pricing" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
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
            …Simple!
          </Title>
          <SectionHeader
            fontSize="22px"
            justifyContent="center"
            lineHeight="22px"
            mt={28}
            textAlign="center"
            width={1}
          >
            Explore the world through <br />
            virtual field trips
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <Flex>
              <VideoBlock alignItems="flex-start" height={306} width={288}>
                <Image height={306} src={idialogueExplore} width={288} />
              </VideoBlock>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={1}>
            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              With iDialogue students are invited to travel around the globe
              with no passport, no plane tickets and no luggage.
              <br />
              <br />
              These immersive, virtual activities include topics such as Indian
              cousin from Calcutta, sustainability from Costa Rica and design
              thinking from Silicon Valley.
              <br />
              <br />
              The tours last about 60 mins and are live-streamed by the guides
              directly from the location. Forget about slideshows or
              pre-recorded videos, this is a live adventure and anything can
              happen!
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
