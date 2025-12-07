import { Router } from 'express'
import addProduct from '../controllers/addProduct.js'
import getAllProduct from '../controllers/getAllProduct.js'
import productDefault from '../controllers/productDefault.js'

const ProductRouter = Router()

ProductRouter.post('/add-product', addProduct)

ProductRouter.get('/all-product', getAllProduct)

// ProductRouter.get('/product/:id', getProductById)

ProductRouter.get('/', productDefault)

export default ProductRouter
