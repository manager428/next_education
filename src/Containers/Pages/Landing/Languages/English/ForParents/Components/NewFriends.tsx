import React from 'react'

import { idialogueEnvironment } from 'Assets/images/landing'

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

const NewFriends = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={80} pt={80} width={1}>
        <Section justifyContent="space-between" maxWidth="1020px">
          <Flex flexWrap="wrap" width={500}>
            <SectionHeader width={1}>
              Make new friends in a safe <br />
              environment
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Students connect with peers from different countries through live
              discussions, debates and other interactive learning activities.
              <br />
              <br />
              Cultural exchanges provide an opportunity to explore other
              cultures, traditions, customs, beliefs, societies, languages while
              building students’ self-awareness, social awareness, and
              relationship skills. All of these skills are important for
              students’ academic, social, and eventually, professional lives.
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
              <VideoBlock alignItems="flex-start" height={408} width={432}>
                <Image height={408} src={idialogueEnvironment} width={432} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth="704px">
          <Flex flexWrap="wrap" width={380}>
            <SectionHeader fontSize="22px" lineHeight="26px">
              Make new friends in a safe <br />
              environment
            </SectionHeader>
            <SectionDescription
              fontSize="16px"
              lineHeight="22px"
              mt={16}
              width={1}
            >
              Students connect with peers from different countries through live
              discussions, debates and other interactive learning activities.
              <br />
              <br />
              Cultural exchanges provide an opportunity to explore other
              cultures, traditions, customs, beliefs, societies, languages while
              building students’ self-awareness, social awareness, and
              relationship skills. All of these skills are important for
              students’ academic, social, and eventually, professional lives.
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
              <VideoBlock alignItems="flex-start" height={282} width={300}>
                <Image height={282} src={idialogueEnvironment} width={300} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={60} pt={60} width={1}>
        <Section justifyContent="space-between" maxWidth="288px">
          <Flex flexWrap="wrap" width={1}>
            <SectionHeader
              fontSize="18px"
              justifyContent="center"
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Make new friends in a safe <br />
              environment
            </SectionHeader>

            <Flex
              alignSelf="center"
              flexGrow={1}
              justifyContent="flex-start"
              mt={20}
            >
              <Flex>
                <VideoBlock alignItems="flex-start" height={282} width={288}>
                  <Image height={282} src={idialogueEnvironment} width={288} />
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
              Students connect with peers from different countries through live
              discussions, debates and other interactive learning activities.
              <br />
              <br />
              Cultural exchanges provide an opportunity to explore other
              cultures, traditions, customs, beliefs, societies, languages while
              building students’ self-awareness, social awareness, and
              relationship skills. All of these skills are important for
              students’ academic, social, and eventually, professional lives.
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default NewFriends
