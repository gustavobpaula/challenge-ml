import { screen } from '@testing-library/react'

import { RenderComponent } from 'utils'
import Breadcrumbs from './Breadcrumbs'
import * as hooks from './Breadcrumbs.hook'

const itemList = ['item 1', 'item 2', 'item 3']

const makeSut = () => {
  jest.spyOn(hooks, 'useBreadcrumbs').mockImplementation(() => {
    return {
      breadcrumbs: itemList,
    }
  })

  return RenderComponent({
    component: <Breadcrumbs />,
    useTheme: true,
  })
}

describe('Breadcrumb component', () => {
  it('Should render a list', () => {
    makeSut()

    expect(
      screen.getByRole('list', { name: /breadcrumb/i })
    ).toBeInTheDocument()
  })

  it.each(itemList)('Should render a item list %o', item => {
    makeSut()

    expect(screen.getByText(item)).toBeInTheDocument()
  })
})
