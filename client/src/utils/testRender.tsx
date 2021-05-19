import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { Router as RouterProvider } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import theme from 'config/theme'

type RenderComponentProps = {
  component: React.ReactNode
  useTheme?: boolean
  useRouter?: boolean
  options?: RenderOptions
}

type ProviderProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const Router = ({ children }: ProviderProps) => {
  const history = createMemoryHistory()
  return <RouterProvider history={history}>{children}</RouterProvider>
}

export const RenderComponent = ({
  component,
  useTheme = false,
  useRouter = false,
  options = {},
}: RenderComponentProps) => {
  const providers = [useTheme && Theme, useRouter && Router]

  const componentWithProviders = providers.reduce((accComponent, Provider) => {
    if (!Provider) return accComponent

    return <Provider>{accComponent}</Provider>
  }, component)

  return render(<>{componentWithProviders}</>, options)
}
