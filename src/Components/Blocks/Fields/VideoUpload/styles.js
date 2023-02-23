import styled, { css } from 'styled-components'

import { photoCameraGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const UploadIcon = styled(Icon).attrs({
  icon: photoCameraGlyph,
  width: 78,
  height: 68,
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
    color: #49ceb1;
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
  height: 197px;
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
    object-fit: cover;
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

export const SuccessElem = styled(ErrorElem)`
  color: #64d0af;
`

export const FileName = styled(Flex)`
  background-color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`
