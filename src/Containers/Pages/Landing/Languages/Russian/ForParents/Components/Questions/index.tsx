import React, { useCallback, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import map from 'lodash/map'

import { minusIconGlyph, plusIconGlyph } from 'Assets/svg/common'

import {
  Container,
  Inner,
  Question,
} from 'Containers/Pages/Landing/Languages/English/ForParents/Components/Questions/styles'
import { Title } from 'Containers/Pages/Landing/Languages/English/ForParents/styles'

import { Element, Flex, Icon } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

const QUESTIONS = [
  {
    title: 'What is the recommended age for iDialogue?',
    answer:
      'All kids (17 and under) are welcome at iDialogue! Kids under 7 years old typically need some help from parents to get started, but we’re okay with that if you are! Kids 7+ usually ask our friendly moderators if they ever need help or have questions. And if your kid’s English isn’t super strong, that’s okay! We are a safe, supportive community so they will still feel 100% welcome at iDialogue.🥳',
  },
  {
    title: 'How does iDialogue work?',
    answer:
      'Kids connect with peers from all over the world through moderated discussion clubs, and other virtual learning activities. Together they explore the world through virtual field trips, meet experts and create projects! All interactions happen on our platform that can be reached from any laptop, tablet or even a smartphone. No need to install any software. Live sessions are complemented with self-paced learning activities design to improve 21st-century skills! 🌎',
  },
  {
    title: 'What do I get when I subscribe to iDialogue?',
    answer:
      "You'll get a full access to unlimited educational adventures! Your kid will:\n" +
      '\n' +
      '🇺🇸 Participate in moderated discussion clubs\n' +
      '\n' +
      '🌎 Meet friends from 150 countries\n' +
      '\n' +
      '✈️Travel the world through virtual field trips\n' +
      '\n' +
      '📃 Receive International Certificates\n' +
      '\n' +
      '🎤 Attend Power Hours with experts\n' +
      '\n' +
      '⏰ Enjoy Flexible schedule\n' +
      '\n' +
      '🔒 Stay Safe on our Platform\n' +
      '\n' +
      '🎁 Receive Bonuses and Prizes \n \n' +
      "You’ll have an access to all of your kid's activities and once a week we will send you a detailed report on your kid's performance along with some recommendations!",
  },
  {
    title: 'How do kids communicate and find new friends?',
    answer:
      'Only kids that are within the same age group can connect and communicate. All communication is moderated. Our moderators make sure iDialogue remains the friendliest online community on the planet and they are available 7 days a week if your kids ever have questions. 🌈🦄',
  },
  {
    title: 'What if my kid is shy and afraid to communicate with others?',
    answer:
      'All our activities are hosted by teachers and moderators who are trained to work with kids. They will make sure everyone is feeling included, safe and comfortable. ❤️',
  },
  {
    title: 'How do I sign up multiple kids at once?',
    answer:
      'If you have 2 or more kids, please email us at <a href="mailto:info@idialogue.com">info@idialogue.com</a> 🙌🏾',
  },
]

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState<
    typeof QUESTIONS[number] | null
  >(null)

  const handleToggleQuestion = useCallback(
    selected => {
      if (selected.title === activeQuestion?.title) {
        setActiveQuestion(null)
      } else {
        setActiveQuestion(selected)
      }
    },
    [activeQuestion],
  )

  const renderDesktopQuestions = useCallback(
    () =>
      map(QUESTIONS, question => {
        const isSelected = question.title === activeQuestion?.title

        return (
          <Question key={question.title}>
            <Flex flexDirection="column">
              {isSelected ? (
                <Element onClick={() => handleToggleQuestion(question)}>
                  <Icon
                    fill={theme.colors.green}
                    icon={minusIconGlyph}
                    size={13}
                    wrapperStyles={{ mt: '3px' }}
                  />
                </Element>
              ) : (
                <Element onClick={() => handleToggleQuestion(question)}>
                  <Icon
                    fill="#333333"
                    icon={plusIconGlyph}
                    size={13}
                    wrapperStyles={{ mt: '3px' }}
                  />
                </Element>
              )}
            </Flex>
            <Flex flex={1} flexGrow={1} flexWrap="wrap" ml={20}>
              <Element
                fontSize="18px"
                fontWeight={600}
                lineHeight="18px"
                width={1}
                onClick={() => handleToggleQuestion(question)}
              >
                {question.title}
              </Element>

              {isSelected && (
                <Element
                  color="#828282"
                  fontSize="16px"
                  lineHeight="22px"
                  mt={20}
                  pl="10px"
                  width={1}
                >
                  <InnerHTML html={question.answer} />
                </Element>
              )}
            </Flex>
          </Question>
        )
      }),
    [handleToggleQuestion, activeQuestion],
  )

  const renderTabletQuestions = useCallback(
    () =>
      map(QUESTIONS, question => {
        const isSelected = question.title === activeQuestion?.title

        return (
          <Question key={question.title}>
            <Flex flexDirection="column">
              {isSelected ? (
                <Element onClick={() => handleToggleQuestion(question)}>
                  <Icon
                    fill={theme.colors.green}
                    icon={minusIconGlyph}
                    size={13}
                    wrapperStyles={{ mt: '3px' }}
                  />
                </Element>
              ) : (
                <Element onClick={() => handleToggleQuestion(question)}>
                  <Icon
                    fill="#333333"
                    icon={plusIconGlyph}
                    size={13}
                    wrapperStyles={{ mt: '3px' }}
                  />
                </Element>
              )}
            </Flex>
            <Flex flex={1} flexGrow={1} flexWrap="wrap" ml={20}>
              <Element
                fontSize="18px"
                fontWeight={600}
                lineHeight="18px"
                width={1}
                onClick={() => handleToggleQuestion(question)}
              >
                {question.title}
              </Element>

              {isSelected && (
                <Element
                  color="#828282"
                  fontSize="16px"
                  lineHeight="22px"
                  mt={20}
                  pl="10px"
                  width={1}
                >
                  <InnerHTML html={question.answer} />
                </Element>
              )}
            </Flex>
          </Question>
        )
      }),
    [handleToggleQuestion, activeQuestion],
  )

  const renderMobileQuestions = useCallback(
    () =>
      map(QUESTIONS, question => {
        const isSelected = question.title === activeQuestion?.title

        return (
          <Question key={question.title}>
            <Flex flexDirection="column">
              {isSelected ? (
                <Element onClick={() => handleToggleQuestion(question)}>
                  <Icon
                    fill={theme.colors.green}
                    icon={minusIconGlyph}
                    size={13}
                    wrapperStyles={{ mt: '3px' }}
                  />
                </Element>
              ) : (
                <Element onClick={() => handleToggleQuestion(question)}>
                  <Icon
                    fill="#333333"
                    icon={plusIconGlyph}
                    size={13}
                    wrapperStyles={{ mt: '3px' }}
                  />
                </Element>
              )}
            </Flex>
            <Flex flex={1} flexGrow={1} flexWrap="wrap" ml={20}>
              <Element
                fontSize="16px"
                fontWeight={600}
                lineHeight="22px"
                width={1}
                onClick={() => handleToggleQuestion(question)}
              >
                {question.title}
              </Element>

              {isSelected && (
                <Element
                  borderLeft={`1px solid ${theme.colors.green}`}
                  color="#828282"
                  fontSize="14px"
                  lineHeight="20px"
                  mt={20}
                  pl="10px"
                  width={1}
                >
                  <InnerHTML html={question.answer} />
                </Element>
              )}
            </Flex>
          </Question>
        )
      }),
    [handleToggleQuestion, activeQuestion],
  )

  return (
    <Container>
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Inner margin="0 auto" maxWidth={980}>
          <Title justifyContent="center" width={1}>
            The most frequently asked questions
          </Title>

          <Flex flexWrap="wrap" mt={40} width={1}>
            {renderDesktopQuestions()}
          </Flex>
        </Inner>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Inner margin="0 auto" maxWidth={704}>
          <Element
            as="h2"
            fontSize={24}
            justifyContent="center"
            lineHeight="24px"
            textAlign="center"
            width={1}
          >
            The most frequently asked questions
          </Element>

          <Flex flexWrap="wrap" mt={20} width={1}>
            {renderTabletQuestions()}
          </Flex>
        </Inner>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Inner margin="0 auto" maxWidth={288}>
          <Element
            as="h2"
            fontSize={18}
            justifyContent="center"
            lineHeight="24px"
            textAlign="center"
            width={1}
          >
            The most frequently asked <br /> questions
          </Element>

          <Flex flexWrap="wrap" mt={20} width={1}>
            {renderMobileQuestions()}
          </Flex>
        </Inner>
      </Media>
    </Container>
  )
}

export default Questions
