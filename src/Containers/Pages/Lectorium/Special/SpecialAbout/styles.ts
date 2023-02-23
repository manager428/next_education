import styled from 'styled-components'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  color: #333333;
  padding-bottom: 40px;
`

export const Title = styled(Flex)`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
`

export const SubTitle = styled(Flex)<{
  textAlign?: string
  color?: string
}>`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  width: 100%;
  text-align: ${props => props.textAlign || 'left'};
  color: ${props => props.color || 'inherit'};

  font-family: 'Nunito Sans', sans-serif !important;

  p,
  span,
  li {
    font-family: 'Nunito Sans', sans-serif !important;
  }
`
export const Description = styled(Flex)<{ fontSize?: string }>`
  font-weight: 400;
  font-size: ${props => props.fontSize || '16px'};
  line-height: 28px;

  font-family: 'Nunito Sans', sans-serif;
  p,
  span,
  li {
    font-family: 'Nunito Sans', sans-serif !important;
  }
`

export const SocialContainer = styled(Flex)`
  box-sizing: border-box;
  border: 2px solid transparent;
  padding: 2px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  margin-right: 10px;
  align-self: flex-start;
  &:hover {
    border: 2px solid rgba(73, 206, 177, 0.2);
  }
`

export const SocialIcon = styled(Icon).attrs({
  size: 32,
})``

export const AboutImage = styled.img`
  width: 420px;
  height: 314px;
  object-fit: cover;
  border-radius: 10px;
`

export const LearnMoreSection = styled(Flex)`
  width: 100%;
  border: 2px solid #d3dae8;
  box-sizing: border-box;
  border-radius: 20px;
  min-height: 150px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
  align-content: center;
  padding: 20px 20px;
`

export const LearMoreButton = styled(Flex)<{ color: string }>`
  border: 1px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 100px;
  padding: 15px 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.color};
  text-decoration: none;
`
