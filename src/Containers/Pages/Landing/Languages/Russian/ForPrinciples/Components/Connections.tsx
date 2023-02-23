import React from 'react'

import { idialogueCollaborate } from 'Assets/images/landing'

import {
  NativeLink,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Element, Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section } from '../styles'

const Connections = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={80}
        pt={80}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={980}>
          <Flex flexWrap="wrap" width={500}>
            <SectionHeader
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              width={1}
            >
              Станьте частью международного соообщества!
            </SectionHeader>
            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              Организуйте эффективную практику освоения английского языка
              благодаря общению и реализации совместных проектов с языковыми
              школами и детьми из 150 стран.
            </SectionDescription>

            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              Мероприятия на платформе могут быть легко адаптированы под любой
              уровень английского языка.
            </SectionDescription>

            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              Такой подход к обучению повышает интерес и мотивацию студентов,
              развивает их социально-культурные и коммуникативные навыки.
            </SectionDescription>

            <SectionDescription flexWrap="wrap" mt={16} width={1}>
              <Element fontStyle="italic" fontWeight={600} mt={16}>
                Пришло время учиться вместе с миром, а не только о нем узнавать!
              </Element>
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

          <Flex
            alignSelf="flex-start"
            flexGrow={1}
            justifyContent="flex-start"
            ml={20}
          >
            <Flex>
              <VideoBlock alignItems="flex-start" height={406} width={460}>
                <Image
                  height={406}
                  objectFit="contain"
                  src={idialogueCollaborate}
                  width={460}
                />
              </VideoBlock>
            </Flex>
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
        <Section justifyContent="space-between" maxWidth={740}>
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Станьте частью международного соообщества!
            </SectionHeader>
            <SectionDescription
              flexWrap="wrap"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Организуйте эффективную практику освоения английского языка
              благодаря общению и реализации совместных проектов с языковыми
              школами и детьми из 150 стран.
            </SectionDescription>

            <SectionDescription
              flexWrap="wrap"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Мероприятия на платформе могут быть легко адаптированы под любой
              уровень английского языка.
            </SectionDescription>

            <SectionDescription
              flexWrap="wrap"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Такой подход к обучению повышает интерес и мотивацию студентов,
              развивает их социально-культурные и коммуникативные навыки.
            </SectionDescription>

            <SectionDescription
              flexWrap="wrap"
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              <Element fontStyle="italic" fontWeight={600} mt={16}>
                Пришло время учиться вместе с миром, а не только о нем узнавать!
              </Element>
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

          <Flex
            alignSelf="center"
            flexGrow={1}
            justifyContent="flex-start"
            ml={20}
          >
            <Flex>
              <VideoBlock alignItems="flex-start" height={220} width={320}>
                <Image height={220} src={idialogueCollaborate} width={320} />
              </VideoBlock>
            </Flex>
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
              justifyContent="center"
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Станьте частью международного соообщества!
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={200} width={288}>
                  <Image height={200} src={idialogueCollaborate} width={288} />
                </VideoBlock>
              </Flex>
            </Flex>

            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Организуйте эффективную практику освоения английского языка
              благодаря общению и реализации совместных проектов с языковыми
              школами и детьми из 150 стран.
            </SectionDescription>

            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Мероприятия на платформе могут быть легко адаптированы под любой
              уровень английского языка.
            </SectionDescription>

            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              Такой подход к обучению повышает интерес и мотивацию студентов,
              развивает их социально-культурные и коммуникативные навыки.
            </SectionDescription>

            <SectionDescription
              flexWrap="wrap"
              fontSize="14px"
              lineHeight="20px"
              mt={20}
              textAlign="justify"
              width={1}
            >
              <Element fontStyle="italic" fontWeight={600} mt={16}>
                Пришло время учиться вместе с миром, а не только о нем узнавать!
              </Element>
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Connections
