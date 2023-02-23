import styled from 'styled-components'

export const RewardWrapper = styled.div<{
  bottomMargin?: string
  height?: string
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: ${props => `${props.bottomMargin}px`};
  width: 148px;
  padding: 0 14px;
  cursor: pointer;
  img {
    object-fit: contain;
    height: ${props => props.height};
    width: 100%;
  }
`
export const Title = styled.div`
  color: #828282;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`
export const RewardCount = styled.div`
  position: absolute;
  right: 10px;
  top: 53%;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  padding: 1px 12px;
  box-shadow: 0 2px 6px rgba(22, 0, 85, 0.16);
  border-radius: 20px;
`
