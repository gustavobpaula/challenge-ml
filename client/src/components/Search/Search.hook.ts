import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from 'hooks/useStore'

export const useSearch = () => {
  const { query, setQuery } = useStore(state => state)

  const history = useHistory()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (query) {
        history.push({
          pathname: '/items',
          search: `?q=${query}`,
        })
      }
    },
    [query]
  )

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setQuery(e.currentTarget.value)
    },
    [setQuery]
  )

  return {
    query,
    handleChange,
    handleSubmit,
  }
}
