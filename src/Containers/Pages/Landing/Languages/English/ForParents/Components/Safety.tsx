import React from 'react'

import {
  parentsNoAdds,
  parentsNoBulling,
  parentsNoSecrets,
  parentsNoWorries,
} from 'Assets/images/landing'
import { plusIconGlyph } from 'Assets/svg/common'
import { equalIconGlyph } from 'Assets/svg/landing'

import {
  Container,
  Section,
  Text,
  Title,
} from 'Containers/Pages/Landing/Languages/English/ForParents/styles'

import { Element, Flex, Icon, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

const Safety = () => (
  <Flex flexWrap="wrap" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={60} pt={40} width={1}>
        <Section justifyContent="space-between" maxWidth={920}>
          <Flex justifyContent="center" width={1}>
            <Title>
              Your child <span>safety</span> is paramount!
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
                No Bullying
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
                No Secrets
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
                No Adds
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
                No Worries
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
            <Title>
              Your child <span>safety</span> is paramount!
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
                No Bullying
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
                No Secrets
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
                No Adds
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
                No Worries
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
              fontWeight={600}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Your child{' '}
              <Element as="span" color={theme.colors.green}>
                safety
              </Element>{' '}
              is paramount!
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
                No Worries
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
                No Bullying
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
                No Secrets
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
                No Adds
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Safety
