import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  width: 330px;
  height: 370px;
  border: 2px solid #6e46ff;
  box-sizing: border-box;
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 18px 20px;
  align-items: flex-start;
  align-content: flex-start;

  @media (max-width: 1024px) {
    margin-left: 15px;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: black;
  width: 100%;
`

export const StepsList = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 14px;
`

export const Step = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  height: 80px;
`
export const ProgressLine = styled.div`
  position: absolute;
  top: 0px;
  left: 13px;
  height: 100%;
  width: 2px;
  background-color: #6e46ff;
`

export const StatusContainer = styled(Flex)`
  width: 30px;
  flex-direction: column;

  position: relative;
`

export const Status = styled(Flex)`
  border: 2px solid #6e46ff;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 100;
`

export const Content = styled(Flex)`
  flex-grow: 1;
  margin-left: 11px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  max-width: 82%;
`

export const Name = styled(Flex)`
  width: 100%;
  color: #6e46ff;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  align-content: center;
  align-items: center;
`

export const Dot = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #6e46ff;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
`

export const Description = styled(Flex)`
  color: #828282;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  margin-top: 5px;
`
