import styled, { css } from 'styled-components'

import { Flex, Icon } from 'Components/UI'

export const Wrap = styled.div<{ borderRadius: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #2c2a32;
  border-radius: 0;
  padding: 20px 0;
  align-self: flex-end;
  margin-top: auto;
  flex-shrink: 0;
  ${props =>
    props.borderRadius &&
    css`
      border-radius: 14px;
    `}
`

export const Inner = styled(Flex)`
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  .bottom-info {
    text-align: center;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
    width: 100%;
    margin-top: 20px;
    span {
      margin-right: 4px;
    }
  }
`

export const FooterTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 37px;
  font-family: Chewy;
  color: #ffffff;
  display: none;
`

export const SocialWrap = styled.div`
  display: flex;
  width: 156px;
  justify-content: space-between;
  margin-bottom: 10px;
  margin: 0 auto;
`

export const SocialLink = styled.a`
  display: block;
  text-decoration: none;
`

export const NavLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: white;
  cursor: pointer;
  text-decoration: none;
`

export const NativeLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  z-index: 1000;
  position: relative;
`

export const Separator = styled(Flex)`
  width: 2px;
  height: 14px;
  background-color: white;
  margin-left: 14px;
  margin-right: 14px;
`

export const SocialIcon = styled(Icon).attrs(props => ({
  icon: props.icon,
  width: 32,
  height: 32,
}))`
  cursor: pointer;
`

export const DownloadContainer = styled(Flex)`
  position: absolute;
  top: 100px;
  left: 0;
  flex-wrap: wrap;
  display: none;
  @media screen and (max-width: 1024px) {
    left: 5%;
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const Title = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: white;
  width: 100%;
`

export const DownloadButton = styled(Flex)`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  width: 124px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-shadow: none;
  outline: 0;
  text-decoration: none;
  color: white;
`
