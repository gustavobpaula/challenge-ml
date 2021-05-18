import React from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('pages/Home'))
const Search = React.lazy(() => import('pages/Search'))
const Product = React.lazy(() => import('pages/Product'))

function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/items">
        <Search />
      </Route>

      <Route path="/items/:id">
        <Product />
      </Route>
    </>
  )
}

export default Routes
