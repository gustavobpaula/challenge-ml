import { Link } from 'react-router-dom'

import { Container, Search } from 'components'
import * as S from './Header.style'
import logo from 'assets/Logo_ML.png'

function Header() {
  return (
    <S.Header>
      <Container>
        <S.Content>
          <Link to="/">
            <img src={logo} alt="logo mercado livre" />
          </Link>
          <Search />
        </S.Content>
      </Container>
    </S.Header>
  )
}

export default Header
