import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from 'hooks'
import { SearchResultProps } from 'typings/SearchResultProps'

export const useSearchResult = () => {
  const { search } = useLocation()
  const urlSearchParams = new URLSearchParams(search)
  const urlQuery = urlSearchParams.get('q')
  const { query, setQuery, setBreadcrumbs } = useStore(state => state)
  const API_HOST = process.env.REACT_APP_API_HOST
  const [searchResult, setSearchResult] =
    useState<SearchResultProps | null>(null)

  const fetchData = async () => {
    const response = await fetch(`${API_HOST}/api/items/${search}`)
    const data = (await response.json()) as SearchResultProps

    setSearchResult(data)
    setBreadcrumbs(data?.categories || [])
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

  return { items: searchResult?.items }
}
