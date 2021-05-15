import { Router } from 'express'

import itemsController from '@controllers/items'

const router = Router()

router.get('/items', itemsController.getItems)

export default router
