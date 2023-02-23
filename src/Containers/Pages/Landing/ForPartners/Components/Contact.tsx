import React, { useState } from 'react'

import Link from 'next/link'

import {
  aboutEmailGlyph,
  aboutFbGlyph,
  aboutInstagramGlyph,
  aboutLinkedGlyph,
} from 'Assets/svg/about'

import {
  Button,
  FormBackground,
  FormContainer,
} from 'Containers/Pages/About/styles'

import { Element, Flex, Icon } from 'Components/UI'

import { BookForm, ContactForm } from 'Components/Blocks/Entities/Contact/Forms'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

import { Container, Section, Text, Title } from '../styles'

const Contact = () => {
  const [activeForm, setActiveForm] = useState<'contact' | 'booking'>('contact')

  return (
    <Flex flexWrap="wrap" width={1}>
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container
          backgroundColor="#F7FAFF"
          id="contact"
          justifyContent="center"
          pb={10}
          pt={60}
          width={1}
        >
          <Title justifyContent="center" width={1}>
            Let’s make something great together!
          </Title>
          <Element
            fontSize="20px"
            lineHeight="28px"
            mt={24}
            textAlign="center"
            width={1}
          >
            As a global conductor for understanding and change, we look forward{' '}
            <br /> to welcoming you into our global community.
          </Element>

          <Section pb={110} pt={74}>
            <Container alignItems="flex-start" justifyContent="center">
              <Flex
                flexShrink={0}
                flexWrap="wrap"
                maxWidth={365}
                mt={57}
                width={1}
              >
                <Text
                  as="h2"
                  fontSize="32px"
                  fontWeight="600"
                  mb={22}
                  width={1}
                >
                  Our Contacts
                </Text>
                <Text fontSize="16px" lineHeight="22px" mb={20} width={1}>
                  Our team is always happy to hear from you and is open to new
                  collaboration and partnerships.
                </Text>
                <Flex flexWrap="wrap" width={1}>
                  <Flex alignItems="center">
                    <Icon icon={aboutEmailGlyph} />
                    <Text fontSize="18px" fontWeight={600} ml={14}>
                      Email Us:{' '}
                      <Link href="mailto:info@idialogue.com" passHref>
                        <Text
                          as="a"
                          color={theme.colors.font.primary}
                          fontSize="18px"
                        >
                          info@idialogue.com
                        </Text>
                      </Link>
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutInstagramGlyph} />
                    <Text fontSize="18px" fontWeight={600} ml={14}>
                      <Link
                        href="https://instagram.com/idialogue_global"
                        passHref
                      >
                        <Text
                          as="a"
                          color={theme.colors.font.primary}
                          fontSize="18px"
                          target="_blank"
                        >
                          Instagram: idialogue_global
                        </Text>
                      </Link>
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutFbGlyph} />
                    <Link href="https://www.facebook.com/idialoguelab" passHref>
                      <Text
                        as="a"
                        color={theme.colors.font.primary}
                        fontSize="18px"
                        fontWeight={600}
                        ml={14}
                        target="_blank"
                      >
                        Facebook: idialoguelab
                      </Text>
                    </Link>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutLinkedGlyph} />
                    <Link
                      href="https://www.linkedin.com/company/idialoguelab"
                      passHref
                    >
                      <Text
                        as="a"
                        color={theme.colors.font.primary}
                        fontSize="18px"
                        fontWeight={600}
                        ml={14}
                        target="_blank"
                      >
                        LinkedIn: idialoguelab
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                alignContent="center"
                alignItems="center"
                flexWrap="wrap"
                maxWidth={424}
                ml={40}
                position="relative"
              >
                <FormBackground />
                <FormContainer>
                  <Flex alignItems="center" height="42px">
                    <Button
                      active={activeForm === 'booking'}
                      onClick={e => {
                        e.preventDefault()
                        setActiveForm('booking')
                      }}
                    >
                      Request a Demo
                    </Button>
                    <Text color="#828282" fontSize="16px" ml="11px" mr="11px">
                      Or
                    </Text>
                    <Button
                      active={activeForm === 'contact'}
                      onClick={e => {
                        e.preventDefault()
                        setActiveForm('contact')
                      }}
                    >
                      Drop Us a Line ✍️
                    </Button>
                  </Flex>

                  {activeForm === 'contact' ? <ContactForm /> : <BookForm />}
                </FormContainer>
              </Flex>
            </Container>
          </Section>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Container
          backgroundColor="#F7FAFF"
          id="contact"
          justifyContent="center"
          pb={60}
          pt={60}
          width={1}
        >
          <Section maxWidth={704}>
            <Title justifyContent="center" textAlign="center" width={1}>
              Let’s make something great together!
            </Title>
            <Element
              fontSize="20px"
              lineHeight="28px"
              mt={24}
              textAlign="center"
              width={1}
            >
              As a global conductor for understanding and change, we look
              forward <br /> to welcoming you into our global community.
            </Element>

            <Container alignItems="flex-start" justifyContent="center">
              <Flex
                alignContent="center"
                alignItems="center"
                flexWrap="wrap"
                maxWidth={424}
                mt={56}
                position="relative"
              >
                <FormBackground />
                <FormContainer>
                  <Flex alignItems="center" height="42px">
                    <Button
                      active={activeForm === 'booking'}
                      onClick={e => {
                        e.preventDefault()
                        setActiveForm('booking')
                      }}
                    >
                      Request a Demo
                    </Button>
                    <Text color="#828282" fontSize="16px" ml="11px" mr="11px">
                      Or
                    </Text>
                    <Button
                      active={activeForm === 'contact'}
                      onClick={e => {
                        e.preventDefault()
                        setActiveForm('contact')
                      }}
                    >
                      Drop Us a Line ✍️
                    </Button>
                  </Flex>

                  {activeForm === 'contact' ? <ContactForm /> : <BookForm />}
                </FormContainer>
              </Flex>

              <Flex
                flexShrink={0}
                flexWrap="wrap"
                maxWidth={365}
                mt={57}
                width={1}
              >
                <Text
                  as="h2"
                  fontSize="32px"
                  fontWeight="600"
                  mb={22}
                  textAlign="center"
                  width={1}
                >
                  Our Contacts
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="22px"
                  mb={20}
                  textAlign="center"
                  width={1}
                >
                  Our team is always happy to hear from you and is open to new
                  collaboration and partnerships.
                </Text>
                <Flex
                  alignContent="center"
                  flexDirection="column"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  width={1}
                >
                  <Flex alignItems="center" width={304}>
                    <Icon icon={aboutEmailGlyph} />
                    <Text fontSize="18px" fontWeight={600} ml={14}>
                      Email Us:{' '}
                      <Link href="mailto:info@idialogue.com" passHref>
                        <Text
                          as="a"
                          color={theme.colors.font.primary}
                          fontSize="18px"
                        >
                          info@idialogue.com
                        </Text>
                      </Link>
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutInstagramGlyph} />
                    <Text fontSize="18px" fontWeight={600} ml={14}>
                      <Link
                        href="https://instagram.com/idialogue_global"
                        passHref
                      >
                        <Text
                          as="a"
                          color={theme.colors.font.primary}
                          fontSize="18px"
                          target="_blank"
                        >
                          Instagram: idialogue_global
                        </Text>
                      </Link>
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutFbGlyph} />
                    <Link href="https://www.facebook.com/idialoguelab" passHref>
                      <Text
                        as="a"
                        color={theme.colors.font.primary}
                        fontSize="18px"
                        fontWeight={600}
                        ml={14}
                        target="_blank"
                      >
                        Facebook: idialoguelab
                      </Text>
                    </Link>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutLinkedGlyph} />
                    <Link
                      href="https://www.linkedin.com/company/idialoguelab"
                      passHref
                    >
                      <Text
                        as="a"
                        color={theme.colors.font.primary}
                        fontSize="18px"
                        fontWeight={600}
                        ml={14}
                        target="_blank"
                      >
                        LinkedIn: idialoguelab
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Section>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Container
          backgroundColor="#F7FAFF"
          id="contact"
          justifyContent="center"
          pb={60}
          pt={60}
          width={1}
        >
          <Section maxWidth={288}>
            <Title justifyContent="center" textAlign="center" width={1}>
              Let’s make something great together!
            </Title>
            <Element
              fontSize="20px"
              lineHeight="28px"
              mt={24}
              textAlign="center"
              width={1}
            >
              As a global conductor for understanding and change, we look
              forward to welcoming you into our global community.
            </Element>

            <Container alignItems="flex-start" justifyContent="center">
              <Flex
                alignContent="center"
                alignItems="center"
                flexWrap="wrap"
                mt={28}
                position="relative"
              >
                <FormContainer className="mobile-form-container">
                  <Flex
                    alignItems="center"
                    height="42px"
                    justifyContent="center"
                    mb={20}
                    ml="auto"
                    mr="auto"
                  >
                    <Button
                      active={activeForm === 'booking'}
                      onClick={e => {
                        e.preventDefault()
                        setActiveForm('booking')
                      }}
                    >
                      Request a Demo
                    </Button>
                    <Text color="#828282" fontSize="16px" ml="11px" mr="11px">
                      Or
                    </Text>
                    <Button
                      active={activeForm === 'contact'}
                      onClick={e => {
                        e.preventDefault()
                        setActiveForm('contact')
                      }}
                    >
                      Drop Us a Line ✍️
                    </Button>
                  </Flex>

                  {activeForm === 'contact' ? <ContactForm /> : <BookForm />}
                </FormContainer>
              </Flex>

              <Flex flexShrink={0} flexWrap="wrap" mt={40} width={1}>
                <Text
                  as="h2"
                  fontSize="32px"
                  fontWeight="600"
                  mb={22}
                  textAlign="center"
                  width={1}
                >
                  Our Contacts
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="22px"
                  mb={20}
                  textAlign="center"
                  width={1}
                >
                  Our team is always happy to hear from you and is open to new
                  collaboration and partnerships.
                </Text>
                <Flex
                  alignContent="center"
                  flexDirection="column"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  width={1}
                >
                  <Flex alignItems="center" width={304}>
                    <Icon icon={aboutEmailGlyph} />
                    <Text fontSize="18px" fontWeight={600} ml={14}>
                      Email Us:{' '}
                      <Link href="mailto:info@idialogue.com" passHref>
                        <Text
                          as="a"
                          color={theme.colors.font.primary}
                          fontSize="18px"
                        >
                          info@idialogue.com
                        </Text>
                      </Link>
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutInstagramGlyph} />
                    <Text fontSize="18px" fontWeight={600} ml={14}>
                      <Link
                        href="https://instagram.com/idialogue_global"
                        passHref
                      >
                        <Text
                          as="a"
                          color={theme.colors.font.primary}
                          fontSize="18px"
                          target="_blank"
                        >
                          Instagram: idialogue_global
                        </Text>
                      </Link>
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutFbGlyph} />
                    <Link href="https://www.facebook.com/idialoguelab" passHref>
                      <Text
                        as="a"
                        color={theme.colors.font.primary}
                        fontSize="18px"
                        fontWeight={600}
                        ml={14}
                        target="_blank"
                      >
                        Facebook: idialoguelab
                      </Text>
                    </Link>
                  </Flex>

                  <Flex alignItems="center" mt={24}>
                    <Icon icon={aboutLinkedGlyph} />
                    <Link
                      href="https://www.linkedin.com/company/idialoguelab"
                      passHref
                    >
                      <Text
                        as="a"
                        color={theme.colors.font.primary}
                        fontSize="18px"
                        fontWeight={600}
                        ml={14}
                        target="_blank"
                      >
                        LinkedIn: idialoguelab
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Section>
        </Container>
      </Media>
    </Flex>
  )
}

export default Contact
