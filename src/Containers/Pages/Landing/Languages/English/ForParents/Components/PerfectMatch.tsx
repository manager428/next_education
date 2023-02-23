import React from 'react'

import { parentsAge, parentsSkills, parentsWorld } from 'Assets/images/landing'

import {
  Container,
  Section,
  Text,
  Title,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const PerfectMatch = () => (
  <Container
    backgroundColor="#F7FAFF"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={720}>
        <Flex justifyContent="center" width={1}>
          <Title>
            We are a <span>perfect</span> match for students that:
          </Title>
        </Flex>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          mt={40}
          width={1}
        >
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={parentsAge} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              7-16 years old
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={parentsWorld} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Anywhere in <br /> the world
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={parentsSkills} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Basic English skills
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={550}>
        <Flex justifyContent="center" width={1}>
          <Title>
            We are a <span>perfect</span> match for students that:
          </Title>
        </Flex>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          mt={40}
          width={1}
        >
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={parentsAge} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              7-16 years old
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={parentsWorld} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Anywhere in <br /> the world
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={parentsSkills} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Basic English skills
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title flexWrap="wrap" justifyContent="center">
            We are a <span>perfect</span> match for students that:
          </Title>
        </Flex>
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="center"
          mt={40}
          width={1}
        >
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={132}
          >
            <Image height={60} src={parentsAge} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              7-16 years old
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={132}
          >
            <Image height={60} src={parentsSkills} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Basic English skills
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={180}
          >
            <Image height={60} src={parentsWorld} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Anywhere in <br /> the world
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default PerfectMatch
