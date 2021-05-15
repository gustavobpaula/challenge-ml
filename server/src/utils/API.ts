import fetch from 'node-fetch'
import { URLSearchParams } from 'url'

const ML_API = 'https://api.mercadolibre.com'

const API = {
  search: async (query: string) => {
    const params = new URLSearchParams()
    params.append('q', query)

    const response = await fetch(
      `${ML_API}/sites/MLA/search?${params.toString()}`
    )

    return await response.json()
  },
}

export default API
