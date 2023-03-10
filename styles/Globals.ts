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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: 1200px;
  padding: 1rem 2rem;
  margin: 13rem 4rem auto;
`;

export const ContactContainer = styled.div`
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  column-gap: 4rem;
  row-gap: 2rem;
  width: 100%;
`;
