import '@emotion/react'
import { ThemeProps } from 'config/theme'

declare module '@emotion/react' {
  export interface Theme extends ThemeProps {}
}
