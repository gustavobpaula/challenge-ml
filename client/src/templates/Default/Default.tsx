import React from 'react'
import { Header } from 'components'
import * as S from './Default.style'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

type DefaultProps = {
  children?: React.ReactNode
}

function Default({ children }: DefaultProps) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <S.Container>{children}</S.Container>
    </>
  )
}

export default Default
