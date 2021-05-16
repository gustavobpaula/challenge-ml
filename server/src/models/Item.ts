import API from '@utils/API'
import {
  APIItemPayloadProps,
  APIItemDescriptionPayloadProps,
  APICurrencyProps,
} from './APIResult'

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
}

export interface ItemModel {
  author: AuthorProps
  item: ItemProps
}

export class Item implements ItemModel {
  item!: ItemProps
  author: AuthorProps
  private currencyId: string

  constructor(
    private payloadItem: APIItemPayloadProps,
    private payloadItemDescription: APIItemDescriptionPayloadProps
  ) {
    this.author = { name: 'Gustavo', lastName: 'Bento de Paula' }
    this.currencyId = 'ARS'
  }

  async create() {
    await this.getItem()

    return {
      author: this.author,
      item: this.item,
    }
  }

  private async getItem() {
    const currency: APICurrencyProps = await API.getCurrency(this.currencyId)

    this.item = {
      id: this.payloadItem.id,
      title: this.payloadItem.title,
      price: {
        currency: currency.symbol,
        decimals: currency.decimal_places,
        amount: this.payloadItem.price,
      },
      picture: this.payloadItem.thumbnail,
      condition: this.payloadItem.condition,
      free_shipping: this.payloadItem.shipping.free_shipping,
      description: this.payloadItemDescription.plain_text,
    }
  }
}
