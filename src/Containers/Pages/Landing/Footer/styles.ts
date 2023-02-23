import styled from 'styled-components'

import { Flex } from 'Components/UI'

import { device } from 'Constants/media'

export const FooterContainer = styled(Flex)`
  width: 100%;
  margin-top: auto;
  padding: 20px 20px;
`

export const InnerContainer = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const SectionHead = styled(Flex).attrs({
  as: 'h3',
})`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  width: 100%;
  margin: 0;

  @media ${device.tablet} {
    font-size: 14px;
  }
`

export const SectionList = styled.ul`
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  padding: 0;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;

  li {
    margin-bottom: 14px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;

    @media ${device.tablet} {
      font-size: 14px;
      line-height: 14px;
    }
  }
`

export const StoreLink = styled(Flex).attrs({
  as: 'a',
})`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  width: 134px;
  height: 30px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-decoration: none;
  align-items: center;
  align-content: center;
  justify-content: center;
`

export const Separator = styled(Flex)`
  width: 100%;
  height: 1px;
  background-color: #baece1;
`

export const Copyright = styled(Flex)`
  color: #baece1;

  font-size: 16px;
  line-height: 16px;

  span {
    color: white;
    margin-left: 5px;
  }
`
