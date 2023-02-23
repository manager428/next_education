import React from 'react'

import { forStudents } from 'Assets/images/landing'
import { educatorsBrowserGlyph } from 'Assets/svg/landing'

import {
  Boy,
  Container,
  Girl,
} from 'Containers/Pages/Landing/Languages/English/Landing/styles'
import {
  Relative,
  Section,
  SectionDescription,
  SectionHeader,
  VideoBlock,
} from 'Containers/Pages/Landing/styles'

import { Flex, Icon, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Discussions = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={80}
        pt={80}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="1030px">
          <Flex flexWrap="wrap" width={456}>
            <SectionHeader fontSize="22px" mt={16} width={1}>
              Разговорные клубы, челленджи и игровые вечера
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Безопасное пространство, где можно рассказать о своих идеях,
              обсудить волнующие вопросы и поделиться мнением.
            </SectionDescription>
            <SectionDescription fontSize="16px" lineHeight="22px" mt="10px">
              Интерактивные занятия в виде челленджей и тематических игровых
              вечеров, которые помогают детям развивать критическое мышление и
              межкультурное общение и заводить новых друзей со всего мира.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1}>
            <Relative width={1}>
              <Girl left={0} top={100} />
              <VideoBlock
                alignContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
                height={274}
                ml={82}
                width={404}
              >
                <Icon
                  fill="#FFA08C"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width={404}
                  wrapperStyles={{ mb: '-1px' }}
                />
                <Image height={254} src={forStudents} width={404} />
              </VideoBlock>
              <Boy right={0} top={60} />
            </Relative>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={40}
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader
              fontSize="22px"
              justifyContent="center"
              mt={14}
              width={1}
            >
              Разговорные клубы, челленджи и игровые вечера
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt={16}
              textAlign="center"
              width={1}
            >
              Безопасное пространство, где можно рассказать о своих идеях,
              обсудить волнующие вопросы и поделиться мнением.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt="10px"
              textAlign="center"
              width={1}
            >
              Интерактивные занятия в виде челленджей и тематических игровых
              вечеров, которые помогают детям развивать критическое мышление и
              межкультурное общение и заводить новых друзей со всего мира.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Relative justifyContent="center" width={1}>
              <VideoBlock
                alignContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
                height={274}
                width={404}
              >
                <Icon
                  fill="#FFA08C"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width={404}
                  wrapperStyles={{ mb: '-1px' }}
                />
                <Image height={254} src={forStudents} width={404} />
              </VideoBlock>
              <Boy right={15} top="20px" />
            </Relative>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={40}
        pl="16px"
        pr="16px"
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader
              fontSize="22px"
              justifyContent="center"
              mt={14}
              textAlign="center"
              width={1}
            >
              Разговорные клубы, челленджи и игровые вечера
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt={16}
              textAlign="center"
              width={1}
            >
              Безопасное пространство, где можно рассказать о своих идеях,
              обсудить волнующие вопросы и поделиться мнением.
            </SectionDescription>
            <SectionDescription
              fontSize="16px"
              justifyContent="center"
              lineHeight="22px"
              mt="10px"
              textAlign="center"
              width={1}
            >
              Интерактивные занятия в виде челленджей и тематических игровых
              вечеров, которые помогают детям развивать критическое мышление и
              межкультурное общение и заводить новых друзей со всего мира.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Relative justifyContent="center" width={1}>
              <VideoBlock
                alignContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
                maxWidth={400}
                width={1}
              >
                <Icon
                  fill="#FFA08C"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width="100%"
                  wrapperStyles={{ mb: '-1px', width: '100%' }}
                />
                <img alt="for students" src={forStudents.src} />
              </VideoBlock>
            </Relative>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Discussions
