import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Background = styled.div`
  padding: 0px 0px;
  background: linear-gradient(
    234.92deg,
    #f6f8fd 4.44%,
    rgba(246, 248, 253, 0.6) 42.07%,
    rgba(246, 248, 253, 0) 66.19%
  );

  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`
export const Container = styled(Flex)`
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  @media screen and (max-width: 767px) {
    padding: 30px 16px;
  }
`
