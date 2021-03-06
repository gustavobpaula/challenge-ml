import API from '@utils/API'
import { APICurrencyProps, APISearchPayloadProps } from './APIResult'
import { AuthorProps, ItemProps } from '@models/Item'

export interface ItemsModel {
  author: AuthorProps
  categories: string[]
  items: ItemProps[]
}

/**
 * Class representing a Items.
 *
 * @export
 * @class Items
 * @implements {ItemsModel}
 */
export class Items implements ItemsModel {
  author: AuthorProps
  categories: string[]
  items: ItemProps[]
  private currencyId: string

  /**
   *Creates an instance of Items.
   * @param {APISearchPayloadProps} payload - Object of items returned by the ML API
   * @memberof Items
   */
  constructor(private payload: APISearchPayloadProps) {
    this.author = { name: 'Gustavo', lastName: 'Bento de Paula' }
    this.categories = []
    this.items = []
    this.currencyId = 'ARS'
  }

  /**
   * Create a parsed full object
   *
   * @returns
   * @memberof Items
   */
  async create() {
    this.getCategories()
    await this.getItems()

    return {
      author: this.author,
      categories: this.categories,
      items: this.items,
    }
  }

  /**
   * Parse property categories
   *
   * @private
   * @returns
   * @memberof Items
   */
  private getCategories() {
    const filterCategory = this.payload?.filters?.filter(
      filter => filter?.id === 'category'
    )[0]

    if (!filterCategory) {
      return []
    }

    const firstCategory = filterCategory?.values?.[0]
    this.categories = firstCategory?.path_from_root.map(value => value.name)
  }

  /**
   * Parse property items
   *
   * @private
   * @memberof Items
   */
  private async getItems() {
    const currency: APICurrencyProps = await API.getCurrency(this.currencyId)

    this.items =
      this.payload?.results?.map(result => {
        const item: ItemProps = {
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
          state: result.address?.state_name,
        }

        return item
      }) || []
  }
}
