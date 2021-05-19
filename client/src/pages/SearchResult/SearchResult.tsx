import { Shelf } from 'components'
import { Default as Template } from 'templates'
import { useSearchResult } from './SearchResult.hook'

function Search() {
  const { items } = useSearchResult()
  return (
    <Template>
      <div>
        <Shelf items={items} />
      </div>
    </Template>
  )
}

export default Search
