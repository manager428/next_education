import React from 'react'

import { Container, LargeCircle, SmallCircle } from './styles'
import { Color, Props } from './types'

const colors = {
  [Color.orange]: { hex: '#FFA08C', rgb: `255, 160, 140` },
  [Color.red]: { hex: '#EB5757', rgb: `235, 87, 87` },
  [Color.yellow]: { hex: '#EBC747', rgb: '235, 199, 71' },
  [Color.blue]: { hex: '#5F9EE1', rgb: '95, 158, 225' },
  [Color.green]: { hex: '#6E46FF', rgb: '73, 206, 177' },
}

const NotificationPulser: React.FC<Props> = ({ color }) => {
  const selectedColor = colors[color]

  return (
    <Container>
      <LargeCircle color={selectedColor.hex} rgb={selectedColor.rgb} />
      <SmallCircle color={selectedColor.hex} />
    </Container>
  )
}

export default NotificationPulser
