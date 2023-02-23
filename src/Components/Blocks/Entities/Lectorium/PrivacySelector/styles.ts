import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Checkbox, Flex } from 'Components/UI'

export const Container = styled(Flex)``

export const StyledCheckbox = styled(Checkbox)`
  label {
    margin-left: 10px;
  }
  .checkbox {
    border-color: ${themeGet('colors.blueMid2')};
    border-radius: 50%;
    &.checked {
      border-color: ${themeGet('colors.green')};
    }
  }
`

export const Label = styled.label`
  color: ${themeGet('colors.green')};
  font-size: 16px;
  width: 100%;
  margin-bottom: 4px;
`
