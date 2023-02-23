import styled, { keyframes } from 'styled-components'

const pusleColored = rgb => keyframes`
  0% {
      -moz-box-shadow: 0 0 0 0 rgba(${rgb}, 0.7);
      box-shadow: 0 0 0 0 rgba(${rgb}, 0.7);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(${rgb}, 0);
      box-shadow: 0 0 0 10px rgba(${rgb}, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(${rgb}, 0);
      box-shadow: 0 0 0 0 rgba(${rgb}, 0);
  }`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3px;
  right: -4px;
  /* flex-shrink: 0; */
`

export const LargeCircle = styled.div<{ color: string; rgb: string }>`
  content: '';
  display: block;
  background-color: ${props => props.color};
  width: 14px;
  height: 14px;

  border-radius: 50%;
  position: absolute;
  animation: ${({ rgb }) => pusleColored(rgb)} 2s infinite;
  opacity: 0.4;
`

export const SmallCircle = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  opacity: 1;
  background-color: ${props => props.color};
`
