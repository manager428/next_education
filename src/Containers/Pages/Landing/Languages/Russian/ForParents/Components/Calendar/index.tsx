import React, { useCallback, useState } from 'react'

import Image from 'next/image'

import map from 'lodash/map'

import { Element, Flex } from 'Components/UI'

import { MEDIA_SIZES } from 'Constants/media'

import { Media, theme } from 'Theme'

import { PARENTS_SCHEDULE } from './constants'
import {
  Container,
  Content,
  EmojiContainer,
  Inner,
  Sidebar,
  SidebarItem,
  TopicContainer,
} from './styles'

const Calendar = () => {
  const [activeSchedule, setActiveSchedule] = useState<
    typeof PARENTS_SCHEDULE[number]
  >(PARENTS_SCHEDULE[0])

  const renderScheduleItems = useCallback(
    () =>
      map(activeSchedule.topics, topic => (
        <Flex key={topic.title} width={1}>
          <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
            <TopicContainer backgroundColor={topic.color}>
              <Flex alignSelf="center">
                <EmojiContainer height={66} width={66}>
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    dangerouslySetInnerHTML={{ __html: topic.icon }}
                    height={35}
                    width={35}
                  />
                </EmojiContainer>
              </Flex>
              <Flex
                alignContent="center"
                alignItems="center"
                flex={1}
                flexGrow={1}
                flexWrap="wrap"
                ml={14}
                width={1}
              >
                <Element
                  fontSize="18px"
                  fontWeight={600}
                  lineHeight="20px"
                  width={1}
                >
                  {topic.title}
                </Element>
                <Element fontSize="14px" lineHeight="20px" mt="8px" width={1}>
                  {topic.description}
                </Element>
              </Flex>
            </TopicContainer>
          </Media>

          <Media at={MEDIA_SIZES.MOBILE}>
            <TopicContainer backgroundColor={topic.color} key={topic.title}>
              <Flex alignSelf="center">
                <EmojiContainer height={40} width={40}>
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    dangerouslySetInnerHTML={{ __html: topic.icon }}
                    height={35}
                    width={35}
                  />
                </EmojiContainer>
              </Flex>
              <Flex
                alignContent="center"
                alignItems="center"
                flex={1}
                flexGrow={1}
                flexWrap="wrap"
                ml={14}
                width={1}
              >
                <Element
                  fontSize="14px"
                  fontWeight={600}
                  lineHeight="20px"
                  width={1}
                >
                  {topic.title}
                </Element>
                <Element fontSize="12px" lineHeight="16px" mt="6px" width={1}>
                  {topic.description}
                </Element>
              </Flex>
            </TopicContainer>
          </Media>
        </Flex>
      )),
    [activeSchedule],
  )

  return (
    <Flex flexWrap="wrap" width={1}>
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container>
          <Inner maxWidth={980}>
            <Element
              as="span"
              fontSize="32px"
              fontWeight={800}
              lineHeight="42px"
              width={1}
            >
              Вот как выглядит{' '}
              <Element as="span" color={theme.colors.green}>
                типичная неделя
              </Element>
              <br />
              для наших студентов
            </Element>

            <Flex mt={32} width={1}>
              <Sidebar mr="30px">
                {map(PARENTS_SCHEDULE, schedule => (
                  <SidebarItem
                    active={activeSchedule.day === schedule.day}
                    key={schedule.day}
                    onClick={() => setActiveSchedule(schedule)}
                  >
                    {schedule.day}
                  </SidebarItem>
                ))}
              </Sidebar>

              <Content>
                <Flex flexDirection="column" flexWrap="wrap" width={360}>
                  {renderScheduleItems()}
                </Flex>

                <Flex ml={40} width={388}>
                  <Image objectFit="contain" src={activeSchedule.image} />
                </Flex>
              </Content>
            </Flex>
          </Inner>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Container>
          <Inner maxWidth={704}>
            <Element
              as="span"
              fontSize={24}
              fontWeight={800}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Вот как выглядит{' '}
              <Element as="span" color={theme.colors.green}>
                типичная неделя
              </Element>
              <br />
              для наших студентов
            </Element>

            <Flex justifyContent="center" mt={32} width={1}>
              <Sidebar mr={32}>
                {map(PARENTS_SCHEDULE, schedule => (
                  <SidebarItem
                    active={activeSchedule.day === schedule.day}
                    key={schedule.day}
                    width={140}
                    onClick={() => setActiveSchedule(schedule)}
                  >
                    {schedule.day}
                  </SidebarItem>
                ))}
              </Sidebar>

              <Content>
                <Flex flexDirection="column" flexWrap="wrap" width={360}>
                  {renderScheduleItems()}
                </Flex>
              </Content>
            </Flex>
          </Inner>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Container>
          <Inner maxWidth={288}>
            <Element
              as="span"
              fontSize={18}
              fontWeight={800}
              lineHeight="24px"
              textAlign="center"
              width={1}
            >
              Вот как выглядит <br />
              <Element as="span" color={theme.colors.green}>
                типичная неделя
              </Element>
              <br />
              для наших студентов
            </Element>

            <Flex justifyContent="center" mt={18} width={1}>
              <Sidebar mr={32}>
                {map(PARENTS_SCHEDULE, schedule => (
                  <SidebarItem
                    active={activeSchedule.day === schedule.day}
                    key={schedule.day}
                    width={60}
                    onClick={() => setActiveSchedule(schedule)}
                  >
                    {schedule.dayShort}
                  </SidebarItem>
                ))}
              </Sidebar>

              <Content>
                <Flex flexDirection="column" flexWrap="wrap" width={210}>
                  {renderScheduleItems()}
                </Flex>
              </Content>
            </Flex>
          </Inner>
        </Container>
      </Media>
    </Flex>
  )
}

export default Calendar
