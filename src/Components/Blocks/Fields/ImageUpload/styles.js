import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { photoCameraGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

export const UploadIcon = styled(Icon).attrs({
  width: 78,
  height: 68,
  icon: photoCameraGlyph,
})`
  width: 78px;
  height: 68px;
  position: absolute;
  top: 10px;
  left: 40%;
`

export const UploadInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 28px;
  span {
    color: #6e46ff;
  }
  .title {
    font-size: 18px;
    line-height: 24px;
  }
  .sub-title {
    font-size: 18px;
    line-height: 22px;
    margin: 10px 0;
  }
  .description {
    font-size: 16px;
    line-height: 19px;
    color: #828282;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 197px;
  background-color: #fff;
  border: 2px solid
    ${props =>
      props.error ? themeGet('colors.red') : themeGet('colors.green')};
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center 20px;
  cursor: pointer;
  align-content: center;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  margin-right: 40px;

  @media screen and (max-width: 1024px) {
    width: 60%;
    margin-right: 10px;
  }
  @media screen and (max-width: 720px) {
    width: 50%;
    margin: 0 auto;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    margin: 0 10px;
  }
  ${props =>
    props.disabled &&
    css`
      background-color: rgba(227, 227, 227, 0.5) !important;
    `}
  input {
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 9999;
  }
  img,
  video {
    position: absolute;
    width: 100%;
    object-fit: contain;
    height: 100%;
    z-index: 100;
    background-color: white;
  }
`

export const ErrorElem = styled.div`
  color: #eb5757;
  margin: 6px 0;
  font-size: 14px;
  line-height: 18px;
  min-height: 18px;
`
