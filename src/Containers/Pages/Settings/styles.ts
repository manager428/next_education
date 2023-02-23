import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Flex } from 'Components/UI'

export const Background = styled.div`
  background-color: #f7faff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  max-width: 980px;
  align-items: flex-start;
`

export const Sidebar = styled(Flex)`
  width: 220px;
  padding-top: 20px;
  flex-wrap: wrap;
  height: 540px;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  flex-shrink: 0;
`
export const Title = styled.span`
  color: #49ceb1;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  width: 100%;
`

export const SidebarContent = styled(Flex)`
  background-color: #fff;
  padding: 20px;
  border: 2px solid ${themeGet('colors.green')};
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  flex-grow: 1;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const SidebarItem = styled(Flex).attrs({ as: 'button' })<{
  active?: boolean
}>`
  box-shadow: none;
  padding: 9px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  height: 40px;
  background: white;
  color: #bdbdbd;
  width: 100%;
  cursor: pointer;
  outline: 0px;
  text-align: left;

  ${props =>
    props.active &&
    css`
      color: white;
      background: #49ceb1;
    `}
`

export const FormContent = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-top: 68px;
  position: relative;
  min-height: 50vh;

  .profile-select {
    width: 100%;
    label {
      font-size: 16px;
    }
    .react-select__control {
      background-color: transparent;
    }
  }
`
