import SearchIcon from "@/components/Svg/SearchIcon";
import { Icon, SearchContainer, SearchInput } from "./Styles";

export default function Search() {
  return (
    <SearchContainer>
      <Icon />
      <SearchInput type="text" placeholder="Pesquisar" />
    </SearchContainer>
  )
}