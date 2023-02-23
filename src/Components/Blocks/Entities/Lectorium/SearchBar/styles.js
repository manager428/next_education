import styled from 'styled-components'

import { resetIconGlyph, searchIconGlyph } from 'Assets/svg/common'

import { Flex, Icon, Select } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  align-items: center;

  @media (max-width: 719px) {
    display: flex;
    flex-direction: column;
    margin-top: -20px;
  }
  @media (max-width: 350px) {
    margin-top: -30px;
    margin-bottom: -20px;
  }
`

export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  max-width: 790px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    width: 60%;
  }
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 720px) {
    width: 70%;
  }
  @media screen and (max-width: 719px) {
    width: 100%;
  }
  @media screen and (max-width: 350px) {
    width: 95%;
  }
  img {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 12px;
    left: 14px;
  }
  input {
    height: 40px;
    border: 1px solid #828282;
    border-radius: 20px;
    padding: 0px 10px 0px 40px;
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
  width: 20,
  height: 20,
  fill: '#828282',
})`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  left: 14px;
`

export const ResetButton = styled(Icon).attrs({
  icon: resetIconGlyph,
  width: 14,
  height: 14,
})`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`

export const LevelSelector = styled(Select)`
  width: 100%;

  @media (max-width: 719px) {
    width: 130px;
    margin-bottom: 14px;
  }
  .react-select__control {
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 0px;
    @media (max-width: 719px) {
      border-style: none;
    }
    &:hover {
      border-style: none;
    }
  }

  .react-select__indicators {
    svg {
      fill: #828282;
    }
  }

  .react-select__menu {
    border: 1px solid #6e46ff;
    border-radius: 20px;
  }
  .react-select__option {
    background-color: transparent !important;
  }
`
