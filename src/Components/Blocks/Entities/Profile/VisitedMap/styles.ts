import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Element } from 'Components/UI'

export const ZoomButton = styled(Element).attrs({ as: 'button' })`
  border: 1px solid ${themeGet('colors.blueMid')};
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.04));
  border-radius: 5px;
  color: ${themeGet('colors.blueMid')};
  font-size: 18px;
  width: 26px;
  height: 26px;
`
