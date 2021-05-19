import { Shelf, EmptyResult } from 'components'
import { Default as Template } from 'templates'
import { useSearchResult } from './SearchResult.hook'

function Search() {
  const { items, resultIsEmpty } = useSearchResult()
  return (
    <Template>
      <div>
        {resultIsEmpty ? <EmptyResult /> : <Shelf items={items} />}
        <Shelf items={items} />
      </div>
    </Template>
  )
}

export default Search
