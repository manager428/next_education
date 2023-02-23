import React from 'react'

import {
  parentsDiscover,
  parentsEffective,
  parentsJoin,
  parentsMethodic,
  parentsPlatform,
  parentsSearch,
} from 'Assets/images/landing'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section, Text, Title } from '../styles'

const LIST = [
  {
    title: 'Общение',
    image: parentsJoin,
    description:
      'Групповые занятия с ровесниками из разных стран погружают ребенка в англоязычную среду и помогают развивать разговорные навыки.',
  },
  {
    title: 'Обучение',
    image: parentsSearch,
    description:
      'Занятия без использования родного языка — самый быстрый путь к освоению английского. Это живая практика и море позитивных эмоций.',
  },
  {
    title: 'Приключения',
    image: parentsDiscover,
    description:
      'Виртуальные путешествия по музеям, чудесам света и самым интересным местам планеты! В режиме реального времени!',
  },
  {
    title: 'Гибкое расписание',
    image: parentsEffective,
    description:
      'Уроки длятся 30 минут и проходят в комфортной для ребенка обстановке. В экономите время на поездках к репетитору и не рискуете подхватить грипп 🙂.',
  },
  {
    title: 'Удобная платформа',
    image: parentsPlatform,
    description:
      'Никаких сложных установок и скачиваний! Все в одном месте онлайн-уроки, тематические игры, домашние задания, разговорные клубы по интересам и VR-приключения вовлекают ребенка в процесс обучения с первых минут.',
  },
  {
    title: 'Эффективная методика',
    image: parentsMethodic,
    description:
      'Мы учим по методу Спикера - сочетание Кембриджской коммуникативной методики и метода полного физического реагирования (TPR). Мы не заставляем учиться. Мы влюбляем в английский.',
  },
]

const WithUs = () => (
  <Container justifyContent="center" pb={60} pt={60} width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={980}>
        <Flex justifyContent="center" width={1}>
          <Title fontSize="32px" fontWeight="800">
            Обучение в iDialogue это:
          </Title>
        </Flex>
        <Flex justifyContent="space-between" mt={40} width={1}>
          {LIST.slice(0, 3).map(item => (
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              key={item.title}
              width={300}
            >
              <Image
                height={180}
                objectFit="contain"
                src={item.image}
                width={260}
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
                {item.title}
              </Text>
              <Text
                fontSize="16px"
                lineHeight="22px"
                mt={14}
                textAlign="center"
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex justifyContent="space-between" mt={40} width={1}>
          {LIST.slice(3, 6).map(item => (
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              key={item.title}
              width={300}
            >
              <Image
                height={180}
                objectFit="contain"
                src={item.image}
                width={260}
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
                {item.title}
              </Text>
              <Text
                fontSize="16px"
                lineHeight="22px"
                mt={14}
                textAlign="center"
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={720}>
        <Flex justifyContent="center" width={1}>
          <Title fontWeight="800">Обучение в iDialogue это:</Title>
        </Flex>

        <Flex justifyContent="space-between" mt={28} width={1}>
          {LIST.slice(0, 3).map(item => (
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              key={item.title}
              width={210}
            >
              <Image
                height={132}
                objectFit="contain"
                src={item.image}
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
                {item.title}
              </Text>
              <Text
                fontSize="16px"
                lineHeight="22px"
                mt={14}
                textAlign="center"
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Flex justifyContent="space-between" mt={28} width={1}>
          {LIST.slice(3, 6).map(item => (
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              key={item.title}
              width={210}
            >
              <Image
                height={132}
                objectFit="contain"
                src={item.image}
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
                {item.title}
              </Text>
              <Text
                fontSize="16px"
                lineHeight="22px"
                mt={14}
                textAlign="center"
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title fontWeight="800">Обучение в iDialogue это:</Title>
        </Flex>

        <Flex flexWrap="wrap" justifyContent="space-between" mt={28} width={1}>
          {LIST.map(item => (
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              key={item.title}
              mb="28px"
              width={1}
            >
              <Image
                height={132}
                objectFit="contain"
                src={item.image}
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
                {item.title}
              </Text>
              <Text
                fontSize="16px"
                lineHeight="22px"
                mt={14}
                textAlign="center"
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default WithUs
