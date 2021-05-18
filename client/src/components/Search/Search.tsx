import iconSearch from 'assets/ic_Search.png'

import { useSearch } from './Search.hook'
import * as S from './Search.style'

function Search() {
  const { handleChange, handleSubmit, query } = useSearch()
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        name="query"
        placeholder="Nunca dejes de buscar"
        value={query}
        onChange={handleChange}
      />
      <S.Button type="submit">
        <img src={iconSearch} alt="Buscar" />
      </S.Button>
    </S.Form>
  )
}

export default Search
