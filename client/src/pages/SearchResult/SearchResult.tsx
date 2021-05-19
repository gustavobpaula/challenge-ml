import { Shelf, EmptyResult, Loading } from 'components'
import { Default as Template } from 'templates'
import { useSearchResult } from './SearchResult.hook'

function Search() {
  const { items, resultIsEmpty, isLoading } = useSearchResult()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Template>
      {resultIsEmpty ? <EmptyResult /> : <Shelf items={items} />}
    </Template>
  )
}

export default Search
