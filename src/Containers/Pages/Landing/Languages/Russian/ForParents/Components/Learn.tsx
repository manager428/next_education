import React from 'react'

import { idialogueExperts } from 'Assets/images/landing'

import {
  Container,
  Section,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'
import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Learn = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth="1030px" mt={40}>
          <Flex flexGrow={1} mr={20}>
            <Flex>
              <VideoBlock alignItems="flex-start" height={270} width={460}>
                <Image height={270} src={idialogueExperts} width={460} />
              </VideoBlock>
            </Flex>
          </Flex>
          <Flex alignSelf="center" flexWrap="wrap" width={550}>
            <SectionHeader
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              width={1}
            >
              Эксперты
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Онлайн лекции от представителей самых востребованных профессий и
              направлений! Как поступить в вуз зарубеж бесплатно? Как работать в
              YouTube? Какие профессии популярны в Японии?
            </SectionDescription>
            <SectionDescription mt={16} width={1}>
              После каждого выступления ребята будут разрабатывать собственные
              проекты и делать презентации на английском.
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
        <Section justifyContent="space-between" maxWidth="720px">
          <Flex alignSelf="center" mr={20}>
            <VideoBlock alignItems="center" height={188} width={320}>
              <Image height={188} src={idialogueExperts} width={320} />
            </VideoBlock>
          </Flex>

          <Flex alignSelf="center" flexWrap="wrap" width={380}>
            <SectionHeader
              fontSize="22px"
              fontWeight={800}
              lineHeight="22px"
              width={1}
            >
              Эксперты
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Онлайн лекции от представителей самых востребованных профессий и
              направлений! Как поступить в вуз зарубеж бесплатно? Как работать в
              YouTube? Какие профессии популярны в Японии?
            </SectionDescription>

            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              После каждого выступления ребята будут разрабатывать собственные
              проекты и делать презентации на английском.
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
        <Section justifyContent="space-between" maxWidth={288}>
          <SectionHeader
            fontSize="18px"
            fontWeight={800}
            justifyContent="center"
            lineHeight="24px"
            width={1}
          >
            Эксперты
          </SectionHeader>

          <Flex mt={14}>
            <VideoBlock alignItems="center" height={170} width={288}>
              <Image height={170} src={idialogueExperts} width={288} />
            </VideoBlock>
          </Flex>

          <SectionDescription
            fontSize="14px"
            justifyContent="center"
            lineHeight="20px"
            mt={14}
            textAlign="justify"
            width={1}
          >
            Онлайн лекции от представителей самых востребованных профессий и
            направлений! Как поступить в вуз зарубеж бесплатно? Как работать в
            YouTube? Какие профессии популярны в Японии?
          </SectionDescription>

          <SectionDescription
            fontSize="14px"
            justifyContent="center"
            lineHeight="20px"
            mt={14}
            textAlign="justify"
            width={1}
          >
            После каждого выступления ребята будут разрабатывать собственные
            проекты и делать презентации на английском.
          </SectionDescription>

          <Flex justifyContent="center" width={1}>
            <NativeLink href="#contact" minwidth="180px" mt="14px">
              GET STARTED
            </NativeLink>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Learn
