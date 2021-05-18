import React from 'react'
import { Header } from 'components'
import * as S from './Default.style'

type DefaultProps = {
  children?: React.ReactNode
}

function Default({ children }: DefaultProps) {
  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
    </>
  )
}

export default Default
