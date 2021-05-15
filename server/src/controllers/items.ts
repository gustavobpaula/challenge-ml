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

  const { author, categories, items } = new Items(payload)

  res.json({ author, categories, items })
}

export default { getItems }
