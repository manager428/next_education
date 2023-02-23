import styled, { css } from 'styled-components'

import { debatesLogoGlyph } from 'Assets/svg/debates'

import { Flex, Icon } from 'Components/UI'

export const Background = styled.div<{ image?: string }>`
  background-image: url('/static/images/main_bg.svg');
  background-position: center 393px;
  background-repeat: no-repeat;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-repeat: repeat;
    `}
`

export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
`

export const Relative = styled(Flex)`
  position: relative;
`

export const Title = styled(Flex).attrs({
  as: 'h1',
})`
  font-weight: 600;
  font-size: 42px;
  line-height: 56px;
  color: #49ceb1;
  margin: 0;
`

export const Description = styled(Flex)`
  font-size: 18px;
  line-height: 28px;
`

export const CreateButton = styled(Flex).attrs({
  as: 'button',
})`
  background: #49ceb1;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  border: 0;
  box-shadow: none;
  color: white;
  cursor: pointer;
`

export const DebatesLogo = styled(Icon).attrs({
  icon: debatesLogoGlyph,
  width: 434,
  height: 274,
  layout: 'fixed',
})``
