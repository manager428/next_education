import React from 'react'

import { principlesCharity } from 'Assets/images/landing'

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

const Promote = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section maxWidth="1030px" mt={40}>
          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-end"
            mr={40}
          >
            <VideoBlock alignItems="flex-start" height={424} width={404}>
              <Image height={424} src={principlesCharity} width={404} />
            </VideoBlock>
          </Flex>
          <Flex alignItems="flex-start" flexWrap="wrap" width={550}>
            <SectionHeader
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              width={1}
            >
              Вносите свой вклад в качественное изменение системы образования
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Часть прибыли мы направляем на то, чтобы дать доступ к платформе
              школам из малообеспеченных стран.
            </SectionDescription>

            <SectionDescription mt={16} width={1}>
              Станьте частью нашей миссии и делайте образование более
              эффективным и доступным в глобальном масштабе благодаря
              межкультурному общению и сотрудничеству с классами и языковыми
              школами из разных стран мира.
            </SectionDescription>

            <SectionDescription mt={16} width={1}>
              Вместе мы сможем построить более справедливую учебную среду, где
              студенты из любой страны смогут иметь равные возможности и ресурсы
              для обучения.
            </SectionDescription>

            <NativeLink href="#pricing" minwidth="180px" mt="16px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth={730} mt={40}>
          <Flex alignSelf="center" justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={334} width={320}>
              <Image
                height={334}
                layout="fixed"
                src={principlesCharity}
                width={320}
              />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Вносите свой вклад в качественное изменение системы образования
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Часть прибыли мы направляем на то, чтобы дать доступ к платформе
              школам из малообеспеченных стран.
            </SectionDescription>

            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Станьте частью нашей миссии и делайте образование более
              эффективным и доступным в глобальном масштабе благодаря
              межкультурному общению и сотрудничеству с классами и языковыми
              школами из разных стран мира.
            </SectionDescription>

            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Вместе мы сможем построить более справедливую учебную среду, где
              студенты из любой страны смогут иметь равные возможности и ресурсы
              для обучения.
            </SectionDescription>

            <NativeLink href="#pricing" minwidth="180px" mt="16px">
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
            fontSize="22px"
            justifyContent="center"
            lineHeight="22px"
            mt={28}
            textAlign="center"
            width={1}
          >
            Вносите свой вклад в качественное изменение системы образования
          </SectionHeader>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={300} width={288}>
              <Image
                height={300}
                layout="fixed"
                src={principlesCharity}
                width={288}
              />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={1}>
            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              Часть прибыли мы направляем на то, чтобы дать доступ к платформе
              школам из малообеспеченных стран.
            </SectionDescription>

            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              Станьте частью нашей миссии и делайте образование более
              эффективным и доступным в глобальном масштабе благодаря
              межкультурному общению и сотрудничеству с классами и языковыми
              школами из разных стран мира.
            </SectionDescription>

            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              Вместе мы сможем построить более справедливую учебную среду, где
              студенты из любой страны смогут иметь равные возможности и ресурсы
              для обучения.
            </SectionDescription>

            <Flex justifyContent="center" width={1}>
              <NativeLink href="#pricing" minwidth="180px" mt="16px">
                GET STARTED
              </NativeLink>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Promote
