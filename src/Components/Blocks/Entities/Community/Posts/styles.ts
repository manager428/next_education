import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  position: relative;
  min-height: 600px;
  .my-gallery-class {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    min-height: 500px;
  }
  .my-masonry-grid_column {
    width: 296px !important;
    &:nth-child(1),
    &:nth-child(2) {
      margin-right: 45px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

export const LoadMore = styled.button`
  cursor: pointer;
  width: 220px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: none;
  margin: 0 auto;
  background-color: ${themeGet('colors.green')};
  &:hover {
    opacity: 0.8;
  }
`

export const Container = styled.div`
  padding-bottom: 50px;
  width: 100%;
  min-height: 600px;
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

export const Title = styled(Flex)`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: #6e46ff;
`

export const TabItem = styled.div<{
  hot?: boolean
  isActive?: boolean
}>`
  font-weight: 500;
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
    padding: 5px 10px 8px 40px;
    font-size: 18px;
    line-height: 25px;
    outline: 0px;
    width: 330px;
    color: #828282;
    font-family: 'Nunito Sans';
  }
`

export const RelativeContainer = styled(Flex)`
  position: relative;
`
