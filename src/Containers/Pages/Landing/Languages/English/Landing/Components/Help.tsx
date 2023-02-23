import React from 'react'

import Link from 'next/link'

import { hereGuide, hereSchedule, hereVideo } from 'Assets/images/landing'

import {
  Container,
  HereBlock,
  HereDescription,
  HereTitle,
  SubTitle,
  Title,
} from 'Containers/Pages/Landing/Languages/English/Landing/styles'
import {
  NativeLink,
  Section,
  SectionDescription,
  SectionHeader,
} from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Help = () => (
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
          <Title fontSize={32} justifyContent="center" width={1}>
            We are always here for you
          </Title>
          <SubTitle justifyContent="center" mt={24} width={1}>
            Our team and our global community are here to support you!
          </SubTitle>

          <Flex justifyContent="space-between" mt={40} width={1}>
            <HereBlock flexWrap="wrap" justifyContent="center" width={280}>
              <Image height="224px" src={hereGuide} width={246} />
              <HereTitle mt={16}>Getting Started Guide</HereTitle>
              <HereDescription mt="16px">
                Learn everything you need to know to get started with iDialogue
              </HereDescription>
              <Link href="https://www.idialogue.com/blog/detailed/41" passHref>
                <NativeLink minwidth="260px" mt="16px">
                  GET THE GUIDE
                </NativeLink>
              </Link>
            </HereBlock>

            <HereBlock flexWrap="wrap" justifyContent="center" width={280}>
              <Image height={224} src={hereVideo} width={224} />
              <HereTitle mt={16}>Getting Started Webinars</HereTitle>
              <HereDescription mt="16px">
                Join our daily webinars to learn the iDialogue foundations
              </HereDescription>

              <Link
                href="https://calendly.com/nataliabut/idialogue-school-demo"
                passHref
              >
                <NativeLink minwidth="260px" mt="16px">
                  SIGN UP FOR THE WEBINAR
                </NativeLink>
              </Link>
            </HereBlock>

            <HereBlock flexWrap="wrap" justifyContent="center" width={280}>
              <Image height={224} src={hereSchedule} width={280} />
              <HereTitle mt={16}>Book a Demo</HereTitle>
              <HereDescription mt="16px">
                Connect with our team to answer all and any of your questions
              </HereDescription>
              <Link href="https://calendly.com/nataliabut/idialogue" passHref>
                <NativeLink minwidth="210px" mt="16px">
                  BOOK A DEMO
                </NativeLink>
              </Link>
            </HereBlock>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media between={[MEDIA_SIZES.TABLET, MEDIA_SIZES.DESKTOP]}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={40}
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="1030px">
          <SectionHeader justifyContent="center" mt={0} width={1}>
            We are always here for you
          </SectionHeader>
          <SectionDescription
            justifyContent="center"
            mt={16}
            textAlign="center"
            width={1}
          >
            Our team and our global community are here to support you!
          </SectionDescription>

          <Flex
            justifyContent="space-between"
            maxWidth="680px"
            mt={40}
            width={1}
          >
            <HereBlock flexWrap="wrap" justifyContent="center" width={210}>
              <Image height={152} src={hereGuide} width={167} />
              <HereTitle mt="12px">Getting Started Guide</HereTitle>
              <HereDescription mt="12px">
                Learn everything you need to know to get started with iDialogue
              </HereDescription>
              <Link href="https://www.idialogue.com/blog/detailed/41" passHref>
                <NativeLink minwidth="210px" mt="16px">
                  GET THE GUIDE
                </NativeLink>
              </Link>
            </HereBlock>

            <HereBlock flexWrap="wrap" justifyContent="center" width={210}>
              <Image height={152} src={hereVideo} width={152} />
              <HereTitle mt="12px">Getting Started Webinars</HereTitle>
              <HereDescription mt="12px">
                Join our daily webinars to learn the iDialogue foundations
              </HereDescription>

              <Link
                href="https://calendly.com/nataliabut/idialogue-school-demo"
                passHref
              >
                <NativeLink minwidth="210px" mt="16px">
                  SIGN UP FOR THE WEBINAR
                </NativeLink>
              </Link>
            </HereBlock>

            <HereBlock flexWrap="wrap" justifyContent="center" width={210}>
              <Image height={152} src={hereSchedule} width={190} />
              <HereTitle mt="12px">Book a Demo</HereTitle>
              <HereDescription mt="12px">
                Connect with our team to answer all and any of your questions
              </HereDescription>
              <Link href="https://calendly.com/nataliabut/idialogue" passHref>
                <NativeLink minwidth="210px" mt="16px">
                  BOOK A DEMO
                </NativeLink>
              </Link>
            </HereBlock>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        p="40px 16px"
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="1030px">
          <SectionHeader justifyContent="center" mt={0} width={1}>
            We are always here for you
          </SectionHeader>
          <SectionDescription
            justifyContent="center"
            mt={16}
            textAlign="center"
            width={1}
          >
            Our team and our global community are here to support you!
          </SectionDescription>

          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            mt={16}
            width={1}
          >
            <HereBlock flexWrap="wrap" justifyContent="center" width={1}>
              <Image height={200} src={hereGuide} width={220} />
              <HereTitle mt="12px">Getting Started Guide</HereTitle>
              <HereDescription mt="12px">
                Learn everything you need to know to get started with iDialogue
              </HereDescription>
              <Link href="https://www.idialogue.com/blog/detailed/41" passHref>
                <NativeLink minwidth="260px" mt="16px">
                  GET THE GUIDE
                </NativeLink>
              </Link>
            </HereBlock>

            <HereBlock
              flexWrap="wrap"
              justifyContent="center"
              mt={40}
              width={1}
            >
              <Image height={200} src={hereVideo} width={200} />
              <HereTitle mt="12px">Getting Started Webinars</HereTitle>
              <HereDescription mt="12px">
                Join our daily webinars to learn the iDialogue foundations
              </HereDescription>

              <Link
                href="https://calendly.com/nataliabut/idialogue-school-demo"
                passHref
              >
                <NativeLink minwidth="260px" mt="16px">
                  SIGN UP FOR THE WEBINAR
                </NativeLink>
              </Link>
            </HereBlock>

            <HereBlock
              flexWrap="wrap"
              justifyContent="center"
              mt={40}
              width={1}
            >
              <Image height={200} src={hereSchedule} width={250} />
              <HereTitle mt="12px">Book a Demo</HereTitle>
              <HereDescription mt="12px">
                Connect with our team to answer all and any of your questions
              </HereDescription>
              <Link href="https://calendly.com/nataliabut/idialogue" passHref>
                <NativeLink minwidth="210px" mt="16px">
                  BOOK A DEMO
                </NativeLink>
              </Link>
            </HereBlock>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Help
