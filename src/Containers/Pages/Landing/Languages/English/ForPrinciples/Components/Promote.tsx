import React from 'react'

import { principlesCharity } from 'Assets/images/landing'

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

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Promote = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section maxWidth="1030px" mt={40}>
          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-end"
            mr={40}
          >
            <VideoBlock alignItems="flex-start" height={424} width={404}>
              <Image height={424} src={principlesCharity} width={404} />
            </VideoBlock>
          </Flex>
          <Flex alignItems="flex-start" flexWrap="wrap" width={550}>
            <SectionHeader mt={0} width={1}>
              Promote change and equity in education
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Each school subscription sponsors one school in an underserved
              community. By bringing positive change into your school, you also
              give access to a global educational experience to those who could
              not afford it otherwise. Join our mission to make education
              impactful and accessible on a global scale through peer-to-peer
              and classroom connection, communication, and collaboration.
              Together we can build a more equitable learning environment where
              students everywhere have equal opportunities and resources.
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
        <Section justifyContent="space-between" maxWidth={730} mt={40}>
          <Flex alignSelf="center" justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={334} width={320}>
              <Image
                height={334}
                layout="fixed"
                src={principlesCharity}
                width={320}
              />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Promote change and equity in education
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Each school subscription sponsors one school in an underserved
              community. By bringing positive change into your school, you also
              give access to a global educational experience to those who could
              not afford it otherwise. Join our mission to make education
              impactful and accessible on a global scale through peer-to-peer
              and classroom connection, communication, and collaboration.
              Together we can build a more equitable learning environment where
              students everywhere have equal opportunities and resources.
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
            fontSize="22px"
            justifyContent="center"
            lineHeight="22px"
            mt={28}
            textAlign="center"
            width={1}
          >
            Promote change and equity in education
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={300} width={288}>
              <Image
                height={300}
                layout="fixed"
                src={principlesCharity}
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
              Each school subscription sponsors one school in an underserved
              community. By bringing positive change into your school, you also
              give access to a global educational experience to those who could
              not afford it otherwise. Join our mission to make education
              impactful and accessible on a global scale through peer-to-peer
              and classroom connection, communication, and collaboration.
              Together we can build a more equitable learning environment where
              students everywhere have equal opportunities and resources.
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

export default Promote
