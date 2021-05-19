import { Shelf, EmptyResult } from 'components'
import { Default as Template } from 'templates'
import { useSearchResult } from './SearchResult.hook'

function Search() {
  const { items, resultIsEmpty } = useSearchResult()
  return (
    <Template>
      {resultIsEmpty ? <EmptyResult /> : <Shelf items={items} />}
    </Template>
  )
}

export default Search
