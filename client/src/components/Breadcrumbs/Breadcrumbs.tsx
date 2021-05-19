import { Container } from 'components'
import { useBreadcrumbs } from './Breadcrumbs.hook'
import * as S from './Breadcrumbs.style'

function Breadcrumbs() {
  const { breadcrumbs } = useBreadcrumbs()
  return (
    <Container>
      <S.List aria-label="breadcrumbs">
        {breadcrumbs.map(breadcrumb => (
          <S.ListItem key={breadcrumb}>{breadcrumb}</S.ListItem>
        ))}
      </S.List>
    </Container>
  )
}

export default Breadcrumbs
