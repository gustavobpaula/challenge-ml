/** @jsxRuntime classic */
/** @jsx jsx */
import { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { jsx, ThemeProvider } from '@emotion/react'
import theme from 'config/theme'

import Routes from './Routes'

import GlobalStyles from 'config/Global.styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Routes />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
