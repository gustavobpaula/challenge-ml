import { useLocation } from 'react-router-dom'
import { useStore } from 'hooks'
import { useEffect } from 'react'

export const useSearchResult = () => {
  const { search } = useLocation()
  const urlSearchParams = new URLSearchParams(search)
  const urlQuery = urlSearchParams.get('q')
  const { query, setQuery } = useStore(state => state)
  const API_HOST = process.env.REACT_APP_API_HOST

  const fetchData = async () => {
    const response = await fetch(`${API_HOST}/api/items/${search}`)
    const data = await response.json()

    console.log(data)
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
}
