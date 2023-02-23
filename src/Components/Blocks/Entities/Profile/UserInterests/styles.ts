import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover .edit-block {
    visibility: visible;
    opacity: 1;
    transition: all 1s ease;
  }
`

export const InterestsWrap = styled.div<{ showAll?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  max-height: 115px;
  overflow: hidden;
  ${props =>
    props.showAll &&
    css`
      height: auto !important;
      max-height: none !important;
    `}
`
export const InterestItem = styled.div`
  padding: 0 10px;
  color: #49ceb1;
  border: 1px solid #49ceb1;
  border-radius: 30px;
  margin: 0 10px 10px 0;
  line-height: 28px;
  box-sizing: border-box;
  font-size: 14px;
  height: 30px;
`
