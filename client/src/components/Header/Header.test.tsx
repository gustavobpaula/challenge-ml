import { screen } from '@testing-library/react'

import { RenderComponent } from 'utils'
import Header from './Header'
import logo from 'assets/Logo_ML.png'

const makeSut = () => {
  return RenderComponent({
    component: <Header />,
    useTheme: true,
    useRouter: true,
  })
}

describe('Breadcrumb component', () => {
  it('Should render match snapshot', () => {
    const { asFragment } = makeSut()

    expect(asFragment()).toMatchSnapshot()
  })

  it('Should render a ML logo', () => {
    makeSut()

    const displayedImage = document.querySelector('img') as HTMLImageElement

    expect(
      screen.getByRole('img', { name: /logo mercado livre/i })
    ).toBeInTheDocument()

    expect(displayedImage.src).toContain(logo)
  })
})
