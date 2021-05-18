import { Default as Template } from 'templates'
import { useSearchResult } from './SearchResult.hook'

function Search() {
  useSearchResult()
  return (
    <Template>
      <div>Search</div>
    </Template>
  )
}

export default Search
