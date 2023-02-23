import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`
export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const NotLoggedInWrap = styled.div`
  font-size: 14px;
  line-height: 18px;
  a {
    text-decoration: underline;
    color: #5f9ee1;
  }
  span {
    color: ${themeGet('colors.orange')};
    display: inline-block;
    padding-left: 5px;
  }
`
export const FormFieldWrap = styled.div<{ withError?: boolean }>`
  text-align: left;

  ${props =>
    props.withError &&
    css`
      label {
        color: ${themeGet('colors.orange')} !important;
      }
      input,
      textarea {
        border-color: ${themeGet('colors.orange')} !important;
      }
    `}
`
export const FieldWrapper = styled.div<{ withMargin?: boolean }>`
  margin-top: ${props => (props.withMargin ? '20px' : '0px')};
  label {
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
    color: #49ceb1;
    padding-left: 10px;
    display: inline-block;
  }
  input,
  textarea {
    border: 2px solid ${themeGet('colors.green')};
    border-radius: 10px;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 14px;
    outline: 0;
    color: #333;
    width: 100%;
    resize: none;
  }
  textarea {
    height: 330px;
  }
`

export const UploadInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 28px;
  span {
    color: #49ceb1;
  }
  .title {
    font-size: 24px;
    line-height: 30px;
  }
  .sub-title {
    font-size: 18px;
    line-height: 21px;
    margin: 10px 0;
  }
  .description {
    font-size: 16px;
    line-height: 19px;
    color: #828282;
  }
`
export const ImageWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  width: 100%;
  height: 250px;
  background-color: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center 20px;
  cursor: pointer;
  align-content: center;
  align-items: flex-end;
  position: relative;
  background-size: 120px 88px;
  overflow: hidden;
  ${props =>
    props.disabled &&
    css`
      background-color: rgba(227, 227, 227, 0.5) !important;
    `}

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 9999;
  }
  img,
  video {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 100%;
    z-index: 100;
    background-color: white;
  }
`

export const Cancel = styled.a`
  border-radius: 5px;
  background-color: #bdbdbd;
  color: #fff;
  padding: 10px 16px;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  &:hover {
    opacity: 0.8;
  }
`
export const ButtonsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  button {
    font-size: 16px;
    line-height: 20px;
    border-radius: 5px;
    background-color: #6e46ff;
    color: #fff;
    padding: 10px 54px;
    border: 0;
    transition: all 0.3s ease;
    box-shadow: none;
    cursor: pointer;
    &:disabled {
      background-color: #bdbdbd;
      cursor: default;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`

export const ErrorElem = styled.div`
  color: ${themeGet('colors.orange')} !important;
  margin: 6px 0;
  font-size: 14px;
  line-height: 18px;
  min-height: 18px;
`

export const SuccessElem = styled(ErrorElem)`
  color: #64d0af;
`
