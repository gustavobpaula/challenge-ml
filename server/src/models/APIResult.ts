export type APIFilter = {
  id: string
  name: string
  values: Array<{
    name: string
  }>
}

export type APIResult = {
  id: string
  title: string
  price: number
  currency_id: string
  thumbnail: string
  condition: string
  shipping: {
    free_shipping: boolean
  }
}

export type APIPayload = {
  filters: APIFilter[]
  results: APIResult[]
}

export type APICurrency = {
  id: string
  symbol: string
  description: string
  decimal_places: number
}
