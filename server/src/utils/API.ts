import fetch from 'node-fetch'
import { URLSearchParams } from 'url'

const ML_API = 'https://api.mercadolibre.com'

const API = {
  search: async (q: string) => {
    const params = new URLSearchParams()
    params.append('q', 'mesa')
    params.append('limit', '4')
    console.log(params.toString())
    const response = await fetch(
      `${ML_API}/sites/MLA/search?${params.toString()}`
    )

    return await response.json()
  },
}

export default API
