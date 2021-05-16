import { Request, Response } from 'express'
import API from '@utils/API'
import { Items } from '@models/Items'
import { Item } from '@models/Item'

const getItems = async (req: Request, res: Response) => {
  const query = req.query.q

  if (!query) {
    return res.status(400).json({ error: 'Miss query q param' })
  }

  const payload = await API.search(query.toString())

  if (payload?.status === 404) {
    return res.status(404).json({ error: payload?.message })
  }

  const itemsInstance = new Items(payload)
  const { author, categories, items } = await itemsInstance.create()

  res.json({ author, categories, items })
}

const getItem = async (req: Request, res: Response) => {
  const id = req.params.id

  if (!id) {
    return res.status(400).json({ error: 'Miss param id' })
  }

  const itemPayload = await API.item(id.toString())
  const itemPayloadDescription = await API.itemDescription(id.toString())

  if (itemPayload?.status === 404 || itemPayloadDescription?.status === 404) {
    return res
      .status(404)
      .json({ error: itemPayload?.message || itemPayloadDescription?.message })
  }

  const itemInstance = new Item(itemPayload, itemPayloadDescription)
  const { author, item } = await itemInstance.create()

  res.json({ author, item })
}

export default { getItems, getItem }
