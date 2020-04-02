import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    list-style:none;

  }
  html, body {
    height: 100vh;
  }
  

  header {
    height: 40px;
    background: #f00;
  }
`


function App() {
  return (
    <div className="App">
      <header></header>

      <GlobalStyle />
    </div>
  );
}

export default App
