import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  margin: 20px 0;
  padding: 0 20px;
  line-height: 1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #202020;
  background-color: #fbfbfb;
  font-smoothing: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;