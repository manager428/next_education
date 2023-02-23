import React, { useEffect, useRef, useState } from 'react'

import dynamic from 'next/dynamic'

import useOutsideClick from 'Hooks/useOutsideClick'

import { ButtonWrap, Container, TimePickerIcon } from './styles'

type Props = {
  initialValue: string
  isOpened?: boolean
  onClose?: () => void
  onTimeSelected: (time: string) => void
}

const Timepicker = dynamic(() => import('Components/UI/TimePicker'))

const TimePickerWidget: React.FC<Props> = ({
  onTimeSelected,
  initialValue,
  isOpened = false,
  onClose,
}) => {
  const ref = useRef(null)
  const [isShowTimePicker, setShowTimePicker] = useState<boolean>(false)
  useEffect(() => setShowTimePicker(isOpened), [isOpened])

  const handleShowPicker = (event: React.MouseEvent): void => {
    event.preventDefault()

    setShowTimePicker(value => !value)
  }

  const handleSelect = (time): void => {
    setShowTimePicker(false)
    onTimeSelected(time)
  }

  const handleClose = (): void => {
    setShowTimePicker(false)
    if (onClose) {
      onClose()
    }
  }

  useOutsideClick({ ref, onClick: () => handleClose() })

  return (
    <Container ref={ref}>
      <ButtonWrap onClick={handleShowPicker}>
        <TimePickerIcon />
      </ButtonWrap>
      {isShowTimePicker && (
        <Timepicker
          initialValue={initialValue}
          isOpen={isShowTimePicker}
          onCancelClick={() => setShowTimePicker(false)}
          onOkClick={handleSelect}
        />
      )}
    </Container>
  )
}

export default TimePickerWidget
