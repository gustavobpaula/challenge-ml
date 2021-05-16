import { Request, Response } from 'express'
import API from '@utils/API'
import { Items } from '@models/Items'

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

  const item = await API.item(id.toString())
  const itemDescription = await API.itemDescription(id.toString())

  if (item?.status === 404 || itemDescription?.status === 404) {
    return res
      .status(404)
      .json({ error: item?.message || itemDescription?.message })
  }

  // const itemsInstance = new Items(payload)
  // const { author, categories, items } = await itemsInstance.create()

  res.json({ item, itemDescription })
}

export default { getItems, getItem }
