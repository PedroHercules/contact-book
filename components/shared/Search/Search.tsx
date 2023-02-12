import SearchIcon from "@/components/shared/Svg/SearchIcon";
import { Icon, SearchContainer, SearchInput } from "./Styles";

interface SearchProps {
  search: string
  setSearch: (value: string) => void
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <SearchContainer>
      <Icon />
      <SearchInput 
        type="text" 
        placeholder="Pesquisar"
        value={search}
        onChange={e => setSearch(e.target.value)} 
      />
    </SearchContainer>
  )
}