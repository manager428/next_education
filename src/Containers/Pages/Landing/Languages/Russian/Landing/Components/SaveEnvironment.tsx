import React from 'react'

import { landingLaptop3, safeEnv } from 'Assets/images/landing'

import { Container } from 'Containers/Pages/Landing/Languages/English/Landing/styles'
import {
  GreenMaskBlock,
  Section,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const SaveEnvironment = () => (
  <Flex backgroundColor="#F0F9FF" flexWrap="wrap" p="0px 16px" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" width={1}>
        <Section
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1030px"
        >
          <Flex flexGrow={1} height="100%">
            <GreenMaskBlock alignItems="center">
              <VideoBlock alignItems="flex-start">
                <Image height={320} src={safeEnv} width={464} />
              </VideoBlock>
            </GreenMaskBlock>
          </Flex>
          <Flex flexWrap="wrap" pb={80} pt={80} width={456}>
            <SectionHeader
              fontSize="22px"
              fontWeight={600}
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Безопасная среда и удобная платформа
            </SectionHeader>
            <SectionDescription fontSize="16px" mt={16} width={1}>
              Защищенная интерактивная онлайн платформа, эффективные
              инструменты, специально подобранный контент и дружеская атмосфера.
              Модерируемая экосистема с фокусом на практику английского языка и
              межкультурное общение.
            </SectionDescription>
            <SectionDescription fontSize="16px" mt="10px" width={1}>
              Все в одном месте: онлайн-уроки, тематические игры, домашние
              задания, разговорные клубы по интересам и VR приключения вовлекают
              ребенка в процесс обучения с первых минут и повышают мотивацию к
              изучению английского языка.
            </SectionDescription>
            <SectionDescription fontSize="16px" mt="10px" width={1}>
              Версия для компьютера и собственное приложение для мобильного
              телефона
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={40} pt={40} width={1}>
        <Section alignItems="center" justifyContent="center" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader
              fontSize="22px"
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              width={1}
            >
              Безопасная среда и удобная платформа
            </SectionHeader>

            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              mt={16}
              textAlign="center"
              width={1}
            >
              Защищенная интерактивная онлайн платформа, эффективные
              инструменты, специально подобранный контент и дружеская атмосфера.
              Модерируемая экосистема с фокусом на практику английского языка и
              межкультурное общение.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              Все в одном месте: онлайн-уроки, тематические игры, домашние
              задания, разговорные клубы по интересам и VR приключения вовлекают
              ребенка в процесс обучения с первых минут и повышают мотивацию к
              изучению английского языка.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              Версия для компьютера и собственное приложение для мобильного
              телефона
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex height="100%">
              <GreenMaskBlock alignItems="center" width={1}>
                <VideoBlock alignItems="flex-start" height={320} width={464}>
                  <Image height={320} src={safeEnv} width={464} />
                </VideoBlock>
              </GreenMaskBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={40} pt={40} width={1}>
        <Section alignItems="center" justifyContent="center" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader
              fontSize="22px"
              justifyContent="center"
              lineHeight="22px"
              mt={14}
              width={1}
            >
              Безопасная среда и удобная платформа
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              mt={16}
              textAlign="center"
              width={1}
            >
              Защищенная интерактивная онлайн платформа, эффективные
              инструменты, специально подобранный контент и дружеская атмосфера.
              Модерируемая экосистема с фокусом на практику английского языка и
              межкультурное общение.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              Все в одном месте: онлайн-уроки, тематические игры, домашние
              задания, разговорные клубы по интересам и VR приключения вовлекают
              ребенка в процесс обучения с первых минут и повышают мотивацию к
              изучению английского языка.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              Версия для компьютера и собственное приложение для мобильного
              телефона
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <VideoBlock alignItems="flex-start" maxWidth={400} width={1}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="educators logo" src={landingLaptop3.src} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default SaveEnvironment
