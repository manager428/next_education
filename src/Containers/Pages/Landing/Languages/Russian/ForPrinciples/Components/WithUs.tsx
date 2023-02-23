import React from 'react'

import {
  principlesGrow,
  principlesRecognition,
  principlesStandout,
} from 'Assets/images/landing'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section, Text, Title } from '../styles'

const WithUs = () => (
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
          <Title fontSize="32px" lineHeight="32px">
            С нами вы:
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
            <Image height={80} src={principlesGrow} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Увеличите средний чек
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={principlesRecognition} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Станьте частью международного соообщества
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={principlesStandout} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Отстроитесь от конкурентов
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={550}>
        <Flex justifyContent="center" width={1}>
          <Title>С нами вы:</Title>
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
            <Image height={70} src={principlesGrow} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Увеличите средний чек
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={principlesRecognition} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Станьте частью международного соообщества
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={principlesStandout} width={124} />
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Отстроитесь от конкурентов
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title flexWrap="wrap" justifyContent="center">
            С нами вы:
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
            <Image height={60} src={principlesGrow} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Увеличите средний чек
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={132}
          >
            <Image height={60} src={principlesRecognition} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Станьте частью международного соообщества
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={180}
          >
            <Image height={60} src={principlesStandout} width={104} />
            <Text
              fontSize="14px"
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Отстроитесь от конкурентов
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default WithUs
