import { FaSearch } from 'react-icons/fa'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarHeader,
  SearchBarInput,
  SearchBarLabel,
} from './styles'
import { FormEvent, useRef, useState } from 'react'

interface Props {
  postsCount: number
  onSearch: (query: string) => Promise<void>
}

export function SearchBar({ postsCount, onSearch }: Props) {
  const postsText =
    postsCount === 1 ? '1 publicação' : `${postsCount} publicações`

  const inputRef = useRef<HTMLInputElement>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSearch(event: FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)
    const query = inputRef.current?.value

    await onSearch(query || ' ')

    setIsSubmitting(false)
  }

  return (
    <SearchBarContainer>
      <SearchBarHeader>
        <SearchBarLabel htmlFor="search-bar-input">Publicações</SearchBarLabel>
        <span>{postsText}</span>
      </SearchBarHeader>
      <SearchBarForm onSubmit={handleSearch}>
        <SearchBarInput
          ref={inputRef}
          id="search-bar-input"
          type="text"
          placeholder="Buscar conteúdo"
        />
        <SearchBarButton type="submit" disabled={isSubmitting}>
          <FaSearch />
          Buscar
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  )
}
