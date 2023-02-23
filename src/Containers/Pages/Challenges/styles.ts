import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Image from 'next/image'

import { friendship2022 } from 'Assets/images/challenges'

import { Element, Flex } from 'Components/UI'

export const Background = styled.div`
  background-image: url('/static/images/main_bg.svg');
  background-position: top center;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  padding: 0 0 0 0;
`

export const Content = styled(Element)`
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
`

export const BlockHeader = styled(Flex)`
  display: flex;
  margin-bottom: 60px;
  justify-content: space-between;
`

export const Title = styled.div`
  font-size: 42px;
  color: #333333;
  line-height: 52px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 14px;
  span {
    color: #49ceb1;
  }
`
export const LeftSide = styled(Flex)`
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RightSide = styled.div`
  img {
    width: 450px;
    height: 425px;
  }
`

export const DescriptionHeader = styled(Element)`
  width: 100%;
  font-size: 18px;
  color: #333333;
  line-height: 24px;
  font-weight: normal;
  flex-wrap: wrap;
  text-align: left;

  p {
    margin-bottom: 8px;
  }

  strong {
    font-weight: 600;
  }

  span {
    color: ${themeGet('colors.green')};
  }
  b {
    font-weight: 600;
  }

  .list-item {
    margin-bottom: 14px;
    text-align: left;
    line-height: 23px;
    display: flex;
    width: 100%;
    span {
      font-weight: 600;
      &.not-required {
        color: ${themeGet('colors.orange')};
      }
    }
  }
`

export const HeaderImage = styled(Image).attrs({
  src: friendship2022,
  width: 414,
  height: 500,
  layout: 'fixed',
})``

export const SubmitYourProject = styled.a`
  padding: 10px 20px;
  background-color: #6e46ff;
  border-radius: 5px;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  width: max-content;
  max-width: 260px;
  min-width: 220px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const TabButton = styled.div<{ active?: boolean }>`
  margin-right: 42px;
  padding-bottom: 10px;
  display: flex;
  font-size: 18px;
  line-height: 23px;
  font-weight: 600;
  color: #bdbdbd;
  text-transform: uppercase;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      color: ${themeGet('colors.green')};
      border-bottom: 2px solid ${themeGet('colors.green')};
    `}
`

export const TabsWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
`

export const SubmitYourProjectBlock = styled.div`
  padding: 20px 0 24px;
  color: #fff;
  background-color: #5f9ee1;
  text-align: center;
  .title {
    font-weight: 600;
    font-size: 32px;
    line-height: 56px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 26px;
  }
  button {
    background: #49ceb1;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    outline: none;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`

export const SubmitSmall = styled.a`
  padding: 3px 0;
  background-color: #6e46ff;
  border-radius: 5px;
  display: inline-block;
  font-size: 24px;
  line-height: 34px;
  color: #fff;
  text-decoration: none;
  width: 220px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
