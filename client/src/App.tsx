/** @jsxRuntime classic */
/** @jsx jsx */
import { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { jsx, ThemeProvider, Global } from '@emotion/react'
import theme from 'config/theme'

import Routes from './Routes'

import globalStyles from 'config/global.styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Global styles={globalStyles} />
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
