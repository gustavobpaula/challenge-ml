/* eslint-disable camelcase */

import API from '@utils/API'
import { APICurrency, APIPayload } from './APIResult'

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
  author: Author
  categories: string[]
  items: Item[]
  private currencyId: string

  constructor(private payload: APIPayload) {
    this.author = { name: 'Gustavo', lastName: 'Bento de Paula' }
    this.categories = []
    this.items = []
    this.currencyId = 'ARS'
  }

  async create() {
    this.getCategories()
    await this.getItems()

    return {
      author: this.author,
      categories: this.categories,
      items: this.items,
    }
  }

  private getCategories() {
    const filterCategory = this.payload?.filters?.filter(
      filter => filter?.id === 'category'
    )[0]

    if (!filterCategory) {
      return []
    }

    this.categories = filterCategory?.values?.map(value => value.name)
  }

  private async getItems() {
    const currency: APICurrency = await API.getCurrency(this.currencyId)

    this.items =
      this.payload?.results?.map(result => {
        const item: Item = {
          id: result.id,
          title: result.title,
          price: {
            currency: currency.symbol,
            decimals: currency.decimal_places,
            amount: result.price,
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping?.free_shipping,
        }

        return item
      }) || []
  }
}
