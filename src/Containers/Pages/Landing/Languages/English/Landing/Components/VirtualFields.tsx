import React from 'react'

import { forFamilies } from 'Assets/images/landing'
import { educatorsBrowserGlyph } from 'Assets/svg/landing'

import {
  Container,
  FamiliesBoy,
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

const VirtualFields = () => (
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
          <Flex flexWrap="wrap" width={456}>
            <SectionHeader mt={16} width={1}>
              Virtual Field Trips
            </SectionHeader>
            <SectionDescription mt={16} width={1}>
              Immersive real-time 60 mins field trips around the globe that are
              live-streamed by our ambassadors directly from the location.
            </SectionDescription>
            <SectionDescription mt="10px" width={1}>
              No slideshows or pre-recorded videos! Unique extracurricular
              experiences discovering Indian cuisine in Calcutta, learning about
              sustainability in Costa Rica or asking questions about design
              thinking in Silicon Valley.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="flex-end">
            <Flex>
              <VideoBlock alignItems="flex-start" height={274} width={404}>
                <Icon
                  fill="#FFA08C"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width={404}
                  wrapperStyles={{ mb: '-1px' }}
                />
                <Image height={254} src={forFamilies} width={404} />
              </VideoBlock>
              <Relative height={294} width={98}>
                <FamiliesBoy right="13px" top="109px" />
              </Relative>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="white"
        justifyContent="center"
        pb={40}
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader justifyContent="center" mt={14} width={1}>
              Virtual Field Trips
            </SectionHeader>
            <SectionDescription
              justifyContent="center"
              mt={16}
              textAlign="center"
              width={1}
            >
              Immersive real-time 60 mins field trips around the globe that are
              live-streamed by our ambassadors directly from the location.
            </SectionDescription>
            <SectionDescription
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              No slideshows or pre-recorded videos! Unique extracurricular
              experiences discovering Indian cuisine in Calcutta, learning about
              sustainability in Costa Rica or asking questions about design
              thinking in Silicon Valley.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <VideoBlock alignItems="flex-start" height={274} width={404}>
                <Icon
                  fill="#FFA08C"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width={404}
                  wrapperStyles={{ mb: '-1px' }}
                />
                <Image height={254} src={forFamilies} width={404} />
              </VideoBlock>
              <Relative>
                <FamiliesBoy right="-75px" top="37px" />
              </Relative>
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
        <Section justifyContent="space-between" maxWidth="656px">
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <SectionHeader justifyContent="center" mt={14} width={1}>
              Virtual Field Trips
            </SectionHeader>
            <SectionDescription
              justifyContent="center"
              mt={16}
              textAlign="center"
              width={1}
            >
              Immersive real-time 60 mins field trips around the globe that are
              live-streamed by our ambassadors directly from the location.
            </SectionDescription>

            <SectionDescription
              justifyContent="center"
              mt="10px"
              textAlign="center"
              width={1}
            >
              No slideshows or pre-recorded videos! Unique extracurricular
              experiences discovering Indian cuisine in Calcutta, learning about
              sustainability in Costa Rica or asking questions about design
              thinking in Silicon Valley.
            </SectionDescription>
          </Flex>

          <Flex flexGrow={1} justifyContent="center" mt={35}>
            <Flex>
              <VideoBlock alignItems="flex-start" maxWidth={400} width={1}>
                <Icon
                  fill="#FFA08C"
                  height={22}
                  icon={educatorsBrowserGlyph}
                  width="100%"
                  wrapperStyles={{ mb: '-1px', width: '100%' }}
                />
                <img alt="for families" src={forFamilies.src} />
              </VideoBlock>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default VirtualFields
