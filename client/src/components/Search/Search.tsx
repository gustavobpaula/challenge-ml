import iconSearch from 'assets/ic_Search.png'

import { useSearch } from './Search.hook'
import * as S from './Search.style'

function Search() {
  const { handleChange, handleSubmit, inputValue } = useSearch()

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        name="query"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        onChange={handleChange}
        aria-label="campo de búsqueda"
      />
      <S.Button type="submit">
        <img src={iconSearch} alt="Buscar" />
      </S.Button>
    </S.Form>
  )
}

export default Search
