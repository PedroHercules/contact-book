import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 1rem;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: none;
  background-color: #202024;
  box-shadow: 0 0 0.9rem 0.1rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  position: fixed;
  bottom: 2rem;
  right: 7rem;

  &:hover {
    background-color: #2f2f34;
    cursor: pointer;
  }
`