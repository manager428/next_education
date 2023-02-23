import React from 'react'

import { moneyBackGlyph } from 'Assets/svg/landing'

import { Element, Flex, Icon } from 'Components/UI'

import {
  Container,
  Inner,
} from 'Components/Blocks/Entities/Landing/MoneyBack/styles'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const MoneyBack = () => (
  <Flex width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container width={1}>
        <Inner maxWidth={980}>
          <Flex width={174}>
            <Icon height={154} icon={moneyBackGlyph} width={174} />
          </Flex>
          <Flex alignContent="center" flexWrap="wrap" maxWidth={748} ml={35}>
            <Element fontSize={28} fontWeight={600} width={1}>
              7-day money back guarantee
            </Element>
            <Element fontSize={20} lineHeight="28px" mt="10px">
              We know life can be unpredictable, and sometimes people change
              their minds. Our pledge is simple: If for some reason our platform
              doesn&apos;t work out or you don&apos;t like it – we will
              completely refund your subscription costs in full within 7 days.
            </Element>
          </Flex>
        </Inner>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container width={1}>
        <Inner maxWidth={720}>
          <Flex width={154}>
            <Icon height={154} icon={moneyBackGlyph} width={160} />
          </Flex>
          <Flex alignContent="center" flexWrap="wrap" maxWidth={516} ml={35}>
            <Element fontSize={22} fontWeight={600} width={1}>
              7-day money back guarantee
            </Element>
            <Element fontSize={20} lineHeight="28px" mt="10px">
              We know life can be unpredictable, and sometimes people change
              their minds. Our pledge is simple: If for some reason our platform
              doesn&apos;t work out or you don&apos;t like it – we will
              completely refund your subscription costs in full within 7 days.
            </Element>
          </Flex>
        </Inner>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container width={1}>
        <Inner maxWidth={288}>
          <Flex justifyContent="center" width={1}>
            <Icon height={116} icon={moneyBackGlyph} width={116} />
          </Flex>
          <Flex alignContent="center" flexWrap="wrap" mt={20}>
            <Element
              fontSize={18}
              fontWeight={600}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              7-day money back guarantee
            </Element>
            <Element
              fontSize={14}
              lineHeight="20px"
              mt="10px"
              textAlign="justify"
            >
              We know life can be unpredictable, and sometimes people change
              their minds. Our pledge is simple: If for some reason our platform
              doesn&apos;t work out or you don&apos;t like it – we will
              completely refund your subscription costs in full within 7 days.
            </Element>
          </Flex>
        </Inner>
      </Container>
    </Media>
  </Flex>
)

export default MoneyBack
