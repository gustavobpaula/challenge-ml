import { memo } from 'react'

import { ShelfItem } from 'components'
import { ItemProps } from 'typings/APIProps'

import * as S from './Shelf.style'

type ShelfProps = {
  items?: ItemProps[]
}

function Shelf({ items }: ShelfProps) {
  return (
    <S.ShelfList aria-label="Shelf">
      {items?.map(item => {
        return (
          <S.ShelfListItem key={item.id}>
            <ShelfItem item={item} />
          </S.ShelfListItem>
        )
      })}
    </S.ShelfList>
  )
}

export default memo(Shelf)
