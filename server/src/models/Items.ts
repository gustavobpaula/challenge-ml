/* eslint-disable camelcase */

import { APIPayload } from './APIResult'

export type Author = {
  name: string
  lastName: string
}

export type Item = {
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
}

export interface ItemsModel {
  author: Author
  categories: string[]
  items: Item[]
}

export class Items implements ItemsModel {
  readonly author: Author
  readonly categories: string[]
  readonly items: Item[]

  constructor(private payload: APIPayload) {
    this.author = { name: 'Gustavo', lastName: 'Bento de Paula' }
    this.categories = this.getCategories()
    this.items = this.getItems()
  }

  private getCategories() {
    const filterCategory = this.payload?.filters.filter(
      filter => filter?.id === 'category'
    )[0]

    if (!filterCategory) {
      return []
    }

    const categories = filterCategory.values.map(value => value.name)

    return categories
  }

  private getItems() {
    const items = this.payload?.results.map(result => {
      const item: Item = {
        id: result.id,
        title: result.title,
        price: {
          currency: result.prices.presentation.display_currency,
          decimals: result.price,
          amount: result.price,
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
      }

      return item
    })

    return items
  }
}
