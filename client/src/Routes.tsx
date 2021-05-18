import React from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('pages/Home'))
const SearchResult = React.lazy(() => import('pages/SearchResult'))
const Product = React.lazy(() => import('pages/Product'))

function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/items">
        <SearchResult />
      </Route>

      <Route path="/items/:id">
        <Product />
      </Route>
    </>
  )
}

export default Routes
