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
          <Title fontSize="32px" lineHeight="32px">
            Но как? Просто!
          </Title>
        </Flex>
        <Section maxWidth="1030px" mt={40}>
          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-end"
            mr={40}
          >
            <VideoBlock alignItems="flex-start" height={290} width={404}>
              <Image height={290} src={idialogueFeatures} width={404} />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={550}>
            <SectionDescription mt={16} width={1}>
              В iDialogue мы предлагаем эффективные и<br />
              современные инструменты, которые помогут
              <br />
              школам дополнить и разнообразить занятия.
            </SectionDescription>
            <SectionDescription mt={16} width={1}>
              Вам больше не придется прилагать
              <br />
              дополнительные усилия, чтобы выделяться на
              <br />
              сверхконкурентном рынке. Вы сможете направить
              <br />
              внимание на более важные задачи: эффективнее
              <br />
              вовлекать учеников в процесс обучения, повышать
              <br />
              мотивацию и результаты.
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
          <Title fontSize={24} lineHeight="24px">
            Но как? Просто!
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={704} mt={40}>
          <Flex alignSelf="center" justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={224} width={320}>
              <Image
                height={224}
                layout="fixed"
                src={idialogueFeatures}
                width={320}
              />
            </VideoBlock>
          </Flex>
          <Flex flexWrap="wrap" width={380}>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              В iDialogue мы предлагаем эффективные и современные инструменты,
              которые помогут школам дополнить и разнообразить занятия.
            </SectionDescription>

            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Вам больше не придется прилагать дополнительные усилия, чтобы
              выделяться на сверхконкурентном рынке. Вы сможете направить
              внимание на более важные задачи: эффективнее вовлекать учеников в
              процесс обучения, повышать мотивацию и результаты.
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
            justifyContent="center"
            lineHeight="22px"
            width={1}
          >
            Но как? Просто!
          </Title>
        </Flex>
        <Section justifyContent="space-between" maxWidth={288} mt={40}>
          <Flex justifyContent="flex-end">
            <VideoBlock alignItems="flex-start" height={200} width={288}>
              <Image
                height={200}
                layout="fixed"
                src={idialogueFeatures}
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
              В iDialogue мы предлагаем эффективные и современные инструменты,
              которые помогут школам дополнить и разнообразить занятия.
            </SectionDescription>

            <SectionDescription
              fontSize="14px"
              lineHeight="20px"
              mt={14}
              textAlign="justify"
              width={1}
            >
              Вам больше не придется прилагать дополнительные усилия, чтобы
              выделяться на сверхконкурентном рынке. Вы сможете направить
              внимание на более важные задачи: эффективнее вовлекать учеников в
              процесс обучения, повышать мотивацию и результаты.
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
