import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  max-width: 520px;

  background: #ffffff;
  border-radius: 10px;

  filter: drop-shadow(0px 4px 10px rgba(13, 42, 98, 0.1));

  z-index: 999;
  position: relative;
`

export const Content = styled(Flex)`
  width: 100%;
  padding: 14px;
  align-content: flex-start;
  align-content: flex-start;
`

export const Footer = styled(Content)`
  border-top: 1px solid #e4e9f3;
  justify-content: space-between;
`

export const Avatar = styled(Flex).attrs({ as: 'img' })`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
`

export const SubmitButton = styled(Flex).attrs({
  as: 'button',
})<{ disabled?: boolean }>`
  cursor: pointer;
  font-size: 14px;
  font-family: ' Nunito Sans', sans-serif;
  color: white;
  border: 0px;
  background: #49ceb1;
  border-radius: 5px;
  padding: 6px 10px;
  align-items: center;
  align-content: center;

  :disabled {
    background: #cad2e3;
  }
`

export const CancelButton = styled(SubmitButton).attrs({
  as: 'button',
})`
  background: #cad2e3;
`

export const FooterButton = styled(Flex).attrs({
  as: 'button',
})`
  border: 0;
  background: unset;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #828282;
  align-items: center;
  align-content: center;
  cursor: pointer;
`

export const HiddenContainer = styled.div`
  display: none;
`

export const ImagePreview = styled(Flex)`
  position: relative;
  width: 446px;
  height: 242px;
  img {
    width: 100%;
    object-fit: contain;
  }
`

export const DeletePreviewButton = styled(Flex).attrs({
  as: 'button',
})`
  cursor: pointer;
  padding: 6px;
  background: unset;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid #ffa08c;
  box-sizing: border-box;
  border-radius: 5px;
`
