import {
  SearchBarContainer,
  SearchBarHeader,
  SearchBarInput,
  SearchBarLabel,
} from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarHeader>
        <SearchBarLabel htmlFor="search-bar-input">Publicações</SearchBarLabel>
        <span>6 publicações</span>
      </SearchBarHeader>
      <SearchBarInput
        id="search-bar-input"
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchBarContainer>
  )
}
