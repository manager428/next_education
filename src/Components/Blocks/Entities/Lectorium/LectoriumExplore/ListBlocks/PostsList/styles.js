import styled, { css } from 'styled-components'

import { searchIconGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

export const Container = styled.div`
  padding-bottom: 50px;
  width: 100%;
  .title {
    font-weight: 600;
    font-size: 40px;
    line-height: 56px;
    color: #333;
    margin-bottom: 45px;
  }
  .tabs-wrap {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    margin-top: 31px;
  }
  .tab-items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: black;
  text-align: center;
  width: 100%;
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

export const TabItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#6E46FF' : '#828282')};
  margin-right: 12px;
  cursor: pointer;
  ${props =>
    props.hot &&
    !props.isActive &&
    css`
      color: #c869f5;
    `}
  &:last-of-type {
    margin-right: 0;
  }
`
export const SearchWrap = styled.div`
  position: relative;

  input[type='search'] {
    -webkit-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  img {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    left: 14px;
  }
  input {
    border: 1px solid #828282;
    border-radius: 20px;
    padding: 5px 10px 8px 40px;
    font-size: 18px;
    line-height: 25px;
    outline: 0px;
    width: 330px;
    color: #828282;
    font-family: 'Nunito Sans';
  }
`
