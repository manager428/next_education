import styled from 'styled-components'

import { editMessageIcon } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

export const RoundedBlock = styled.div`
  margin-bottom: 14px;
  background-color: #ffffff;
  border-radius: 14px;
  padding: 12px 14px;
`
export const BlockTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const BlockTitleText = styled(Flex)`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  .edit-block {
    visibility: hidden;
    opacity: 0;
    color: #bdbdbd;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
`
export const BlockTitleViewAllText = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: #828282;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const ContentTitleText = styled(Flex)`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
`
export const ContentTitleViewAllText = styled.span`
  font-size: 18px;
  line-height: 25px;
  color: #828282;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const EditIcon = styled(Icon).attrs({
  icon: editMessageIcon,
  size: 12,
  fill: '#828282',
})`
  margin-right: 6px;
`
