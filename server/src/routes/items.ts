import { Router } from 'express'

import itemsController from '@controllers/items'

const router = Router()

router.get('/items', itemsController.getItems)
router.get('/items/:id', itemsController.getItem)

export default router
