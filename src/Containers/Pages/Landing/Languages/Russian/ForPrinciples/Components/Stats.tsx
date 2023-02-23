import React from 'react'

import {
  ColoredBox,
  Container,
  Section,
  Text,
} from 'Containers/Pages/Landing/Languages/Russian/Landing/styles'

import { Flex } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

const Stats = () => (
  <Container
    backgroundColor="white"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={920}>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          mt={40}
          width={1}
        >
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <ColoredBox backgroundColor={theme.colors.orange}>8</ColoredBox>

            <Text
              fontSize="22px"
              fontWeight={500}
              lineHeight="27px"
              mt={14}
              textAlign="center"
            >
              лет на рынке
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={220}
          >
            <ColoredBox backgroundColor="#97CCFA">150k</ColoredBox>
            <Text
              fontSize="22px"
              fontWeight={500}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              студентов и школ <br />
              со всего мира
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <ColoredBox backgroundColor="#8DE1D1">160</ColoredBox>

            <Text
              fontSize="22px"
              fontWeight={500}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              стран
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={220}
          >
            <ColoredBox backgroundColor="#8DE1D1">10+</ColoredBox>
            <Text
              fontSize="22px"
              fontWeight={500}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              международных <br />
              наград
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={704}>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          mt={28}
          width={1}
        >
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <ColoredBox backgroundColor={theme.colors.orange}>8</ColoredBox>
            <Text
              fontSize={16}
              fontWeight={500}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              лет на рынке
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <ColoredBox backgroundColor="#97CCFA">150k</ColoredBox>
            <Text
              fontSize={16}
              fontWeight={500}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              студентов и школ
              <br />
              со всего мира
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <ColoredBox backgroundColor="#8DE1D1">160</ColoredBox>
            <Text
              fontSize={16}
              fontWeight={500}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              стран
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <ColoredBox backgroundColor="#8DE1D1">10+</ColoredBox>
            <Text
              fontSize={16}
              fontWeight={500}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              международных
              <br />
              наград
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="space-between"
          mt={28}
          width={1}
        >
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={132}
          >
            <ColoredBox backgroundColor={theme.colors.orange}>8</ColoredBox>
            <Text
              fontSize={14}
              fontWeight={500}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              лет на рынке
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={132}
          >
            <ColoredBox backgroundColor="#97CCFA">150k</ColoredBox>
            <Text
              fontSize={14}
              fontWeight={500}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              студентов и школ <br />
              со всего мира
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={132}
          >
            <ColoredBox backgroundColor="#8DE1D1">160</ColoredBox>
            <Text
              fontSize={14}
              fontWeight={500}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              стран
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={132}
          >
            <ColoredBox backgroundColor="#8DE1D1">10+</ColoredBox>
            <Text
              fontSize={14}
              fontWeight={500}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              международных <br />
              наград
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default Stats
