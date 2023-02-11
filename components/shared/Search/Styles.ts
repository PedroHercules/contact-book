import SearchIcon from "@/components/shared/Svg/SearchIcon";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #202024;
`

export const SearchInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 400;
  outline: none;
  background: transparent;
  color: #E0E0E5;
  border: none;
  padding: 1.5rem 1rem;
`

export const Icon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 24%;

  &:hover {
    cursor: pointer;
  }
`