import styled from 'styled-components'

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
export const BioText = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  color: #828282;
  font-size: 14px;
  line-height: 18px;
`
export const ReadMore = styled.div`
  color: #49ceb1;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`
