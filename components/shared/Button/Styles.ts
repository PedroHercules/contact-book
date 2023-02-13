import styled from "styled-components";
import { ButtonProps } from './Typing'

export const ButtonStyled = styled.button`
  background: ${(props: ButtonProps) => props.variant === 'primary' ? '#333333;' : '#676767;'}
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`