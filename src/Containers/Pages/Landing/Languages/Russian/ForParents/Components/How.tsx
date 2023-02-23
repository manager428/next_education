import React from 'react'

import { idialogueExplore } from 'Assets/images/landing'

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

import { Container, Section } from '../styles'

const Now = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Flex justifyContent="center" width={1}>
          <Title fontSize="32px" fontWeight="800">
            Помимо занятий совершенно бесплатно вас ждут:
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
          <Flex
            alignContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
            width={550}
          >
            <SectionHeader
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              mt="20px"
              width={1}
            >
              Путешествия
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Никаких презентаций и видеозаписей. Все путешествия происходят в
              режиме реального времени! Вместе с местными проводниками мы
              прогуливаемся по самым интересным уголкам планеты! Гид расскажет
              удивительные истории и занимательные факты, вовлекая учеников в
              беседу и обсуждение.
            </SectionDescription>

            <SectionDescription display="inline-block" mt={16} width={1}>
              <strong>
                Вена, Бангкок, Рио-де-Жанейро, Мехико, Перу, Нью Йорк
              </strong>{' '}
              - каждый день новое направление и новая тема!
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
        <Flex justifyContent="center" width={1}>
          <Title fontSize={24} fontWeight="800" lineHeight="24px">
            Помимо занятий совершенно бесплатно вас ждут:
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
            <SectionHeader fontSize="22px" fontWeight={800} lineHeight="26px">
              Путешествия
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Никаких презентаций и видеозаписей. Все путешествия происходят в
              режиме реального времени! Вместе с местными проводниками мы
              прогуливаемся по самым интересным уголкам планеты! Гид расскажет
              удивительные истории и занимательные факты, вовлекая учеников в
              беседу и обсуждение.
            </SectionDescription>

            <SectionDescription
              display="inline-block"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
            >
              <strong>
                Вена, Бангкок, Рио-де-Жанейро, Мехико, Перу, Нью Йорк
              </strong>{' '}
              - каждый день новое направление и новая тема!
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
          <Title
            fontSize={22}
            fontWeight="800"
            justifyContent="center"
            lineHeight="22px"
            textAlign="center"
            width={1}
          >
            Помимо занятий совершенно бесплатно вас ждут:
          </Title>
          <SectionHeader
            fontSize="22px"
            fontWeight={800}
            justifyContent="center"
            lineHeight="22px"
            mt={28}
            textAlign="center"
            width={1}
          >
            Путешествия
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
              Никаких презентаций и видеозаписей. Все путешествия происходят в
              режиме реального времени! Вместе с местными проводниками мы
              прогуливаемся по самым интересным уголкам планеты! Гид расскажет
              удивительные истории и занимательные факты, вовлекая учеников в
              беседу и обсуждение.
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

export default Now
