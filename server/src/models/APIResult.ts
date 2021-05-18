export type APIFilterProps = {
  id: string
  name: string
  values: Array<{
    path_from_root: Array<{ name: string }>
  }>
}

export type APIItemPayloadProps = {
  id: string
  title: string
  price: number
  thumbnail: string
  condition: string
  shipping: {
    free_shipping: boolean
  }
}

export type APIResultProps = APIItemPayloadProps & {
  currency_id: string
}

export type APISearchPayloadProps = {
  filters: APIFilterProps[]
  results: APIResultProps[]
}

export type APIItemDescriptionPayloadProps = {
  plain_text: string
}

export type APICurrencyProps = {
  id: string
  symbol: string
  description: string
  decimal_places: number
}
