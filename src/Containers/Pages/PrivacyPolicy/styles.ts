import styled from 'styled-components'

import { Flex } from 'Components/UI'

export const Background = styled.div<{ image?: string }>`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
`

export const Container = styled(Flex)`
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
`

export const Wrapper = styled.div`
  font-size: 14px;
  padding: 30px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  line-height: 1.5;

  p {
    padding: 14px 0;
  }

  ol {
    list-style: decimal;
    padding-left: 20px;
  }

  ol li:first-child {
    margin-top: 20px;
  }

  li {
    margin-bottom: 20px;
  }

  ol.alphabetical {
    list-style: lower-alpha;
  }

  ul.ryml {
    padding-left: 20px;
    list-style: lower-roman;
  }

  h3 {
    margin-bottom: 10px;
    text-decoration: underline;
  }

  .main-li {
    margin-bottom: 30px;
  }

  .main-li::marker {
    font-weight: 600;
  }

  a {
    color: #49ceb1;
  }
`
