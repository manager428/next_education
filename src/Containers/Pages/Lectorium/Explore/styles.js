import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Wrapper = styled(Flex)`
  background-color: white;
  flex: 1;
`

export const ShareButton = styled(Flex).attrs({
  as: 'button',
})`
  background: #cad2e3;
  border-radius: 5px;
  height: 22px;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  color: white;
  justify-content: space-between;
  border: 0px;
  padding: 0 8px;
  cursor: pointer;
  outline: 0px;
`
export const PrivacyWrapper = styled(Flex)`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  color: #828282;
  margin-top: 30px;
`

export const SuccessMessage = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  text-align: center;
  margin-top: 20px;
`

export const ErrorMessage = styled(SuccessMessage)`
  color: rgb(235, 87, 87);
`
