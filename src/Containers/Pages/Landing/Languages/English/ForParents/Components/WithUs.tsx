import React from 'react'

import {
  parentsDiscover,
  parentsJoin,
  parentsSearch,
} from 'Assets/images/landing'

import {
  Container,
  Section,
  Text,
  Title,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const WithUs = () => (
  <Container justifyContent="center" pb={60} pt={60} width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={980}>
        <Flex justifyContent="center" width={1}>
          <Title>With us they will…</Title>
        </Flex>
        <Flex justifyContent="space-between" mt={40} width={1}>
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={252}
          >
            <Image
              height={180}
              objectFit="contain"
              src={parentsJoin}
              width={260}
            />
            <Text
              fontSize="28px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="28px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Connect
            </Text>
            <Text fontSize="18px" lineHeight="24px" mt={14} textAlign="center">
              Meet peers and make friends from 150 countries
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={265}
          >
            <Image
              height={180}
              objectFit="contain"
              src={parentsSearch}
              width={252}
            />
            <Text
              fontSize="28px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Learn
            </Text>
            <Text fontSize="18px" lineHeight="24px" mt={14} textAlign="center">
              Immersive activities designed to <br /> acquire 21 century skills!
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={252}
          >
            <Image
              height={180}
              objectFit="contain"
              src={parentsDiscover}
              width={180}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Discover
            </Text>
            <Text fontSize="18px" lineHeight="24px" mt={14} textAlign="center">
              Explore then world through <br />
              virtual field trips
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={720}>
        <Flex justifyContent="center" width={1}>
          <Title>With us they will…</Title>
        </Flex>
        <Flex justifyContent="space-between" mt={28} width={1}>
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={210}
          >
            <Image
              height={132}
              objectFit="contain"
              src={parentsJoin}
              width={190}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Connect
            </Text>
            <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="center">
              Meet peers and make friends from 150 countries
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={265}
          >
            <Image
              height={132}
              objectFit="contain"
              src={parentsSearch}
              width={185}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Learn
            </Text>
            <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="center">
              Immersive activities designed to <br /> acquire 21 century skills!
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={252}
          >
            <Image
              height={132}
              objectFit="contain"
              src={parentsDiscover}
              width={132}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Discover
            </Text>
            <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="center">
              Explore then world through <br />
              virtual field trips
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title>With us they will…</Title>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="space-between" mt={28} width={1}>
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={1}
          >
            <Image
              height={132}
              objectFit="contain"
              src={parentsJoin}
              width={185}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Connect
            </Text>
            <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="center">
              Meet peers and make friends from 150 countries
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
              height={132}
              objectFit="contain"
              src={parentsSearch}
              width={185}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Learn
            </Text>
            <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="center">
              Immersive activities designed to <br /> acquire 21 century skills!
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
              height={132}
              objectFit="contain"
              src={parentsDiscover}
              width={132}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              textAlign="center"
              width={1}
            >
              Discover
            </Text>
            <Text fontSize="16px" lineHeight="22px" mt={14} textAlign="center">
              Explore then world through <br />
              virtual field trips
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default WithUs
