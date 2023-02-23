import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex, Icon } from 'Components/UI'

export const BlockTimeline = styled.div`
  padding: 40px 0;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(233, 241, 252, 0.6);
  border-radius: 20px;
  margin-bottom: 80px;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;
  color: ${themeGet('colors.gray')};
  margin-bottom: 14px;
`

export const Description = styled.div`
  margin-bottom: 40px;
  color: #49ceb1;
  font-size: 28px;
  line-height: 35px;
`

export const TimeItemsContainer = styled(Flex)`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
`

export const LineGray = styled.div`
  background-color: #e9f1fc;
  height: 20px;
  position: absolute;
  width: 80%;
  left: 90px;
  top: 83px;
  z-index: 5;
`

export const BottomInfoContainer = styled(Flex)`
  display: flex;
  max-width: 710px;
  margin: 0 auto;
  justify-content: space-between;
`

export const BottomInfo = styled(Flex)`
  display: flex;
  flex-direction: column;
  width: 220px;
  align-items: center;
  &:last-child {
    padding-left: 50px;
    width: 270px;
    margin-right: -20px;
  }
`

export const ImageContainer = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 200px;
    background-color: #e9f1fc;
    position: absolute;
    bottom: 22px;
  }
`

export const BottomInfoTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: ${themeGet('colors.gray')};
  margin-bottom: 9px;
  margin-top: 20px;
`

export const BottomInfoDescription = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  margin-bottom: 40px;
`

export const Line = styled.div<{ progress: number }>`
  background-color: #6e46ff;
  border-radius: 10px;
  height: 20px;
  position: absolute;
  left: 90px;
  top: 83px;
  z-index: 10;

  ${props =>
    props.progress &&
    css`
      width: ${props.progress}px;
    `}
`
export const TimeItemContainer = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TimeItemDate = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #49ceb1;
  margin-bottom: 14px;
`

export const TimeItemIcon = styled(Icon).attrs({
  width: 100,
  height: 100,
  layout: 'fixed',
})`
  z-index: 999;
  margin-bottom: 20px;
`

export const TimeItemTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #333333;
  margin-bottom: 9px;
`

export const TimeItemDescription = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  margin-bottom: 40px;
`
