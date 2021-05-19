import { Link } from 'react-router-dom'
import { ItemProps } from 'typings/SearchResultProps'
import truck from 'assets/ic_shipping.png'

import * as S from './ShelfItem.style'

type ShelfItemProps = {
  item: ItemProps
}

function ShelfItem({ item }: ShelfItemProps) {
  const urlToRedirect = `/items/${item.id}`

  return (
    <S.ShelfItem>
      <Link to={urlToRedirect}>
        <S.Picture>
          <img src={item.picture} loading="lazy" alt={item.title} />
        </S.Picture>
      </Link>

      <S.Description>
        <S.Price>
          <Link to={urlToRedirect}>
            <S.Value>
              {item.price.currency} {item.price.amount?.toLocaleString('es-AR')}
            </S.Value>
          </Link>
          {item.free_shipping && (
            <S.FreeShipping src={truck} alt="free shipping" />
          )}
        </S.Price>
        <Link to={urlToRedirect}>
          <S.Title>{item.title}</S.Title>
        </Link>
      </S.Description>
      <S.Locate>{item.state}</S.Locate>
    </S.ShelfItem>
  )
}

export default ShelfItem
