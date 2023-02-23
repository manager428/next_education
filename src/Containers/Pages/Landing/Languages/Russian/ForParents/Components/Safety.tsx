import React from 'react'

import {
  parentsNoAdds,
  parentsNoBulling,
  parentsNoSecrets,
  parentsNoWorries,
} from 'Assets/images/landing'
import { plusIconGlyph } from 'Assets/svg/common'
import { equalIconGlyph } from 'Assets/svg/landing'

import { Element, Flex, Icon, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

import { Container, Section, Text, Title } from '../styles'

const Safety = () => (
  <Flex backgroundColor="#F7FAFF" flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={40} width={1}>
        <Section justifyContent="space-between" maxWidth={920}>
          <Flex justifyContent="center" width={1}>
            <Title fontSize="32px" fontWeight="800" textAlign="center">
              Ваше спокойствие и комфорт детей наша главная задача
            </Title>
          </Flex>
          <Flex justifyContent="space-between" mt={40} width={1}>
            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={200}
            >
              <Image height={160} src={parentsNoBulling} width={160} />
              <Text
                fontSize="22px"
                fontWeight={600}
                lineHeight="28px"
                mt={14}
                textAlign="center"
              >
                Никакой <br />
                травли
              </Text>
            </Flex>

            <Flex alignItems="center" flexShrink={0} justifyContent="center">
              <Icon fill="#071D40" icon={plusIconGlyph} size={32} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={200}
            >
              <Image height={160} src={parentsNoSecrets} width={160} />
              <Text
                fontSize="22px"
                fontWeight={600}
                lineHeight="28px"
                mt={14}
                textAlign="center"
              >
                Никаких
                <br />
                секретов
              </Text>
            </Flex>

            <Flex alignItems="center" flexShrink={0} justifyContent="center">
              <Icon fill="#071D40" icon={plusIconGlyph} size={32} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={200}
            >
              <Image height={160} src={parentsNoAdds} width={160} />
              <Text
                fontSize="22px"
                fontWeight={600}
                lineHeight="28px"
                mt={14}
                textAlign="center"
              >
                Никакой
                <br />
                рекламы
              </Text>
            </Flex>

            <Flex alignItems="center" flexShrink={0} justifyContent="center">
              <Icon fill="#071D40" icon={equalIconGlyph} size={32} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={200}
            >
              <Image height={160} src={parentsNoWorries} width={160} />
              <Text
                fontSize="22px"
                fontWeight={600}
                lineHeight="28px"
                mt={14}
                textAlign="center"
              >
                Спокойствие
                <br />
                родителей
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={60} pt={40} width={1}>
        <Section justifyContent="space-between" maxWidth={704}>
          <Flex justifyContent="center" width={1}>
            <Title fontWeight="800">
              Ваше спокойствие и комфорт детей наша главная задача
            </Title>
          </Flex>
          <Flex justifyContent="space-between" mt={40} width={1}>
            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={120}
            >
              <Image height={110} src={parentsNoBulling} width={110} />
              <Text
                fontSize="18px"
                fontWeight={600}
                lineHeight="18px"
                mt={14}
                textAlign="center"
              >
                Никакой <br />
                травли
              </Text>
            </Flex>

            <Flex alignItems="center" flexShrink={0} justifyContent="center">
              <Icon fill="#071D40" icon={plusIconGlyph} size={25} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={120}
            >
              <Image height={110} src={parentsNoSecrets} width={110} />
              <Text
                fontSize="18px"
                fontWeight={600}
                lineHeight="18px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Никаких
                <br />
                секретов
              </Text>
            </Flex>

            <Flex alignItems="center" flexShrink={0} justifyContent="center">
              <Icon fill="#071D40" icon={plusIconGlyph} size={25} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={120}
            >
              <Image height={110} src={parentsNoAdds} width={110} />
              <Text
                fontSize="18px"
                fontWeight={600}
                lineHeight="18px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Никакой
                <br />
                рекламы
              </Text>
            </Flex>

            <Flex alignItems="center" flexShrink={0} justifyContent="center">
              <Icon fill="#071D40" icon={equalIconGlyph} size={25} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={120}
            >
              <Image height={110} src={parentsNoWorries} width={110} />
              <Text
                fontSize="18px"
                fontWeight={600}
                lineHeight="18px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Спокойствие
                <br />
                родителей
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={60} pt={40} width={1}>
        <Section justifyContent="space-between" maxWidth={288}>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Element
              as="span"
              fontSize={18}
              fontWeight={800}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Ваше спокойствие и комфорт детей наша главная задача
            </Element>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" mt="28px" width={1}>
            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={80}
            >
              <Image height={110} src={parentsNoWorries} width={110} />
              <Text
                fontSize="14px"
                fontWeight={600}
                lineHeight="18px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Спокойствие
                <br />
                родителей
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt={14} width={1}>
              <Icon fill="#071D40" icon={equalIconGlyph} size={25} />
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" mt={14} width={1}>
            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={65}
            >
              <Image height={60} src={parentsNoBulling} width={60} />
              <Text
                fontSize="12px"
                fontWeight={600}
                lineHeight="14px"
                mt={14}
                textAlign="center"
              >
                Никакой <br />
                травли
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="center">
              <Icon fill="#071D40" icon={plusIconGlyph} size={10} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={60}
            >
              <Image height={60} src={parentsNoSecrets} width={60} />
              <Text
                fontSize="12px"
                fontWeight={600}
                lineHeight="14px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Никаких
                <br />
                секретов
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="center">
              <Icon fill="#071D40" icon={plusIconGlyph} size={10} />
            </Flex>

            <Flex
              alignItems="center"
              flexShrink={0}
              flexWrap="wrap"
              justifyContent="center"
              width={60}
            >
              <Image height={60} src={parentsNoAdds} width={60} />
              <Text
                fontSize="12px"
                fontWeight={600}
                lineHeight="14px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Никакой
                <br />
                рекламы
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Safety
