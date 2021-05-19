import { screen } from '@testing-library/react'

import { RenderComponent } from 'utils'
import Shelf from './Shelf'

const makeSut = () => {
  return RenderComponent({
    component: <Shelf />,
    useTheme: true,
  })
}

describe('Shelf component', () => {
  it('Should render match snapshot', () => {
    const { asFragment } = makeSut()

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should render a shelf list', () => {
    makeSut()

    expect(screen.getByRole('list', { name: /shelf/i })).toBeInTheDocument()
  })
})
