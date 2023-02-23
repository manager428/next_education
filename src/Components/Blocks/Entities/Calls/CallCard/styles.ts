import styled, { css } from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)<{ borderColor: string }>`
  max-width: 480px;
  width: 100%;
  background: #ffffff;
  border: 2px solid #e9f1fc;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  color: #071d40;
  cursor: pointer;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    height: 102%;
    left: -1px;
    top: -2px;
    background: ${props => props.borderColor};
    border-radius: 10px 0px 0px 10px;
    width: 10px;
  }
`

export const Header = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  align-content: center;
  min-height: 26px;
`

export const CardDate = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #071d40;
`
export const ActionButton = styled(Flex).attrs({
  as: 'button',
})`
  flex-shrink: 0;
  border: 1px solid #49ceb1;
  box-sizing: border-box;
  border-radius: 5px;
  color: #6e46ff;
  font-size: 14px;
  line-height: 18px;
  min-width: 106px;
  align-items: center;
  text-align: center;
  padding: 3px 8px;
  justify-content: center;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 999;
  margin: 0;

  ${props =>
    props.color === 'orange' &&
    css`
      border-color: #ffa08c;
      color: #ffa08c;
    `};

  ${props =>
    props.color === 'gray' &&
    css`
      border-color: #bdbdbd;
      color: #bdbdbd;
    `};

  ${props =>
    props.color === 'blue' &&
    css`
      border-color: #5f9ee1;
      color: #5f9ee1;
    `};

  ${props =>
    props.color === 'green' &&
    css`
      border-color: #6e46ff;
      color: #6e46ff;
    `};
`

export const Title = styled.h2`
  font-weight: 600;
  min-height: 60px;
  max-height: 60px;
  font-size: 22px;
  line-height: 20px;
  font-size: 16px;
  width: 100%;
  margin: 8px 0 0 0;
  display: flex;
  align-content: center;
  align-items: center;

  overflow: hidden;
`

export const Level = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`
export const ParticipantsBlock = styled(Flex)`
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 10px;
  }
`

export const ParticipantLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  align-content: center;
  z-index: 100000;
`
export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 50px;
  margin-right: 6px;
`

export const LearnMore = styled(Flex).attrs({
  as: 'button',
})`
  cursor: pointer;
  outline: 0;
  background-color: transparent;
  margin: 0;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #6e46ff;
  display: flex;
  align-items: center;
  text-align: right;
  box-shadow: none;
  border: 0px;
`

export const CardStatusContainer = styled(Flex)`
  position: relative;
`

export const StatusToolTip = styled(Flex)`
  position: absolute;
  top: 150%;
  left: -80px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: #333333;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 10px;
  min-width: 166px;
  text-align: center;
  justify-content: center;
  z-index: 99999;
`

export const CallImageContainer = styled.div`
  width: 174px;
  height: 172px;
  position: relative;
  margin-left: 4px;
`
export const CallImage = styled(Flex).attrs({})<{
  grayscaled?: boolean
}>`
  position: absolute;
  top: -2px;
  left: 5px;

  ${props =>
    props.grayscaled &&
    css`
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
    `}
`
