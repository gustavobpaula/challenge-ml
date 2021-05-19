export type AuthorProps = {
  name: string
  lastName: string
}

export type ItemProps = {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
  sold_quantity?: number
  description?: string
  state?: string
}

export type SearchResultProps = {
  author: AuthorProps
  categories: string[]
  items: ItemProps[]
}
