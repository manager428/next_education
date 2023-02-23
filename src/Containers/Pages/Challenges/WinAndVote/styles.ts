import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 50px;
`
export const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  color: #333;
  margin-bottom: 45px;
`

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
`

export const TabItem = styled.div<{ isActive?: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#49CEB1' : '#333')};
  margin-right: 30px;
  cursor: pointer;
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
    line-height: 23px;
    outline: 0px;
    width: 330px;
    color: #828282;
  }
`

export const ListContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  .my-gallery-class {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
  background-color: #6e46ff;
  &:hover {
    opacity: 0.8;
  }
`
