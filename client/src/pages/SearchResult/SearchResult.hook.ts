import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from 'hooks'
import { SearchResultProps } from 'typings/APIProps'

export const useSearchResult = () => {
  const { search } = useLocation()
  const urlSearchParams = new URLSearchParams(search)
  const urlQuery = urlSearchParams.get('q')
  const { query, setQuery, setBreadcrumbs } = useStore(state => state)
  const API_HOST = process.env.REACT_APP_API_HOST
  const [searchResult, setSearchResult] =
    useState<SearchResultProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    fetch(`${API_HOST}/api/items/${search}`)
      .then(response => response.json())
      .then((payload: SearchResultProps) => {
        setSearchResult(payload)
        setBreadcrumbs(payload?.categories || [])
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (query) {
      fetchData()
    }
  }, [query])

  useEffect(() => {
    if (urlQuery && urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [urlQuery, query, setQuery])

  return {
    items: searchResult?.items,
    isLoading,
    resultIsEmpty:
      (!searchResult ||
        !searchResult?.items ||
        searchResult.items.length <= 0) &&
      !isLoading,
  }
}
