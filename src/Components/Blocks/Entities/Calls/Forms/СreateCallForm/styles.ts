import styled, { css } from 'styled-components'

import { descriptionGlyph, tagsGlyph, teachersGlyph } from 'Assets/svg/calls'

import { Flex, Icon } from 'Components/UI'

import 'simplebar/dist/simplebar.min.css'

export const FormContainer = styled.form`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  /* padding-right: 20px; */

  .description-field {
    &.error {
      border: 2px solid #eb5757 !important;
    }
  }

  .react-select__container {
    &.error {
      .react-select__control {
        border: 2px solid #eb5757;
      }
    }
  }

  .react-select__control {
    background-color: transparent !important;
    min-height: 32px;
    max-height: 32px;

    border: 2px solid #d3dae8;

    &:hover {
      border: 2px solid #d3dae8;
    }
  }

  .react-select__value-container {
    min-height: 32px;
    max-height: 32px;
    padding: 0 12px;
  }

  .react-select__value-container {
    height: 32px;
    input {
      height: 32px;
    }
  }
  .react-select__value-container > div:last-child {
    height: 32px;
  }
  .react-select__input {
    min-height: 32px;
  }

  .react-select__single-value {
    color: #828282;
    font-size: 12px;
    font-family: 'Nunito Sans', 'sans-serif';
    color: #071d40;
  }

  .react-select__indicators {
    height: 32px;
    svg {
      fill: #d3dae8;
    }
  }

  .react-select__placeholder {
    font-size: 12px;
    font-family: 'Nunito Sans', 'sans-serif';
    color: #071d40;
  }

  .react-select__menu {
    border: 1px solid #6e46ff;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 12px;
  }
`

export const TagsIcon = styled(Icon).attrs({
  icon: tagsGlyph,
  size: 16,
})``

export const TeachersIcon = styled(Icon).attrs({
  icon: teachersGlyph,
  size: 16,
})`
  fill: #d3dae8;
`

export const DescriptionIcon = styled(Icon).attrs({
  icon: descriptionGlyph,
  size: 16,
})``

export const SectionTitle = styled(Flex)`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`

export const EditorInputWrapper = styled(Flex)`
  width: 100%;
  margin-top: 10px;

  .editor-wrapper {
    border: 2px solid #d3dae8;

    .public-DraftEditorPlaceholder-inner {
      color: #071d40;
    }
  }
`

export const FormButton = styled(Flex).attrs({ as: 'button' })<{
  active?: boolean
  disabled?: boolean
}>`
  border: none;
  background: #d3dae8;
  border-radius: 5px;
  height: 40px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.active &&
    css`
      background: #49ceb1;
    `}
`

export const FormButtonsContainer = styled(Flex)`
  justify-content: flex-end;
  margin-top: auto;
  flex-wrap: wrap;
`

export const ErrorContainer = styled(Flex)`
  font-size: 12px;
  font-weight: 600;
  color: #eb5757;
  text-align: right;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 14px;
`

export const AttachmentNotification = styled(Flex)`
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  color: #ffa08c;
`

export const CheckboxWrapper = styled(Flex)`
  width: 100%;
  font-size: 16px;

  label {
    display: flex;
    width: 90%;
    flex-grow: 1;
    font-size: 16px;
    margin-bottom: 0px;
    align-content: center;
    align-items: center;
    margin-left: 5px;
  }
`

export const GrayText = styled.span`
  color: #cad2e3;
  font-weight: 600;
  font-size: 14px;
`
