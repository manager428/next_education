import styled, { css } from 'styled-components'

import Image from 'next/image'
import SimpleBar from 'simplebar-react'

import { resetIconGlyph, searchIconGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const Container = styled(Flex)`
  background: #ffffff;
  border-radius: 20px;
  width: 400px;
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -183px;
  left: 50%;
  margin-left: -200px;
  flex-wrap: wrap;
  filter: drop-shadow(0px 6px 16px rgba(42, 47, 79, 0.26));
  z-index: 9999;
`
export const Title = styled.h3`
  width: 100%;
  margin: 0;
  text-align: center;
  color: #333333;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`

export const StudentsContainer = styled(Flex)`
  width: 100%;
  margin-top: 22px;
  min-height: 200px;
`

export const StudentsList = styled(SimpleBar)`
  overflow-y: auto;
  max-height: 230px;
  height: 230px;
  width: 100%;

  .simplebar-track.simplebar-vertical {
    width: 6px;
  }
  .simplebar-placeholder {
    display: none;
  }

  .simplebar-content {
    padding: 6px 0px !important;
    padding-right: 15px !important;
    padding-left: 6px !important;
    height: fit-content;
  }
  .simplebar-track {
    background-color: #e4e9f3;
    border-radius: 8px;
  }
  .simplebar-scrollbar {
    border-radius: 8px;
    &:before {
      background: #d3dae8;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid #d3dae8;
    }
  }
`

export const Student = styled(Flex)<{ active: boolean }>`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      border: 1px solid #49ceb1;
      color: #49ceb1;
    `}
`

export const InformContainer = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: #49ceb1;
`

export const FormButton = styled.button<{ active?: boolean }>`
  border: none;
  background: #d3dae8;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      background: #49ceb1;
    `}
`

export const StudentContainer = styled(Flex)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  align-items: center;
  align-content: center;
  margin-bottom: 14px;
`

export const Avatar = styled(Image).attrs({
  width: 32,
  height: 32,
  layout: 'fixed',
  objectFit: 'cover',
})`
  border-radius: 50%;
`

export const CheckBox = styled(Flex)<{
  type?: 'circle' | undefined
  checked: boolean
}>`
  width: 18px;
  height: 18px;
  position: relative;
  border: 2px solid #d3dae8;
  background: white;
  border-radius: 4px;
  margin: 0;
  top: 0;

  &:after {
    content: '';
    width: 7px;
    height: 4px;
    position: absolute;
    top: 4px;
    left: 3px;
    border: 2px solid #49ceb1;
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    transform: rotate(-48deg);
  }

  ${props =>
    props.checked &&
    css`
      border: 2px solid #8de1d1;
      background: white;
      :after {
        opacity: 1;
      }
    `};

  ${props =>
    props.type === 'circle' &&
    css`
      border-radius: 20px;
    `}
`

export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  max-width: 790px;
  width: 100%;
  margin-top: 16px;

  img {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 8px;
    left: 14px;
  }
  input {
    height: 30px;
    border: 1px solid #828282;
    border-radius: 20px;
    padding: 0px 40px 0px 40px;
    font-size: 18px;
    outline: 0px;
    width: 100%;
    max-width: 790px;
    color: #828282;
    font-family: 'Nunito Sans';
    background-color: transparent;
  }
`

export const SearchIcon = styled(Icon).attrs({
  icon: searchIconGlyph,
  width: 16,
  height: 16,
  fill: '#828282',
})`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 6px;
  left: 14px;
`

export const ResetButton = styled(Icon).attrs({
  icon: resetIconGlyph,
  size: 14,
})`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 14px;
`

export const SelectAllContainer = styled(Flex)`
  width: 55px;
  padding-top: 16px;
  align-items: center;
  margin-right: 26px;
  margin-left: 6px;

  span {
    margin-left: 15px;
  }
`
