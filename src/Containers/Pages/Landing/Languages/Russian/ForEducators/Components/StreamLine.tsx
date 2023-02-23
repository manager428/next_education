import React from 'react'

import { idialogueActivities } from 'Assets/images/landing'

import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section } from '../styles'

const StreamLine = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={80}
        pt={80}
        width={1}
      >
        <Section justifyContent="center" margin="0 auto" maxWidth="1020px">
          <Flex alignSelf="center" flexWrap="wrap" width={500}>
            <SectionHeader
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              width={1}
            >
              Сделайте свои уроки более
              <br />
              увлекательными и
              <br />
              интересными!
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Эта интуитивно понятная платформа
              <br />
              предоставляет все необходимые инструменты
              <br />
              для проведения онлайн-уроков, записи и<br />
              загрузки их для самостоятельного изучения,
              <br />
              создания опросов, викторин и дискуссий для
              <br />
              повышения интереса и вовлеченности
            </SectionDescription>

            <NativeLink
              href="#pricing"
              minwidth="180px"
              mt="16px"
              variant="orange"
            >
              GET STARTED
            </NativeLink>
          </Flex>

          <Flex alignSelf="flex-start" justifyContent="flex-start">
            <VideoBlock
              alignItems="flex-start"
              height={320}
              left="-50px"
              position="relative"
              width={460}
            >
              <Image
                height={320}
                layout="fixed"
                objectFit="contain"
                src={idialogueActivities}
                width={460}
              />
            </VideoBlock>
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
        <Section justifyContent="center" maxWidth="765px">
          <Flex alignSelf="center" flexWrap="wrap" width={380}>
            <SectionHeader
              fontSize="22px"
              fontWeight={800}
              lineHeight="22px"
              width={1}
            >
              Сделайте свои уроки более увлекательными и интересными!
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Эта интуитивно понятная платформа предоставляет все необходимые
              инструменты для проведения онлайн-уроков, записи и загрузки их для
              самостоятельного изучения, создания опросов, викторин и дискуссий
              для повышения интереса и вовлеченности
            </SectionDescription>

            <NativeLink
              href="#pricing"
              minwidth="180px"
              mt="16px"
              variant="orange"
            >
              GET STARTED
            </NativeLink>
          </Flex>

          <Flex alignSelf="center" justifyContent="flex-start" ml={0}>
            <VideoBlock alignItems="flex-start" height={298} width={380}>
              <Image
                height={298}
                objectFit="contain"
                src={idialogueActivities}
                width={380}
              />
            </VideoBlock>
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
        <Section justifyContent="space-between" maxWidth="288px">
          <Flex flexWrap="wrap" width={1}>
            <SectionHeader
              fontSize="18px"
              fontWeight={800}
              justifyContent="center"
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Сделайте свои уроки более увлекательными и интересными!
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={240} width={288}>
                  <Image height={240} src={idialogueActivities} width={288} />
                </VideoBlock>
              </Flex>
            </Flex>

            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Эта интуитивно понятная платформа предоставляет все необходимые
              инструменты для проведения онлайн-уроков, записи и загрузки их для
              самостоятельного изучения, создания опросов, викторин и дискуссий
              для повышения интереса и вовлеченности
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default StreamLine
