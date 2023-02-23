import React from 'react'

import { idialogueFeatures } from 'Assets/images/landing'

import {
  NativeLink,
  SectionDescription,
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
            Как достичь таких результатов?
          </Title>
        </Flex>
        <Section maxWidth="1030px" mt={40}>
          <Flex flexGrow={1} justifyContent="flex-end" mr={40}>
            <VideoBlock alignItems="flex-start" height={290} width={404}>
              <Image height={290} src={idialogueFeatures} width={404} />
            </VideoBlock>
          </Flex>
          <Flex alignItems="flex-start" flexWrap="wrap" width={550}>
            <SectionDescription fontSize="16px" mt="10px" width={1}>
              С iDialogue обучение превращается в приключение.
              <br />
              Дополните свои уроки занятиями, которые помогут
              <br />
              развить критическое мышление и независимость,
              <br />
              самостоятельность, компетентность и
              <br />
              коммуникативные социальные навыки у учеников.
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
        <Flex justifyContent="center" width={1}>
          <Title fontSize={24} fontWeight="800" lineHeight="24px">
            Как достичь таких результатов?
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={704} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={224} width={320}>
              <Image height={224} src={idialogueFeatures} width={320} />
            </VideoBlock>
          </Flex>
          <Flex
            alignItems="flex-start"
            alignSelf="center"
            flexWrap="wrap"
            width={380}
          >
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              С iDialogue обучение превращается в приключение.
              <br />
              Дополните свои уроки занятиями, которые помогут
              <br />
              развить критическое мышление и независимость,
              <br />
              самостоятельность, компетентность и
              <br />
              коммуникативные социальные навыки у учеников.
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
          <Title
            fontSize={22}
            fontWeight="800"
            justifyContent="center"
            lineHeight="22px"
            textAlign="center"
            width={1}
          >
            Как достичь таких результатов?
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={20}>
          <Flex justifyContent="flex-end">
            <Flex>
              <VideoBlock alignItems="flex-start" height={202} width={288}>
                <Image height={202} src={idialogueFeatures} width={288} />
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
              С iDialogue обучение превращается в приключение. Дополните свои
              уроки занятиями, которые помогут развить критическое мышление и
              независимость, самостоятельность, компетентность и коммуникативные
              социальные навыки у учеников.
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

export default Now
