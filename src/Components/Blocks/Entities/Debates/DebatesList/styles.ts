import styled from 'styled-components'

import { searchIconGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin: 0;
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
    padding: 8px 10px 8px 40px;
    font-size: 18px;
    outline: 0px;
    width: 100%;
    min-width: 326px;
    max-width: 326px;
    color: #828282;
    background-color: transparent;
  }

  input[type='search']::-webkit-search-cancel-button {
    /* Remove default */
    -webkit-appearance: none;

    /* Now your own custom styles */
    height: 14px;
    width: 14px;
    display: block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
    /* setup all the background tweaks for our custom icon */
    background-repeat: no-repeat;

    /* icon size */
    background-size: 14px;
    cursor: pointer;
  }
`

export const SearchIcon = styled(Icon).attrs({
  icon: searchIconGlyph,
  size: 20,
  fill: '#828282',
})`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  left: 14px;
`

export const TabsContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 34px;
`

export const TabItem = styled(Flex)<{
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

  &:last-of-type {
    margin-right: 0;
  }
`

export const RelativeContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;

  span {
    font-size: 16px;
  }

  .my-gallery-class {
    width: 100%;
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    &.with-2-posts {
      justify-content: flex-start !important;
      .my-masonry-grid_column:first-child {
        margin-right: 30px;
      }
    }
  }
  .my-masonry-grid_column {
    width: 296px !important;
  }
`

export const LoadMore = styled.button`
  cursor: pointer;
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: none;
  margin: 0 auto;
  background-color: #6e46ff;
  &:hover {
    opacity: 0.8;
  }
`
