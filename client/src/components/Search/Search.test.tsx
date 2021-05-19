import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderHook } from '@testing-library/react-hooks'

import { RenderComponent } from 'utils'
import Search from './Search'
import { useSearch } from './Search.hook'

const makeSut = () => {
  return RenderComponent({
    component: <Search />,
    useTheme: true,
    useRouter: true,
  })
}

describe('Search component', () => {
  it('Should render a input', () => {
    makeSut()

    expect(
      screen.getByRole('textbox', { name: /campo de búsqueda/i })
    ).toBeInTheDocument()
  })

  it('Input should change value', () => {
    makeSut()

    const input = screen.getByRole('textbox', {
      name: /campo de búsqueda/i,
    }) as HTMLInputElement

    userEvent.type(input, 'Iphone 64gb')

    expect(input.value).toBe('Iphone 64gb')
  })

  it('Should render a button', () => {
    makeSut()

    const button = screen.getByRole('button', { name: /buscar/i })

    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
  })

  it('Should change inputValue on click on Button', () => {
    makeSut()

    const { result } = renderHook(() => useSearch())

    userEvent.type(
      screen.getByRole('textbox', { name: /campo de búsqueda/i }),
      'Iphone 32GB'
    )

    const button = screen.getByRole('button', { name: /buscar/i })

    userEvent.click(button)

    expect(result.current.inputValue).toBe('Iphone 32GB')
  })
})
