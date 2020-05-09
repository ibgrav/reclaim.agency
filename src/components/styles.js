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
    /* overscroll-behavior-y: none; */
    overflow-x: hidden;
    margin: 0;
    font-family: "Courier New",Courier,monospace;
    line-height: 40px;
    font-size: 1em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
`
