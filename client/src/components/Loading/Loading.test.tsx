import { screen } from '@testing-library/react'

import { RenderComponent } from 'utils'
import Loading from './Loading'
import logo from 'assets/Logo_ML.png'

const makeSut = () => {
  return RenderComponent({
    component: <Loading />,
  })
}

describe('Loading component', () => {
  it('Should render match snapshot', () => {
    const { asFragment } = makeSut()

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should render Loading', () => {
    makeSut()

    expect(screen.getByRole('alert', { name: /loading/i })).toBeInTheDocument()
  })

  it('Should display a Mercado Livre logo', () => {
    makeSut()

    const displayedImage = document.querySelector('img') as HTMLImageElement

    expect(
      screen.getByRole('img', { name: /logo do mercado livre/i })
    ).toBeInTheDocument()

    expect(displayedImage.src).toContain(logo)
  })
})
