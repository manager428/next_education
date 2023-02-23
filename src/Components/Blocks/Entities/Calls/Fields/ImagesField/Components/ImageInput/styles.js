import styled, { css } from 'styled-components'

import { trashBinGlyph } from 'Assets/svg/calls'
import { photoCameraGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

export const UploadIcon = styled(Icon).attrs({
  icon: photoCameraGlyph,
  width: 38,
  height: 34,
})`
  width: 38px;
  height: 34px;
  position: absolute;
  top: 19px;
  left: 40%;
`

export const UploadInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
  span {
    color: #6e46ff;
  }
  .title {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
  .sub-title {
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    margin: 7px 0;
  }
  .description {
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    color: #828282;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  border: 2px solid ${props => (props.error ? '#FFA08C' : '#8de1d1')};
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center 20px;
  cursor: pointer;
  align-content: center;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  padding: 19px;
  box-sizing: border-box;

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
    left: 0;
  }
  img,
  video {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 100%;
    z-index: 100;
    background-color: white;
    left: 0;
    top: 0;
  }
`

export const Cancel = styled.a`
  border-radius: 5px;
  background-color: #bdbdbd;
  color: #fff;
  padding: 10px 16px;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  button {
    font-size: 16px;
    line-height: 20px;
    border-radius: 5px;
    background-color: #6e46ff;
    color: #fff;
    padding: 10px 54px;
    border: 0;
    transition: all 0.3s ease;
    box-shadow: none;
    cursor: pointer;
    &:disabled {
      background-color: #bdbdbd;
      cursor: default;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`

export const ErrorElem = styled.div`
  color: #eb5757;
  margin: 6px 0;
  font-size: 14px;
  line-height: 18px;
  min-height: 18px;
`

export const SuccessElem = styled(ErrorElem)`
  color: #64d0af;
`

export const DeleteIcon = styled(Icon).attrs({
  icon: trashBinGlyph,
  size: 20,
})`
  z-index: 9999;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  fill: #ffa08c;
`
