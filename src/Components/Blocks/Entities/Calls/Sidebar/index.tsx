import React, { useCallback } from 'react'

import { DateTime } from 'luxon'

import { Flex } from 'Components/UI'

import CalendarWidget from 'Components/Blocks/CalendarWidget'

import { Container, Dates, Title } from './styles'
import TagSelect from './TagSelect'
import UserLevels from './UserLevels'

type Props = {
  showOnlyCalendar: boolean
  selectedDate: {
    from: Date
    to: Date
  }
  selectedEnglishLevel: string[] | []
  selectedTags: string[] | []
  onDateSelect: (from: string, to: string) => void
  onUserLevelSelect: (values: string[]) => void
  onTagSelect: (values: string[]) => void
}

const Sidebar: React.FC<Props> = ({
  showOnlyCalendar,
  selectedDate,
  selectedEnglishLevel,
  selectedTags,
  onDateSelect,
  onUserLevelSelect,
  onTagSelect,
}) => {
  const renderSelectedDate = useCallback(() => {
    const { from, to } = selectedDate

    const fromDateTime = DateTime.fromJSDate(from)
    const toDateTime = DateTime.fromJSDate(to)

    const isSameMonth = fromDateTime.hasSame(toDateTime, 'month')

    if (isSameMonth) {
      const fromDay = fromDateTime.toFormat('d')
      const toDay = toDateTime.toFormat('d')
      const fromMonth = fromDateTime.toFormat('MMM')
      const fromYear = toDateTime.toFormat('yyyy')

      return `${fromDay} - ${toDay} ${fromMonth}, ${fromYear} `
    }

    return `${fromDateTime.toFormat('d MMM yyyy')} - ${toDateTime.toFormat(
      'd MMM yyyy',
    )} `
  }, [selectedDate])

  return (
    <Container>
      <Title>Let us help you find your event!</Title>

      <Flex mt={20}>
        <Dates>
          Selected Dates: <span>{renderSelectedDate()}</span>
        </Dates>
      </Flex>

      <Flex mt={15}>
        <CalendarWidget
          isOpened
          onlyCalendar
          selectedRange={selectedDate}
          type="range"
          onDateSelected={onDateSelect}
        />
      </Flex>

      {!showOnlyCalendar && (
        <Flex mt={32}>
          <UserLevels
            values={selectedEnglishLevel}
            onSelect={onUserLevelSelect}
          />
        </Flex>
      )}

      {!showOnlyCalendar && (
        <Flex mt={32}>
          <TagSelect values={selectedTags} onSelect={onTagSelect} />
        </Flex>
      )}
    </Container>
  )
}

export default React.memo(Sidebar)
