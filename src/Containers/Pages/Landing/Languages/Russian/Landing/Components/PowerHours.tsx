import React from 'react'

import { powerHours } from 'Assets/images/landing'

import {
  Admin,
  Container,
} from 'Containers/Pages/Landing/Languages/English/Landing/styles'
import {
  Relative,
  Section,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const PowerHours = () => (
  <Flex backgroundColor="#F2FFFC" flexWrap="wrap" p="0px 16px" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={80} pt={80} width={1}>
        <Section justifyContent="space-between" maxWidth="1030px">
          <Flex flexGrow={1}>
            <Flex>
              <Relative height={294} width={98}>
                <Admin left="-18px" top="110px" />
              </Relative>

              <VideoBlock alignItems="flex-start" height={274} width={404}>
                <Image height={274} src={powerHours} width={404} />
              </VideoBlock>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={456}>
            <SectionHeader fontSize="22px" mt={16} width={1}>
              Мастер-классы с экспертами и совместные проекты
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Живые онлайн-встречи с самыми разнообразными экспертами: от ХХ из
              YouTube до самого настоящего космонавта! Это встречи, которые
              пробуждают открытое любопытство к миру, стимулируют и расширяют
              кругозор.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt="10px"
              width={1}
            >
              После каждого выступления ребята будут разрабатывать собственные
              проекты и делать презентации на английском.
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={40} pt={40} width={1}>
        <Section justifyContent="center" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader
              fontSize="22px"
              justifyContent="center"
              mt={14}
              width={1}
            >
              Мастер-классы с экспертами и совместные проекты
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt={16}
              textAlign="center"
              width={1}
            >
              Живые онлайн-встречи с самыми разнообразными экспертами: от ХХ из
              YouTube до самого настоящего космонавта! Это встречи, которые
              пробуждают открытое любопытство к миру, стимулируют и расширяют
              кругозор.
            </SectionDescription>

            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt="10px"
              width={1}
            >
              После каждого выступления ребята будут разрабатывать собственные
              проекты и делать презентации на английском.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <Relative>
                <Admin left="-80px" top="47px" />
              </Relative>

              <VideoBlock alignItems="flex-start" height={274} width={404}>
                <Image height={274} src={powerHours} width={404} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={40} pt={40} width={1}>
        <Section justifyContent="center" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader
              fontSize="22px"
              justifyContent="center"
              mt={14}
              textAlign="center"
              width={1}
            >
              Мастер-классы с экспертами и совместные проекты
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt={16}
              textAlign="center"
              width={1}
            >
              Живые онлайн-встречи с самыми разнообразными экспертами: от ХХ из
              YouTube до самого настоящего космонавта! Это встречи, которые
              пробуждают открытое любопытство к миру, стимулируют и расширяют
              кругозор.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt="10px"
              textAlign="center"
              width={1}
            >
              После каждого выступления ребята будут разрабатывать собственные
              проекты и делать презентации на английском.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <VideoBlock alignItems="flex-start" maxWidth={400} width={1}>
                <img alt="for admins" src={powerHours.src} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default PowerHours
