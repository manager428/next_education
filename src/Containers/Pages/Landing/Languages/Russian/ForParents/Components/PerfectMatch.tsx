import React from 'react'

import {
  parentsAgeFourSixteen,
  parentsSkills,
  parentsWorld,
} from 'Assets/images/landing'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section, Text, Title } from '../styles'

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
          <Title fontSize="32px" fontWeight="800">
            Мы идеально подходим для детей:
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
            <Image height={80} src={parentsAgeFourSixteen} width={144} />
            <Text
              fontSize="22px"
              fontWeight={400}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              От 4 до 16 лет
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
              fontWeight={400}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Из любой <br />
              точки мира
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
              fontWeight={400}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              С любым <br /> уровнем языка
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={550}>
        <Flex justifyContent="center" width={1}>
          <Title fontWeight="800">Мы идеально подходим для детей:</Title>
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
            <Image height={70} src={parentsAgeFourSixteen} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              От 4 до 16 лет
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
              Из любой <br />
              точки мира
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
              С любым <br /> уровнем языка
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title
            flexWrap="wrap"
            fontWeight="800"
            justifyContent="center"
            textAlign="center"
          >
            Мы идеально подходим для детей:
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
            <Image height={60} src={parentsAgeFourSixteen} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              От 4 до 16 лет
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
              Из любой <br />
              точки мира
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
              С любым <br /> уровнем языка
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default PerfectMatch
