import React from 'react'

import {
  educatorsGrow,
  educatorsMotivation,
  educatorsRelationship,
  educatorsResult,
} from 'Assets/images/landing'

import {
  Container,
  Section,
  Text,
  Title,
} from 'Containers/Pages/Landing/Languages/English/ForEducators/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Help = () => (
  <Container
    backgroundColor="#F7FAFF"
    justifyContent="center"
    pb={60}
    pt={60}
    width={1}
  >
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={920}>
        <Flex justifyContent="center" width={1}>
          <Title>We are here to help you…</Title>
        </Flex>
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
            <Image
              height={80}
              src={educatorsMotivation}
              unoptimized
              width={144}
            />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Improve <br />
              students&apos; <br />
              motivation
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={educatorsResult} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Achieve better <br />
              academic results
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={educatorsGrow} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Grow <br />
              professionally
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={200}
          >
            <Image height={80} src={educatorsRelationship} width={144} />
            <Text
              fontSize="22px"
              fontWeight={600}
              lineHeight="28px"
              mt={14}
              textAlign="center"
            >
              Build strong <br />
              relationships with students
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={704}>
        <Flex justifyContent="center" width={1}>
          <Title>We are here to help you…</Title>
        </Flex>
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
            <Image
              height={70}
              src={educatorsMotivation}
              unoptimized
              width={124}
            />
            <Text
              fontSize={16}
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Improve <br />
              students&apos; <br />
              motivation
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={educatorsResult} width={124} />
            <Text
              fontSize={16}
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Achieve better <br />
              academic results
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={educatorsGrow} width={124} />
            <Text
              fontSize={16}
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Grow <br />
              professionally
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={146}
          >
            <Image height={70} src={educatorsRelationship} width={124} />
            <Text
              fontSize={16}
              fontWeight={600}
              lineHeight="22px"
              mt="10px"
              textAlign="center"
            >
              Build strong <br />
              relationships with students
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Section justifyContent="space-between" margin="0 auto" maxWidth={288}>
        <Flex justifyContent="center" width={1}>
          <Title>We are here to help you…</Title>
        </Flex>
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
            <Image
              height={60}
              src={educatorsMotivation}
              unoptimized
              width={104}
            />
            <Text
              fontSize={14}
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Improve <br />
              students&apos; <br />
              motivation
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            width={132}
          >
            <Image height={60} src={educatorsResult} width={104} />
            <Text
              fontSize={14}
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Achieve better <br />
              academic results
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={132}
          >
            <Image height={60} src={educatorsGrow} width={104} />
            <Text
              fontSize={14}
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Grow <br />
              professionally
            </Text>
          </Flex>

          <Flex
            flexShrink={0}
            flexWrap="wrap"
            justifyContent="center"
            mt={28}
            width={132}
          >
            <Image height={60} src={educatorsRelationship} width={104} />
            <Text
              fontSize={14}
              fontWeight={600}
              lineHeight="16px"
              mt="10px"
              textAlign="center"
            >
              Build strong <br />
              relationships with students
            </Text>
          </Flex>
        </Flex>
      </Section>
    </Media>
  </Container>
)

export default Help
