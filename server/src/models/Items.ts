import API from '@utils/API'
import { APICurrencyProps, APISearchPayloadProps } from './APIResult'
import { AuthorProps, ItemProps } from '@models/Item'

export interface ItemsModel {
  author: AuthorProps
  categories: string[]
  items: ItemProps[]
}

export class Items implements ItemsModel {
  author: AuthorProps
  categories: string[]
  items: ItemProps[]
  private currencyId: string

  constructor(private payload: APISearchPayloadProps) {
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
        }

        return item
      }) || []
  }
}
