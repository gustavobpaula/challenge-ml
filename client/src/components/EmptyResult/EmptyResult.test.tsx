import { screen } from '@testing-library/react'

import { RenderComponent } from 'utils'
import EmptyResult from './EmptyResult'

const makeSut = () => {
  return RenderComponent({
    component: <EmptyResult />,
    useTheme: true,
  })
}

describe('Breadcrumb component', () => {
  it('Should render a todo list', () => {
    makeSut()

    expect(screen.getByRole('list', { name: /todo list/i })).toBeInTheDocument()
  })

  it('Should render a empty result message', () => {
    makeSut()

    expect(
      screen.getByText(/No hay publicaciones que coincidan con tu búsqueda./i)
    ).toBeInTheDocument()
  })
})
