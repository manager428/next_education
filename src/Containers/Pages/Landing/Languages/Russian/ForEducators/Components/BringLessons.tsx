import React from 'react'

import { lessonsToLife } from 'Assets/images/landing'

import {
  Container,
  Section,
} from 'Containers/Pages/Landing/Languages/English/ForEducators/styles'
import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const BringLessons = () => (
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
              Сделайте обучение веселым
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Учащиеся могут общаться с ведущими
              <br />
              экспертами со всего мира в режиме реального
              <br />
              времени, посетить Великую Китайскую стену или
              <br />
              пообщаться с живыми астронавтами НАСА. С
              <br />
              помощью этой платформы вы сможете вдохнуть
              <br />
              больше жизни в свои уроки и помочь своим
              <br />
              ученикам учиться более увлекательным и
              <br />
              cпособом
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
            <VideoBlock alignItems="flex-start" height={310} width={424}>
              <Image height={310} src={lessonsToLife} width={424} />
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
              Сделайте обучение веселым
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Учащиеся могут общаться с ведущими экспертами со всего мира в
              режиме реального времени, посетить Великую Китайскую стену или
              пообщаться с живыми астронавтами НАСА. С помощью этой платформы вы
              сможете вдохнуть больше жизни в свои уроки и помочь своим ученикам
              учиться более увлекательным и способом
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

          <Flex alignSelf="center" justifyContent="flex-start" ml={20}>
            <VideoBlock alignItems="flex-start" height={236} width={320}>
              <Image
                height={236}
                objectFit="contain"
                src={lessonsToLife}
                width={320}
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
              Сделайте обучение веселым
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={212} width={288}>
                  <Image height={212} src={lessonsToLife} width={288} />
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
              Учащиеся могут общаться с ведущими экспертами со всего мира в
              режиме реального времени, посетить Великую Китайскую стену или
              пообщаться с живыми астронавтами НАСА. С помощью этой платформы вы
              сможете вдохнуть больше жизни в свои уроки и помочь своим ученикам
              учиться более увлекательным и способом
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default BringLessons
