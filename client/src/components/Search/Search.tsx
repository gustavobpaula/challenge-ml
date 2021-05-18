import iconSearch from 'assets/ic_Search.png'
import * as S from './Search.style'

function Search() {
  return (
    <S.Form>
      <S.Input type="text" placeholder="Nunca dejes de buscar" />
      <S.Button>
        <img src={iconSearch} alt="Buscar" />
      </S.Button>
    </S.Form>
  )
}

export default Search
