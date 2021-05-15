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
  prices: {
    presentation: {
      display_currency: string
    }
  }
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
