import styled from 'styled-components'

import Image from 'next/image'

export const Logo = styled(Image).attrs({
  width: 40,
  height: 40,
  layout: 'fixed',
  objectFit: 'cover',
})`
  border-radius: 50%;
`
