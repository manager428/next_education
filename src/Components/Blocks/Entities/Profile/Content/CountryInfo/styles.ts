import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
`
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  .row {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 22px;
    color: #828282;
    a {
      color: #49ceb1;
    }
  }
  .label {
    font-size: 16px;
    line-height: 20px;
    margin-right: 6px;
    color: #333333;
    display: inline-block;
  }
`
export const Map = styled.div`
  margin-top: 6px;
  border-radius: 20px;
  overflow: hidden;
`
