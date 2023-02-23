import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
`

export const Inner = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;

  .my-gallery-class {
    width: 100%;
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    &.with-2-posts {
      justify-content: flex-start !important;
      .my-masonry-grid_column:first-child {
        margin-right: 30px;
      }
    }
  }
  .my-masonry-grid_column {
    width: 296px !important;
  }
`

export const MasonryBrick = styled(Flex)`
  flex-wrap: wrap;
  margin: 0 8px 8px 0; /* Some gutter */
  padding: 14px;
  box-shadow: 0px 2px 20px rgba(8, 36, 77, 0.08);
  border-radius: 8px;
  max-width: 300px;
  width: 100%;

  margin-bottom: 30px;

  img {
    flex-shrink: 0;
    border-radius: 100px !important;
  }
`

export const Title = styled(Flex).attrs({
  as: 'h2',
})<TypographyProps>`
  font-weight: 600;
  padding: 0;
  color: #071d40;

  span {
    color: ${themeGet('colors.green')};
  }

  > div {
    width: 100%;
  }

  ${typography};
`
