import { Shelf, EmptyResult, Loading } from 'components'
import { Default as Template } from 'templates'
import { useSearchResult } from './SearchResult.hook'

function Search() {
  const { items, resultIsEmpty, isLoading, error } = useSearchResult()

  if (error || resultIsEmpty) {
    return (
      <Template>
        <EmptyResult />
      </Template>
    )
  }

  if (isLoading) {
    return <Loading />
  }

  return <Template>{<Shelf items={items} />}</Template>
}

export default Search
