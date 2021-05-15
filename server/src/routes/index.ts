import { Router } from 'express'
import { Customer } from '@models/customer'
import API from '@utils/API'

const customers: Customer[] = []
const router = Router()

router.get('/', async (req, res) => {
  const items = await API.search('teste')
  res.json(items)
})

export default router
