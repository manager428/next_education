import styled, { css } from 'styled-components'

import { informGlyph } from 'Assets/svg/common'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

export const Container = styled(Flex)`
  background-color: #f3f5f9;
  border-radius: 14px;
  width: 100%;
  padding: 8px 14px;
  font-family: 'Nunito Sans';
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const Title = styled(Flex).attrs({ as: 'span' })`
  color: #333333;
  font-weight: 500;
  font-size: 16px;
`

export const Status = styled(Flex)`
  width: 100%;
  align-items: center;
  color: #828282;
  font-size: 14px;
`

export const OnlineIndicator = styled.div`
  margin-left: 7px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.online ? '#49CEB1' : '#FFA08C')};
`

export const InfoButton = styled(Icon).attrs({
  icon: informGlyph,
  size: 24,
})`
  cursor: pointer;

  fill: #bdbdbd;

  &:hover {
    fill: #2f80ed;
  }

  ${props =>
    props.isActive &&
    css`
      fill: #2f80ed;
    `}
`
export const GroupContainer = styled(Flex)`
  position: relative;
  right: -31px;
  cursor: pointer;
`

export const GroupItemItem = styled(Flex)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: #49ceb1;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: white;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: ${props => props.zIndex};
  right: ${props => props.right || '0'};
`
