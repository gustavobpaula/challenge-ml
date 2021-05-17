import React, { Suspense } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Search = React.lazy(() => import('./pages/Search'))
const Product = React.lazy(() => import('./pages/Product'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>...loading</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/items">
            <Search />
          </Route>

          <Route path="/items/:id">
            <Product />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
