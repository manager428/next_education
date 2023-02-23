import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
  becki,
  dave,
  infographics,
  jeff,
  mainPhoto1,
  mainPhoto2,
  mainPhoto3,
  mainPhoto4,
  maria,
  natalia,
  olesia,
  whyWeDo1,
  whyWeDo2,
  whyWeDo3,
  whyWeDo4,
} from 'Assets/images/about'
import {
  aboutEmailGlyph,
  aboutFbGlyph,
  aboutInstagramGlyph,
  aboutLinkedGlyph,
  ourMissionGlyph1,
  ourMissionGlyph2,
  whatWeDoGlyph1,
  whatWeDoGlyph2,
  whatWeDoGlyph3,
  whatWeDoGlyph4,
} from 'Assets/svg/about'

import { Flex, Icon } from 'Components/UI'

import { BookForm, ContactForm } from 'Components/Blocks/Entities/Contact/Forms'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import {
  Background,
  Button,
  Container,
  FormBackground,
  FormContainer,
  HowWeDoBg,
  MainBgIcon,
  OurTeamBg,
  Quote,
  Section,
  Text,
  Title,
  WhatWeDoBox,
  WhatWeDoNumber,
  WhyWeDoQoute,
  WhyWeDoQuoteText,
} from './styles'

const About: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'contact' | 'booking'>('contact')

  return (
    <Background>
      <Head
        description="That’s a simple idea that brought our cofounders Natalia Bout and Olesya Alexandrova together. They’re cultural enthusiasts. They created an organization that strives to advance international understanding, friendship, tolerance, and world peace between people of all nations through direct people-to-people contact."
        title="Let’s Bring the World into Classrooms | iDialogue"
      />
      <Section backgroundColor="#F7FAFF" pb={90} pt={40}>
        <Container>
          <MainBgIcon />
          <Flex>
            <Flex ml={55} mt={70}>
              <Image
                height="154px"
                layout="fixed"
                src={mainPhoto1}
                width="200px"
              />
            </Flex>
            <Flex ml={30} mt={30}>
              <Image
                height="210px"
                layout="fixed"
                src={mainPhoto2}
                width="190px"
              />
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" maxWidth={480} ml={25} mt={40}>
            <Title>
              A{' '}
              <span>
                Global Learning <br />
                Experience
              </span>{' '}
              Built on <br />
              Connection, Communication, <br />
              and Collaboration
            </Title>
          </Flex>

          <Flex>
            <Flex ml={120} mt={30}>
              <Image
                height="200px"
                layout="fixed"
                src={mainPhoto3}
                width="340px"
              />
            </Flex>
            <Flex ml={30}>
              <Image
                height="260px"
                layout="fixed"
                src={mainPhoto4}
                width="390px"
              />
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section pb={85}>
        <Container>
          <Flex flexWrap="wrap" maxWidth="525px" mt="80px" width={1}>
            <Text fontSize={28} width={1}>
              Welcome to world of impactful learning!
            </Text>
            <Quote mt={20}>
              iDialogue was founded in 2018 with the mission of making education
              impactful and accessible on a global scale through peer-to-peer
              and classroom connection, communication and collaboration.
            </Quote>

            <Text fontSize="16px" fontWeight="400" mt={20}>
              Realizing the rapidly changing landscape of technology and
              education, our team looked to create a central location; which
              takes the heavy lifting out of global education, and provides
              teachers and students with a personalized learning experience
              through community and content without sacrificing the creativity
              or curriculum needs.
            </Text>

            <Text fontSize="16px" fontWeight="400" mt={14}>
              Today, we empower educators, learners and families with tools to
              conduct cultural exchanges, collaborate with other classrooms
              globally, and complement classes with virtual field trips and live
              sessions with guest speakers.
            </Text>
          </Flex>
          <Flex ml={32} mt={56}>
            <Image
              height="420px"
              layout="fixed"
              src={infographics}
              width="410px"
            />
          </Flex>
        </Container>
      </Section>

      <Section pb={130} pt={65}>
        <OurTeamBg />
        <Container justifyContent="center">
          <Text
            as="h2"
            fontSize="32px"
            fontWeight="600"
            textAlign="center"
            width={1}
          >
            <Text as="span" color="#49CEB1">
              Who{' '}
            </Text>
            we are
          </Text>

          <Flex justifyContent="center" mt={20} width={1}>
            <Text fontSize="18px" lineHeight="24px" textAlign="center">
              We are good folks with strong values. We’re nothing if not
              passionate about <br /> what we do. And at the center of that is a
              culture that celebrates our diversity <br /> and brings together
              thinkers from all over the world.
            </Text>
          </Flex>

          <Flex justifyContent="space-between" maxWidth={833} mt={26} width={1}>
            <Flex flexWrap="wrap" width={224}>
              <Image height={224} layout="fixed" src={maria} width={220} />
              <Text
                fontSize="22px"
                fontWeight="600"
                mt={20}
                textAlign="center"
                width={1}
              >
                Maria Poltorak
              </Text>
              <Text fontSize="16px" mt={10} textAlign="center" width={1}>
                CBDO
              </Text>
            </Flex>

            <Flex flexWrap="wrap" width={224}>
              <Image height={224} layout="fixed" src={natalia} width={220} />
              <Text
                fontSize="22px"
                fontWeight="600"
                mt={20}
                textAlign="center"
                width={1}
              >
                Natalia Bout
              </Text>
              <Text fontSize="16px" mt={10} textAlign="center" width={1}>
                Co-Founder & CEO
              </Text>
            </Flex>

            <Flex flexWrap="wrap" width={224}>
              <Image height={224} layout="fixed" src={olesia} width={220} />
              <Text
                fontSize="22px"
                fontWeight="600"
                mt={20}
                textAlign="center"
                width={1}
              >
                Olesia Alexandrova
              </Text>
              <Text fontSize="16px" mt={10} textAlign="center" width={1}>
                Co-Founder & CMO
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section pb={100} pt={0}>
        <Container justifyContent="center">
          <Text
            as="h2"
            fontSize="32px"
            fontWeight="600"
            textAlign="center"
            width={1}
          >
            Our advisors
          </Text>

          <Flex justifyContent="space-between" maxWidth={833} mt={26} width={1}>
            <Flex flexWrap="wrap" width={224}>
              <Image height={224} layout="fixed" src={jeff} width={220} />
              <Text
                fontSize="22px"
                fontWeight="600"
                mt={20}
                textAlign="center"
                width={1}
              >
                Jeff Remmington
              </Text>
              <Text fontSize="14px" mt={10} textAlign="center" width={1}>
                National STEM Teacher <br /> Ambassador. Has received <br />
                Presidential Award for Excellence <br /> in Science and
                Mathematics <br /> Teaching.
              </Text>
            </Flex>

            <Flex flexWrap="wrap" width={224}>
              <Image height={224} layout="fixed" src={becki} width={220} />
              <Text
                fontSize="22px"
                fontWeight="600"
                mt={20}
                textAlign="center"
                width={1}
              >
                Becki Cohn-Vargas
              </Text>
              <Text fontSize="14px" mt={10} textAlign="center" width={1}>
                An educator, bullying prevention <br /> specialist, author, and
                speaker <br /> focused on inclusion, compassion <br /> and
                belonging.
              </Text>
            </Flex>

            <Flex flexWrap="wrap" width={224}>
              <Image height={224} layout="fixed" src={dave} width={220} />
              <Text
                fontSize="22px"
                fontWeight="600"
                mt={20}
                textAlign="center"
                width={1}
              >
                Dave Potter
              </Text>
              <Text fontSize="14px" mt={10} textAlign="center" width={1}>
                Founder of Global Ready Partners.
                <br /> A specialist in online education <br /> focused on
                inclusivity and equality.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text
            as="h2"
            fontSize="32px"
            fontWeight="600"
            mb={20}
            textAlign="center"
            width={1}
          >
            <Text as="span" color="#49CEB1">
              What{' '}
            </Text>
            we do
          </Text>

          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            margin="0 auto"
            maxWidth={840}
            width={1}
          >
            <Text
              fontSize="18px"
              lineHeight="24px"
              mb={24}
              textAlign="center"
              width={1}
            >
              We create a learning experience that is social, adaptable,
              personalized, and global!
            </Text>
            <Flex
              alignItems="flex-start"
              justifyContent="space-between"
              width={1}
            >
              <Flex flexWrap="wrap" justifyContent="center" width={386}>
                <Icon icon={whatWeDoGlyph2} />
                <Text
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="20px"
                  mt={20}
                  textAlign="center"
                  width={1}
                >
                  Improve Engagement
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="22px"
                  mt="14px"
                  textAlign="left"
                  width={1}
                >
                  We believe that students learn best when they are actively
                  involved. iDialogue improves student attitude toward
                  education, thanks to its ability to keep students engaged.
                  Boost in motivation in turn helps to significantly improve
                  students’ achievements and teachers’ satisfaction.
                </Text>
              </Flex>

              <Flex flexWrap="wrap" justifyContent="center" width={386}>
                <Icon icon={whatWeDoGlyph1} />
                <Text
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="20px"
                  mt={20}
                  textAlign="center"
                  width={1}
                >
                  Encourage Collaboration and Teamwork
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="22px"
                  mt="14px"
                  textAlign="left"
                  width={1}
                >
                  We help students to rediscover the value of deep conversation
                  and connection around inspiring ideas. Through collaboration
                  with peers from 150 countries students develop 21st-century
                  skills, explore cultures and build meaningful friendships with
                  peers from all over the globe.
                </Text>
              </Flex>
            </Flex>

            <Flex
              alignItems="flex-start"
              justifyContent="space-between"
              mt={40}
              width={1}
            >
              <Flex flexWrap="wrap" justifyContent="center" width={386}>
                <Icon icon={whatWeDoGlyph3} />
                <Text
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="20px"
                  mt={20}
                  textAlign="center"
                  width={1}
                >
                  Spark Creativity and Curiosity
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="22px"
                  mt="14px"
                  textAlign="left"
                  width={1}
                >
                  With iDialogue students are invited to travel around the globe
                  with no passport, no plane tickets and no luggage. Our
                  activities spark curiosity in students and encourage them to
                  dig deeper. This has a positive impact on the overall academic
                  performance.
                </Text>
              </Flex>

              <Flex flexWrap="wrap" justifyContent="center" width={386}>
                <Icon icon={whatWeDoGlyph4} />
                <Text
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="20px"
                  mt={20}
                  textAlign="center"
                  width={1}
                >
                  Foster Life Skills Training
                </Text>
                <Text
                  fontSize="16px"
                  lineHeight="22px"
                  mt="14px"
                  textAlign="left"
                  width={1}
                >
                  By utilizing <b>guest speakers, experts, and professionals</b>{' '}
                  to help further learning in the classroom, teachers are able
                  to provide deeper learning and mastery of subjects while also
                  showing students the relevance of their education.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section mt={68} pb={100} pt={40}>
        <HowWeDoBg />
        <Container justifyContent="center">
          <Text
            as="h2"
            fontSize="32px"
            fontWeight="600"
            mb={20}
            textAlign="center"
            width={1}
          >
            <Text as="span" color="#49CEB1">
              How{' '}
            </Text>
            we do it
          </Text>

          <Text
            fontSize="18px"
            lineHeight="24px"
            mt={20}
            textAlign="center"
            width={1}
          >
            iDialogue provides students and teachers with a wealth of tools and
            real-world learning initiatives, sourced from global organizations
            and customized to their educational goals and curiosity, followed by
            action items where they can put their learning to work in their own
            communities to create impact.
          </Text>

          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            maxWidth="822px"
            mt={20}
            width={1}
          >
            <WhatWeDoBox>
              <WhatWeDoNumber>01</WhatWeDoNumber>
              <Text fontSize="16px" fontWeight="600" width={1}>
                Engaging teaching tools
              </Text>
              <Text fontSize="14px" lineHeight="20px" mt="6px" width={1}>
                Tech issues often disrupt work. We bring{' '}
                <b>virtual classrooms, assessments, and video lessons</b> under
                one roof. Available on mobile and desktop! Reduced friction
                creates higher usability, and thus engagement.
              </Text>
            </WhatWeDoBox>

            <WhatWeDoBox>
              <WhatWeDoNumber>02</WhatWeDoNumber>
              <Text fontSize="16px" fontWeight="600" width={1}>
                Peer-to-Peer Learning
              </Text>
              <Text fontSize="14px" lineHeight="20px" mt="6px" width={1}>
                Our collaborative tools bring education to life! Students
                connect with peers from different countries through live
                discussions, debates and other interactive learning activities.
                Interactive materials engage students in discussion and help
                develop{' '}
                <b>
                  critical thinking, cultural awareness, and social-emotional
                  skills.
                </b>
              </Text>
            </WhatWeDoBox>

            <WhatWeDoBox mt={20}>
              <WhatWeDoNumber>03</WhatWeDoNumber>
              <Text fontSize="16px" fontWeight="600" width={1}>
                Virtual Field trips
              </Text>
              <Text fontSize="14px" lineHeight="20px" mt="6px" width={1}>
                We provide students with access to{' '}
                <b> virtual tours, and unique extracurricular experiences </b>{' '}
                curated by ambassadors and partners around the world. These
                immersive, virtual activities include topics such as Indian
                cuisine from Calcutta, sustainability from Costa Rica and design
                thinking from Silicon Valley.
              </Text>
            </WhatWeDoBox>

            <WhatWeDoBox mt={20}>
              <WhatWeDoNumber>04</WhatWeDoNumber>
              <Text fontSize="16px" fontWeight="600" width={1}>
                Power Hours with Guest Experts
              </Text>
              <Text fontSize="14px" lineHeight="20px" mt="6px" width={1}>
                Working together with{' '}
                <b>guest speakers and organizational partners</b>, we facilitate
                on-demand career power-hours led by the world leading experts
                ranging from NASA Astronauts and Engineers to Best selling
                Authors and Thought Leaders.
              </Text>
            </WhatWeDoBox>
          </Flex>
        </Container>
      </Section>

      <Section>
        <Container justifyContent="center" pb={80}>
          <Text
            as="h2"
            fontSize="32px"
            fontWeight="600"
            mb={20}
            textAlign="center"
            width={1}
          >
            <Text as="span" color="#49CEB1">
              Why{' '}
            </Text>
            we do it
          </Text>
          <Text
            fontSize="18px"
            lineHeight="24px"
            maxWidth={740}
            mt={20}
            textAlign="center"
            width={1}
          >
            We want to ignite youth worldwide to overcome social and
            geographical differences to create a real difference. Our programs
            implement the core principles of sustainable education to benefit
            students, teachers and the society they live in.
          </Text>

          <Flex maxWidth="840px" mt={34} width={1}>
            <Flex flexWrap="wrap" maxWidth={342} width={1}>
              <Text fontSize="16px" lineHeight="22px" mb={24} mt="6px">
                At iDialogue we strive to integrate academical life into the
                real life of students combining it with meaningful interaction
                with peers from all over the world. It drastically improves
                their motivation and results in{' '}
                <b> higher academical outcomes.</b>
              </Text>

              <Image height={298} layout="fixed" src={whyWeDo1} width={342} />
            </Flex>

            <Flex flexGrow={1} flexWrap="wrap" ml={30}>
              <Flex justifyContent="space-between" width={1}>
                <Image height={220} layout="fixed" src={whyWeDo2} width={188} />
                <Flex mt={36}>
                  <Image
                    height={184}
                    layout="fixed"
                    src={whyWeDo3}
                    width={250}
                  />
                </Flex>
              </Flex>
              <Flex mt={30} width={1}>
                <WhyWeDoQoute image={whyWeDo4.src}>
                  <WhyWeDoQuoteText>
                    iDialogue seeks to realise the potential that resides within
                    all of us and the benefits that we can receive by helping to
                    build a sympathetic, well-educated, self-sustainable global
                    community.
                  </WhyWeDoQuoteText>
                </WhyWeDoQoute>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section backgroundColor="#F7FAFF" pb={40} pt={40}>
        <Container justifyContent="center">
          <Text
            as="h2"
            fontSize="32px"
            fontWeight="600"
            mb={20}
            textAlign="center"
            width={1}
          >
            Our{' '}
            <Text as="span" color="#49CEB1">
              Mission
            </Text>
          </Text>

          <Text
            fontSize="18px"
            lineHeight="24px"
            mt={14}
            textAlign="center"
            width={1}
          >
            Our mission is to make education impactful and accessible on a
            global scale through <br /> peer-to-peer and classroom connection,
            communication and collaboration.
          </Text>

          <Text
            fontSize="18px"
            fontStyle="italic"
            fontWeight="600"
            lineHeight="24px"
            maxWidth={580}
            mt={14}
            textAlign="center"
          >
            “The mission of Ubuntu Mail is to spread global cultural
            understanding and implement real, self-sustainable change in the
            world.” <br />— Maria Negliad
          </Text>

          <Flex justifyContent="space-between" maxWidth={840} mt={24} width={1}>
            <Flex flexWrap="wrap" justifyContent="center" maxWidth={386}>
              <Icon icon={ourMissionGlyph1} />
              <Text
                fontSize="22px"
                fontWeight="600"
                lineHeight="22px"
                mt={20}
                textAlign="center"
                width={1}
              >
                Short Term Goals
              </Text>
              <Text
                fontSize="14px"
                lineHeight="22px"
                mt="10px"
                textAlign="center"
                width={1}
              >
                We want to help students thrive in our interconnected world as
                they develop creativity, compassion, intercultural communication
                skills, and global citizenship.
              </Text>
            </Flex>

            <Flex flexWrap="wrap" justifyContent="center" maxWidth={386}>
              <Icon icon={ourMissionGlyph2} />
              <Text
                fontSize="22px"
                fontWeight="600"
                lineHeight="22px"
                mt={20}
                textAlign="center"
                width={1}
              >
                Long Term Goals
              </Text>
              <Text
                fontSize="14px"
                lineHeight="22px"
                mt="10px"
                textAlign="center"
                width={1}
              >
                We want to contribute to sustainable globalisation by helping
                address the issues of cultural bias and isolation amongst
                students of diverse communities around the world.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section pb={110} pt={74}>
        <Container justifyContent="center">
          <Flex
            flexShrink={0}
            flexWrap="wrap"
            maxWidth={304}
            ml={77}
            mt={57}
            width={1}
          >
            <Text as="h2" fontSize="32px" fontWeight="600" mb={20} width={1}>
              Our Contacts
            </Text>
            <Text fontSize="18px" mb={20} width={1}>
              If you have any questions please don&apos;t hesitate to contact us
            </Text>
            <Flex flexWrap="wrap" width={1}>
              <Flex alignItems="center">
                <Icon icon={aboutEmailGlyph} />
                <Text fontSize="18px" fontWeight={600} ml={14}>
                  Email Us:{' '}
                  <Link href="mailto:info@idialogue.com" passHref>
                    <Text as="a">info@idialogue.com</Text>
                  </Link>
                </Text>
              </Flex>

              <Flex alignItems="center" mt={24}>
                <Icon icon={aboutInstagramGlyph} />
                <Text fontSize="18px" fontWeight={600} ml={14}>
                  <Link href="https://instagram.com/idialogue_global" passHref>
                    <Text as="a" target="_blank">
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

      <Footer />
    </Background>
  )
}

export default About
