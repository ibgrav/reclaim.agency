import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    -ms-overflow-style: none;
  }

  html {
    font-size: 16px;
  }
  
  body {
    /* overscroll-behavior: none; */
    overflow-x: hidden;
    margin: 0;
    font-family: "Courier New",Courier,monospace;
    font-size: 1em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  p {
    line-height: 30px;
    font-size: 1em;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-size: 1.5em;
  }
`
