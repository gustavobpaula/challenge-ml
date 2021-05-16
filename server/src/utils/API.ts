import fetch from 'node-fetch'
import { URLSearchParams } from 'url'

const ML_API = 'https://api.mercadolibre.com'

const API = {
  /**
   * Return currency object
   */
  getCurrency: async (id: string) => {
    try {
      const response = await fetch(`${ML_API}/currencies/${id}`)
      return await response.json()
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * Return items by query
   */
  search: async (query: string) => {
    const params = new URLSearchParams()
    params.append('q', query)

    try {
      const response = await fetch(
        `${ML_API}/sites/MLA/search?${params.toString()}`
      )

      return await response.json()
    } catch (error) {
      throw new Error(error)
    }
  },
}

export default API
