import React from 'react'

import { forPartners } from 'Assets/images/landing'
import { educatorsBrowserGlyph } from 'Assets/svg/landing'

import {
  Container,
  Partners,
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

const CorporateSocial = () => (
  <Flex backgroundColor="#F8F1FC" flexWrap="wrap" p="0px 16px" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container justifyContent="center" pb={80} pt={80} width={1}>
        <Section justifyContent="space-between" maxWidth="1030px">
          <Flex flexGrow={1}>
            <Flex>
              <Relative height={303} width={140}>
                <Partners top={93} />
              </Relative>

              <VideoBlock alignItems="flex-start" height={274} width={404}>
                <Icon
                  fill="#49CEB1"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width={404}
                  wrapperStyles={{ mb: '-1px' }}
                />
                <Image height={254} src={forPartners} width={404} />
              </VideoBlock>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={436}>
            <SectionHeader mt={16} width={1}>
              Corporate Social Responsibility
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              At iDialogue we believe in future where all children have a chance
              to thrive and fulfil their potential in our globalized community
              as they develop creativity, compassion and intercultural skills.
              We are using business to help schools and students from
              underprivileged communities, and excited to share that we are
              evolving the cross-compensation model.
            </SectionDescription>

            <SectionDescription mt="10px" width={1}>
              We can be part of your company’s loyalty programme by offering
              special conditions to your employees, organising Digital Family
              Days or Digital corporate team-building events.
            </SectionDescription>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container justifyContent="center" pb={40} pt={40} width={1}>
        <Section justifyContent="center" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader justifyContent="center" mt={14} width={1}>
              Corporate Social Responsibility
            </SectionHeader>
            <SectionDescription
              justifyContent="center"
              mt={16}
              textAlign="center"
              width={1}
            >
              At iDialogue we believe in future where all children have a chance
              to thrive and fulfil their potential in our globalized community
              as they develop creativity, compassion and intercultural skills.
              We are using business to help schools and students from
              underprivileged communities, and excited to share that we are
              evolving the cross-compensation model.
            </SectionDescription>

            <SectionDescription
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              We can be part of your company’s loyalty programme by offering
              special conditions to your employees, organising Digital Family
              Days or Digital corporate team-building events.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <Relative>
                <Partners left="-106px" top={25} />
              </Relative>

              <VideoBlock alignItems="flex-start" height={274} width={404}>
                <Icon
                  fill="#49CEB1"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width={404}
                  wrapperStyles={{ mb: '-1px' }}
                />
                <Image height={254} src={forPartners} width={404} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container justifyContent="center" pb={40} pt={40} width={1}>
        <Section justifyContent="center" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader justifyContent="center" mt={14} width={1}>
              Corporate Social Responsibility
            </SectionHeader>
            <SectionDescription
              justifyContent="center"
              mt={16}
              textAlign="center"
              width={1}
            >
              At iDialogue we believe in future where all children have a chance
              to thrive and fulfil their potential in our globalized community
              as they develop creativity, compassion and intercultural skills.
              We are using business to help schools and students from
              underprivileged communities, and excited to share that we are
              evolving the cross-compensation model.
            </SectionDescription>

            <SectionDescription
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              We can be part of your company’s loyalty programme by offering
              special conditions to your employees, organising Digital Family
              Days or Digital corporate team-building events.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <VideoBlock alignItems="flex-start" maxWidth={400} width={1}>
                <Icon
                  fill="#49CEB1"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width="100%"
                  wrapperStyles={{ mb: '-1px', width: '100%' }}
                />
                <img alt="for partners" src={forPartners.src} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default CorporateSocial
