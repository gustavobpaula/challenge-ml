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
  state?: string
  sold_quantity?: number
  description?: string
}

export interface ItemModel {
  author: AuthorProps
  item: ItemProps
}

/**
 * Class representing a Item.
 *
 * @export
 * @class Item
 * @implements {ItemModel}
 */
export class Item implements ItemModel {
  item!: ItemProps
  author: AuthorProps
  private currencyId: string

  /**
   *Creates an instance of Item.
   * @param {APIItemPayloadProps} payloadItem - Object of item returned by the ML API
   * @param {APIItemDescriptionPayloadProps} payloadItemDescription - Object of item description returned by the ML API
   * @memberof Item
   */
  constructor(
    private payloadItem: APIItemPayloadProps,
    private payloadItemDescription: APIItemDescriptionPayloadProps
  ) {
    this.author = { name: 'Gustavo', lastName: 'Bento de Paula' }
    this.currencyId = 'ARS'
  }

  /**
   * Create a parsed full object
   *
   * @returns
   * @memberof Item
   */
  async create() {
    await this.getItem()

    return {
      author: this.author,
      item: this.item,
    }
  }

  /**
   * Parse property item
   *
   * @private
   * @memberof Item
   */
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
      sold_quantity: this.payloadItem.sold_quantity,
      description: this.payloadItemDescription.plain_text,
    }
  }
}
