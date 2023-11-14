import { Router } from 'express';

import {
  createProduct,
  getProducts,
} from '../controllers/products.controller';

const router = Router()

router.get('/products', getProducts)

router.post('/products', createProduct)

router.get('/products',)

router.delete('/products',)

router.put('/products',)

export default router
