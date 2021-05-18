import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStore } from 'hooks/useStore'

export const useSearch = () => {
  const { query, setQuery } = useStore(state => state)
  const [inputValue, setInputValue] = useState(query)

  const history = useHistory()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (inputValue) {
        setQuery(inputValue)

        history.push({
          pathname: '/items',
          search: `?q=${inputValue}`,
        })
      }
    },
    [setQuery, inputValue]
  )

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
    },
    [setInputValue]
  )

  useEffect(() => {
    if (query !== inputValue) {
      setInputValue(query)
    }
  }, [query])

  return {
    inputValue: inputValue,
    handleChange,
    handleSubmit,
  }
}
