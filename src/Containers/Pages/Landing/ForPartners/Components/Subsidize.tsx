import React from 'react'

import { principlesCharity } from 'Assets/images/landing'

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

const Subsidize = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section maxWidth="1030px">
          <Flex flexGrow={1} justifyContent="flex-end" mr={40}>
            <Image height={424} src={principlesCharity} width={404} />
          </Flex>
          <Flex flexWrap="wrap" width={550}>
            <SectionHeader fontSize={28} mt={0} width={1}>
              Subsidize a school
            </SectionHeader>
            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              By subsidizing schools, orphanages or districts, you are making a
              real difference to students across the world, breaking down the
              barriers to learning. Moreover, as part of our cross-compensation
              model, each sponsored school will provide access to one more
              school in an underserved community. Join our mission to make
              education impactful and accessible on a global scale through
              peer-to-peer and classroom connection, communication, and
              collaboration.
              <Element mt={16}>
                Together we can build a more equitable learning environment
                where students everywhere have equal opportunities and
                resources.
              </Element>
            </SectionDescription>

            <NativeLink href="#contact" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth={724}>
          <Flex alignItems="center" justifyContent="flex-end">
            <VideoBlock
              alignItems="flex-start"
              height={334}
              mb={35}
              mr={20}
              width={320}
            >
              <Image height={334} src={principlesCharity} width={320} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Subsidize a school
            </SectionHeader>
            <SectionDescription
              flexWrap="wrap"
              fontSize={16}
              lineHeight="22px"
              mt="12px"
              width={1}
            >
              By subsidizing schools, orphanages or districts, you are making a
              real difference to students across the world, breaking down the
              barriers to learning. Moreover, as part of our cross-compensation
              model, each sponsored school will provide access to one more
              school in an underserved community. Join our mission to make
              education impactful and accessible on a global scale through
              peer-to-peer and classroom connection, communication, and
              collaboration.
              <Element mt={16}>
                Together we can build a more equitable learning environment
                where students everywhere have equal opportunities and
                resources.
              </Element>
            </SectionDescription>

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
          <SectionHeader
            fontSize="18px"
            justifyContent="center"
            lineHeight="22px"
            textAlign="center"
            width={1}
          >
            Subsidize a school
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={300} width={288}>
              <Image height={300} src={principlesCharity} width={288} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={1}>
            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              By subsidizing schools, orphanages or districts, you are making a
              real difference to students across the world, breaking down the
              barriers to learning. Moreover, as part of our cross-compensation
              model, each sponsored school will provide access to one more
              school in an underserved community. Join our mission to make
              education impactful and accessible on a global scale through
              peer-to-peer and classroom connection, communication, and
              collaboration.
              <Element mt={16}>
                Together we can build a more equitable learning environment
                where students everywhere have equal opportunities and
                resources.
              </Element>
            </SectionDescription>

            <Flex justifyContent="center" width={1}>
              <NativeLink href="#contact" minwidth="180px" mt="16px">
                GET STARTED
              </NativeLink>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Subsidize
