import styled, { css } from 'styled-components'

export const Avatar = styled.div`
  width: ${props => `${props.width}px`};
  min-width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .status {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    top: 2px;
    right: 2px;
    ${props =>
      props.online === 'no' &&
      css`
        display: none;
      `}
    ${props =>
      props.online
        ? css`
            background-color: #6e46ff;
          `
        : css`
            background-color: #ffa08c;
          `}
  }
`
