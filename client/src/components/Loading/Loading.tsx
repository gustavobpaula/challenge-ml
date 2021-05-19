import * as S from './Loading.style'
import logo from 'assets/Logo_ML.png'

function Loading() {
  return (
    <S.Container>
      <S.Content aria-label="Loading" aria-hidden="false" role="alert">
        <S.Logo src={logo} alt="Logo do Mercado Livre"></S.Logo>
        <S.FirstAnimation></S.FirstAnimation>
        <S.SecondAnimation></S.SecondAnimation>
        <S.ThirdAnimation></S.ThirdAnimation>
        <S.FourthAnimation></S.FourthAnimation>
      </S.Content>
    </S.Container>
  )
}

export default Loading
