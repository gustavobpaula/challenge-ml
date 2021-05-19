import * as S from './EmptyResult.style'

function EmptyResult() {
  return (
    <S.Content>
      <S.Title>No hay publicaciones que coincidan con tu búsqueda.</S.Title>
      <ul>
        <S.ToDo>
          <strong>Revisá la ortografía</strong> de la palabra.
        </S.ToDo>
        <S.ToDo>
          Utilizá <strong>palabras más genéricas</strong> o menos palabras.
        </S.ToDo>
      </ul>
    </S.Content>
  )
}

export default EmptyResult
