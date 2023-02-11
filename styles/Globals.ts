import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #121214;
    color: #E0E0E5;
  }

  html {
    font-size: 65%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: 1200px;
  padding: 1rem 2rem;
  margin: 13rem 4rem auto;
`