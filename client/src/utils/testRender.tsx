import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'

import theme from 'config/theme'

type RenderComponentProps = {
  component: React.ReactNode
  useTheme?: boolean
  options?: RenderOptions
}

type ProviderProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const RenderComponent = ({
  component,
  useTheme = false,
  options = {},
}: RenderComponentProps) => {
  const providers = [useTheme && Theme]

  const componentWithProviders = providers.reduce((accComponent, Provider) => {
    if (!Provider) return accComponent

    return <Provider>{accComponent}</Provider>
  }, component)

  return render(<>{componentWithProviders}</>, options)
}
