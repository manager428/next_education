import React from 'react'

import {
  landingImpact,
  landingLoyalty,
  partnersAudience,
} from 'Assets/images/landing'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section, Text, Title } from '../styles'

const Why = () => (
  <Container
    backgroundColor="#F7FAFF"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={980}>
        <Flex justifyContent="center" width={1}>
          <Title>Why?</Title>
        </Flex>
        <Flex justifyContent="space-between" mt={40} width={1}>
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={260}
          >
            <Image
              height={180}
              placeholder="blur"
              src={partnersAudience}
              width={250}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="22px"
              mt={14}
              textAlign="center"
            >
              Reach new audience
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={260}
          >
            <Image
              height={180}
              placeholder="blur"
              src={landingImpact}
              width={207}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Expand your impact
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={260}
          >
            <Image
              height={180}
              placeholder="blur"
              src={landingLoyalty}
              width={220}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Gain customer loyalty
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={720}>
        <Flex justifyContent="center" width={1}>
          <Title>Why?</Title>
        </Flex>
        <Flex justifyContent="space-between" mt={40} width={1}>
          <Flex flexWrap="wrap" justifyContent="center">
            <Image
              height={160}
              placeholder="blur"
              src={partnersAudience}
              width={194}
            />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="16px"
              mt={20}
              textAlign="center"
              width={1}
            >
              Reach new audience
            </Text>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center">
            <Image
              alignSelf="center"
              height={140}
              placeholder="blur"
              src={landingImpact}
              width={161}
            />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="16px"
              mt="auto"
              textAlign="center"
              width={1}
            >
              Expand your impact
            </Text>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center">
            <Image
              height={140}
              placeholder="blur"
              src={landingLoyalty}
              width={170}
            />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="16px"
              mt="auto"
              textAlign="center"
              width={1}
            >
              Gain customer loyalty
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title>Why?</Title>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="space-between" mt={28} width={1}>
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={1}
          >
            <Image
              height={160}
              placeholder="blur"
              src={partnersAudience}
              width={194}
            />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="16px"
              mt={20}
              textAlign="center"
              width={1}
            >
              Reach new audience
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={1}
          >
            <Image
              alignSelf="center"
              height={140}
              placeholder="blur"
              src={landingImpact}
              width={161}
            />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="16px"
              mt="auto"
              textAlign="center"
              width={1}
            >
              Expand your impact
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={1}
          >
            <Image
              height={140}
              placeholder="blur"
              src={landingLoyalty}
              width={170}
            />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="16px"
              mt="auto"
              textAlign="center"
              width={1}
            >
              Gain customer loyalty
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default Why
