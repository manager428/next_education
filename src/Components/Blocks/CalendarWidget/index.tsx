import React, { useEffect, useRef, useState } from 'react'

import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'
import { CalendarType, SelectedRange } from 'Components/UI/Calendar'

import {
  ButtonWrap,
  CalendarIcon,
  Container,
} from 'Components/Blocks/CalendarWidget/styles'

import useOutsideClick from 'Hooks/useOutsideClick'

const Calendar = dynamic(() => import('Components/UI/Calendar'), {
  ssr: false,
  loading: Loader,
})

type Props = {
  type: CalendarType
  selectedRange: SelectedRange
  isOpened?: boolean
  onlyCalendar?: boolean
  onDateSelected: (from: string, to: string) => void
  onClose?: () => void
}

const CalendarWidget: React.FC<Props> = ({
  type,
  selectedRange,
  onlyCalendar = false,
  isOpened = false,
  onClose,
  onDateSelected,
}) => {
  const ref = useRef(null)
  const [isShowCalendar, setShowCalendar] = useState<boolean>(false)

  useEffect(() => setShowCalendar(isOpened), [isOpened])

  const handleShowCalendar = (event: React.MouseEvent): void => {
    event.preventDefault()

    setShowCalendar(value => !value)
  }

  const handleClose = (): void => {
    if (onlyCalendar) return

    setShowCalendar(false)

    if (onClose) {
      onClose()
    }
  }

  const handleSelect = (from: string | null, to: string | null): void => {
    if (from && to) {
      if (!onlyCalendar) {
        setShowCalendar(false)
      }

      onDateSelected(from, to)
    }
  }

  useOutsideClick({ ref, onClick: () => handleClose() })

  return (
    <Container ref={ref}>
      {!onlyCalendar && (
        <ButtonWrap onClick={handleShowCalendar}>
          <CalendarIcon />
        </ButtonWrap>
      )}

      {isShowCalendar && (
        <Calendar
          fixed={onlyCalendar}
          isOpen={isShowCalendar}
          isPreviousDaysEnabled
          selectedRange={selectedRange}
          showCancel={!onlyCalendar}
          showOk={!onlyCalendar}
          type={type}
          onClose={() => handleClose()}
          onSelected={handleSelect}
        />
      )}
    </Container>
  )
}

export default CalendarWidget
