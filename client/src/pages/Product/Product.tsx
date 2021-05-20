import { EmptyResult, Loading } from 'components'
import { Default as Template } from 'templates'
import { useProduct } from './Product.hook'

import * as S from './Product.style'

function Product() {
  const { notFound, product, isLoading, error } = useProduct()

  if (notFound || error) {
    return (
      <Template>
        <EmptyResult />
      </Template>
    )
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Template>
      <S.Content>
        <S.Description>
          <S.Picture>
            <img src={product?.picture} alt={product?.title} />
          </S.Picture>
          <S.DescriptionTitle>Descripción del producto</S.DescriptionTitle>
          <S.PlainText>{product?.description}</S.PlainText>
        </S.Description>
        <S.Price>
          <S.Suptitle>
            {product?.condition} - {product?.sold_quantity} vendidos
          </S.Suptitle>
          <S.Title>{product?.title}</S.Title>
          <S.Value>
            {product?.price.currency}{' '}
            {product?.price.amount?.toLocaleString('es-AR')}
          </S.Value>
          <S.Button>Comprar</S.Button>
        </S.Price>
      </S.Content>
    </Template>
  )
}

export default Product
