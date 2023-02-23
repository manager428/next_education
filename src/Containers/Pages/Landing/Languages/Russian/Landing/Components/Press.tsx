import React from 'react'

import Link from 'next/link'

import {
  edu,
  englishTeaching,
  larry,
  medium,
  startup,
  study,
  teachschool,
  thriveglobal,
  wgu,
} from 'Assets/images/landing'

import {
  Container,
  Title,
} from 'Containers/Pages/Landing/Languages/Russian/Landing/styles'
import { Section } from 'Containers/Pages/Landing/styles'

import { Flex, Image } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media } from 'Theme'

const Press = () => (
  <Flex flexWrap="wrap" p="0px 16px" width={1}>
    <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={60}
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={980}>
          <Flex justifyContent="center" width={1}>
            <Title>О нас пишут</Title>
          </Flex>
          <Flex alignItems="center" flexWrap="wrap" mt={40} width={1}>
            <Flex justifyContent="space-between" width={1}>
              <Link
                href="https://startup.info/natalia-vladimirova-idialogue/"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={60} src={startup} width={122} />
                </a>
              </Link>
              <Link
                href="https://www.wgu.edu/heyteach/article/how-idialogue-connects-students-across-continents2103.html"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={46} src={wgu} width={158} />
                </a>
              </Link>
              <Link
                href="https://www.wgu.edu/heyteach/article/how-idialogue-connects-students-across-continents2103.html"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={50} src={edu} width={226} />
                </a>
              </Link>
              <Link
                href="https://www.study.ru/article/sovety/angliyskiy-dlya-detey-platno-i-besplatno-onlayn"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={50} src={study} width={198} />
                </a>
              </Link>
              <Link href="https://smartinwi.com/061-summer-check-in/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={60} src={teachschool} width={118} />
                </a>
              </Link>
            </Flex>

            <Flex justifyContent="center" mt={40} width={1}>
              <Link
                href="https://englishteaching101.com/idialogue-website-review/"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    height={52}
                    mr={32}
                    src={englishTeaching}
                    width={220}
                  />
                </a>
              </Link>

              <Link
                href="https://thriveglobal.com/stories/natalia-bout-plan-and-plan-again/?fbclid=IwAR0s-G_Kj02SYNznHlVpFJ-I5HHXtaH6EeXepXZHY2kVWxoy7Vx5ISR698g"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={32} mr={32} src={thriveglobal} width={284} />
                </a>
              </Link>

              <Link
                href="https://medium.com/@beckicohnvargas/teen-voices-around-the-world-during-the-pandemic-9e3b9042bb8c"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={32} mr={32} src={medium} width={208} />
                </a>
              </Link>

              <Link href="/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={34} src={larry} width={100} />
                </a>
              </Link>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.TABLET}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={40}
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={680}>
          <Flex justifyContent="center" width={1}>
            <Title>О нас пишут</Title>
          </Flex>
          <Flex alignItems="center" flexWrap="wrap" mt={40} width={1}>
            <Flex justifyContent="space-between" width={1}>
              <Link
                href="https://startup.info/natalia-vladimirova-idialogue/"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={40} src={startup} width={82} />
                </a>
              </Link>
              <Link
                href="https://www.wgu.edu/heyteach/article/how-idialogue-connects-students-across-continents2103.html"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={32} src={wgu} width={106} />
                </a>
              </Link>
              <Link
                href="https://www.wgu.edu/heyteach/article/how-idialogue-connects-students-across-continents2103.html"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={34} src={edu} width={154} />
                </a>
              </Link>
              <Link
                href="https://www.study.ru/article/sovety/angliyskiy-dlya-detey-platno-i-besplatno-onlayn"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={33} src={study} width={153} />
                </a>
              </Link>
              <Link href="https://smartinwi.com/061-summer-check-in/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={40} src={teachschool} width={78} />
                </a>
              </Link>
            </Flex>

            <Flex justifyContent="center" mt={40} width={1}>
              <Link
                href="https://englishteaching101.com/idialogue-website-review/"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    height={34}
                    mr={28}
                    src={englishTeaching}
                    width={142}
                  />
                </a>
              </Link>

              <Link
                href="https://thriveglobal.com/stories/natalia-bout-plan-and-plan-again/?fbclid=IwAR0s-G_Kj02SYNznHlVpFJ-I5HHXtaH6EeXepXZHY2kVWxoy7Vx5ISR698g"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={20} mr={28} src={thriveglobal} width={190} />
                </a>
              </Link>

              <Link
                href="https://medium.com/@beckicohnvargas/teen-voices-around-the-world-during-the-pandemic-9e3b9042bb8c"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={22} mr={28} src={medium} width={140} />
                </a>
              </Link>

              <Link href="/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={34} src={larry} width={100} />
                </a>
              </Link>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>

    <Media at={MEDIA_SIZES.MOBILE}>
      <Container
        backgroundColor="#F7FAFF"
        justifyContent="center"
        pb={40}
        pt={40}
        width={1}
      >
        <Section justifyContent="space-between" maxWidth={276}>
          <Flex justifyContent="center" width={1}>
            <Title>О нас пишут</Title>
          </Flex>
          <Flex alignItems="center" flexWrap="wrap" mt={40} width={1}>
            <Flex justifyContent="space-between" width={1}>
              <Link
                href="https://startup.info/natalia-vladimirova-idialogue/"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={36} src={startup} width={74} />
                </a>
              </Link>
              <Link
                href="https://www.wgu.edu/heyteach/article/how-idialogue-connects-students-across-continents2103.html"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={28} src={wgu} width={92} />
                </a>
              </Link>
              <Link href="https://smartinwi.com/061-summer-check-in/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={36} src={teachschool} width={70} />
                </a>
              </Link>
            </Flex>

            <Flex flexWrap="wrap" justifyContent="center" mt={20} width={1}>
              <Link
                href="https://www.wgu.edu/heyteach/article/how-idialogue-connects-students-across-continents2103.html"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={28} src={edu} width={126} />
                </a>
              </Link>

              <Link
                href="https://www.study.ru/article/sovety/angliyskiy-dlya-detey-platno-i-besplatno-onlayn"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={28} src={study} width={116} />
                </a>
              </Link>
            </Flex>

            <Flex justifyContent="space-between" mt={20} width={1}>
              <Link
                href="https://englishteaching101.com/idialogue-website-review/"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={28} src={englishTeaching} width={116} />
                </a>
              </Link>

              <Link
                href="https://thriveglobal.com/stories/natalia-bout-plan-and-plan-again/?fbclid=IwAR0s-G_Kj02SYNznHlVpFJ-I5HHXtaH6EeXepXZHY2kVWxoy7Vx5ISR698g"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={16} src={thriveglobal} width={152} />
                </a>
              </Link>
            </Flex>

            <Flex justifyContent="space-between" mt={20} width={1}>
              <Link
                href="https://medium.com/@beckicohnvargas/teen-voices-around-the-world-during-the-pandemic-9e3b9042bb8c"
                passHref
              >
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={22} src={medium} width={140} />
                </a>
              </Link>

              <Link href="/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image height={32} src={larry} width={94} />
                </a>
              </Link>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </Media>
  </Flex>
)

export default Press
