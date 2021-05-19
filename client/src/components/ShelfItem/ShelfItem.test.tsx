import { screen } from '@testing-library/react'

import { RenderComponent } from 'utils'
import ShelfItem, { ShelfItemProps } from './ShelfItem'
import productItems from '__mocks__/items'

const makeSut = (overWriteProps?: Partial<ShelfItemProps>) => {
  const defaultProps: ShelfItemProps = {
    item: productItems[0],
  }
  return RenderComponent({
    component: <ShelfItem {...defaultProps} {...overWriteProps} />,
    useTheme: true,
    useRouter: true,
  })
}

describe('ShelfItem component', () => {
  it('Should render match snapshot', () => {
    const { asFragment } = makeSut()

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should render a image', () => {
    const product = productItems[0]
    makeSut({ item: product })

    expect(screen.getByRole('img', { name: product.title })).toBeInTheDocument()
  })

  it('Should render a price formatted', () => {
    const product = productItems[0]
    makeSut({ item: product })

    const price = `${
      product.price.currency
    } ${product.price.amount.toLocaleString('es-AR')}`

    expect(screen.queryByText(price)).toBeInTheDocument()
  })

  it('Should render a product title', () => {
    const product = productItems[0]
    makeSut({ item: product })

    expect(screen.queryByText(product.title)).toBeInTheDocument()
  })

  it('Should render a state', () => {
    const product = productItems[0]
    makeSut({ item: product })

    const { state = '' } = product

    expect(screen.queryByText(state)).toBeInTheDocument()
  })
})
