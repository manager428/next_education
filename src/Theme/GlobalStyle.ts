import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { themeGet } from '@styled-system/theme-get'

export default createGlobalStyle`
  ${styledNormalize}

  #__next {
    display: flex;
    flex: 1;
    width: 100%;
  }

  .globalStyles {
    /* height: 100%; */
  }

  html {
    height: 100%;
   }

  body {
    color: ${themeGet('colors.font.primary')};
    background-color: ${themeGet('colors.bg.primary')};
    font-size: 14px;
    font-family: ${themeGet('font')};
    line-height: 20px;
    height: 100%;
    padding: 0;
    overflow: auto;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex: 1; /* no need anymore to deal with height/width */
    flex-direction: column;
    white-space: break-spaces;

    @media screen and (max-width: 1024px) {
      .submit-container {
        width: 40%;
      }
    }
    @media screen and (max-width: 1023px) {
      .share-container {
        display: none;
      }
      .submit-container {
        width: 40%;
      }
    }
    @media screen and (max-width: 720px) {
      .submit-container {
        width: 80%;
        margin: 10px 70px;
      }
    }
    @media screen and (max-width: 719px) {
      .category {
        display: none;
      }
    }

    @media screen and (max-width: 350px) {
      .submit-container {
        width: 95%;
        margin: 10px 10px;
      }
      .tabs-wrap {
        margin-left: 10px;
      }
      .slider-slide {
        width: 285px !important;
      }
      .slider-list {
        height: 315px;
      }
    }

    a, button, input, textarea {
      outline: 0px;
      box-shadow: none;
      border: 0px;
      background-color: transparent;
      cursor: pointer;
    }

    p, h1, h2, h3, h4, h5 {
      margin: 0;
      padding: 0;
      border: 0;
      font-family: 'Nunito Sans', sans-serif;
    }

    .calendly-overlay {
      z-index: 99999999 !important;
    }

    .fresnel-container {
      width: 100%;
      //display: flex;
      //justify-content: space-between;
    }



    @keyframes rotating {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }


    a {
      text-decoration: none;
    }

    ul,
    ol {
      list-style-position: inside;
    }

    * {
      box-sizing: border-box;
    }
  }
`
