import styled from 'styled-components'

import { calendarGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)``

export const ButtonWrap = styled(Flex).attrs({ as: 'button' })`
  background: #ffffff;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  outline: 0;
  cursor: pointer;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.12));
`

export const CalendarIcon = styled(Icon).attrs({
  icon: calendarGlyph,
  size: 18,
})``
