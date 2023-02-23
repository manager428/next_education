import React from 'react'

import { moneyBackGlyph } from 'Assets/svg/landing'

import { Element, Flex, Icon } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Inner } from './styles'

export function MoneyBack() {
  return (
    <Flex width={1}>
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container width={1}>
          <Inner maxWidth={980}>
            <Flex width={174}>
              <Icon height={154} icon={moneyBackGlyph} width={174} />
            </Flex>
            <Flex alignContent="center" flexWrap="wrap" maxWidth={748} ml={35}>
              <Element fontSize={28} fontWeight={800} width={1}>
                Гарантия возврата денег в течение 7 дней
              </Element>
              <Element fontSize={20} lineHeight="28px" mt="10px">
                Жизнь непредсказуема, поэтому мы поймем, если вы передумаете.
                Условия нашей гарантии просты: попробуйте платформу в течение 7
                дней, и если она вам не подходит, сообщите нам об этом до
                истечения пробного периода.
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
              <Element fontSize={22} fontWeight={800} width={1}>
                Гарантия возврата денег в течение 7 дней
              </Element>
              <Element fontSize={20} lineHeight="28px" mt="10px">
                Жизнь непредсказуема, поэтому мы поймем, если вы передумаете.
                Условия нашей гарантии просты: попробуйте платформу в течение 7
                дней, и если она вам не подходит, сообщите нам об этом до
                истечения пробного периода.
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
                fontWeight={800}
                lineHeight="24px"
                textAlign="center"
                width={1}
              >
                Гарантия возврата денег в течение 7 дней
              </Element>
              <Element
                fontSize={14}
                lineHeight="20px"
                mt="10px"
                textAlign="justify"
              >
                Жизнь непредсказуема, поэтому мы поймем, если вы передумаете.
                Условия нашей гарантии просты: попробуйте платформу в течение 7
                дней, и если она вам не подходит, сообщите нам об этом до
                истечения пробного периода.
              </Element>
            </Flex>
          </Inner>
        </Container>
      </Media>
    </Flex>
  )
}
