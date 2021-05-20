import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductProps } from 'typings/APIProps'

export const useProduct = () => {
  const API_HOST = process.env.REACT_APP_API_HOST
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState<ProductProps | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState()

  const fetchData = () => {
    fetch(`${API_HOST}/api/items/${id}`)
      .then(response => response.json())
      .then(payload => {
        setIsLoading(false)

        if (payload?.error) {
          return setNotFound(true)
        }
        setNotFound(false)
        setProduct(payload)
      })
      .catch(e => {
        setError(e)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { product: product?.item, isLoading, notFound, error }
}
