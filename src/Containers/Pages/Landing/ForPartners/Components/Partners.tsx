import React from 'react'

import {
  african,
  airbus,
  aisec,
  asteroid,
  beginnings,
  delloite,
  go,
  tks,
} from 'Assets/images/landing'

import { Element, Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section, Title } from '../styles'

const Partners = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={980}>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title justifyContent="center" width={1}>
              Join our <span>impact</span> partners
            </Title>
            <Element
              fontSize={20}
              lineHeight="28px"
              mt={24}
              textAlign="center"
              width={1}
            >
              The participation and generosity of our partners from around the
              globe is what <br /> truly makes iDialogue an element for change
              and progress.
            </Element>
          </Flex>
          <Flex flexWrap="wrap" mt={40} width={1}>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              width={1}
            >
              <Image height={34} src={delloite} width={162} />
              <Image height={34} src={aisec} width={236} />
              <Image height={34} src={airbus} width={470} />
            </Flex>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              mt={50}
              width={1}
            >
              <Image height={88} src={african} width={109} />
              <Image height={54} src={tks} width={114} />
              <Image height={68} src={go} width={81} />
              <Image height={68} src={beginnings} width={216} />
              <Image height={68} src={asteroid} width={216} />
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={60}
        pt={60}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={704}>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title justifyContent="center" width={1}>
              Join our <span>impact</span> partners
            </Title>
            <Element
              fontSize={16}
              lineHeight="22px"
              mt={24}
              textAlign="center"
              width={1}
            >
              The participation and generosity of our partners from around the
              globe is what <br /> truly makes iDialogue an element for change
              and progress.
            </Element>
          </Flex>
          <Flex flexWrap="wrap" mt={40} width={1}>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              width={1}
            >
              <Image height={24} src={delloite} width={114} />
              <Image height={24} src={aisec} width={168} />
              <Image height={24} src={airbus} width={332} />
            </Flex>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              mt={40}
              width={1}
            >
              <Image height={68} src={african} width={84} />
              <Image height={34} src={tks} width={71} />
              <Image height={48} src={go} width={57} />
              <Image height={48} src={beginnings} width={152} />
              <Image height={48} src={asteroid} width={152} />
            </Flex>
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
        <Section justifyContent="space-between" maxWidth={288}>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Title justifyContent="center" width={1}>
              Join our <span>impact</span> partners
            </Title>
            <Element
              fontSize={14}
              lineHeight="20px"
              mt={24}
              textAlign="center"
              width={1}
            >
              The participation and generosity of our partners from around the
              globe is what <br /> truly makes iDialogue an element for change
              and progress.
            </Element>
          </Flex>
          <Flex flexWrap="wrap" mt={40} width={1}>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              width={1}
            >
              <Image height={20} src={delloite} width={95} />
              <Image height={20} src={aisec} width={140} />
            </Flex>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              mt={20}
              width={1}
            >
              <Image height={20} src={airbus} width={276} />
            </Flex>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              maxWidth={204}
              ml="auto"
              mr="auto"
              mt={20}
              width={1}
            >
              <Image height={40} src={african} width={50} />
              <Image height={28} src={tks} width={58} />
              <Image height={40} src={go} width={48} />
            </Flex>
            <Flex
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              mt={20}
              width={1}
            >
              <Image height={40} src={beginnings} width={128} />
              <Image height={40} src={asteroid} width={126} />
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Partners
