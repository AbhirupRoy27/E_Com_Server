import { Router } from 'express'
import addProduct from '../controllers/addProduct.js'
import getAllProduct from '../controllers/getAllProduct.js'
import productDefault from '../controllers/productDefault.js'
import getProductById from '../controllers/getProductById.js'
import getTrendingProducts from '../controllers/getTendingProducts.js'

const ProductRouter = Router()

ProductRouter.post('/add-product', addProduct)

ProductRouter.get('/trending', getTrendingProducts)

ProductRouter.get('/all-product', getAllProduct)

ProductRouter.get('/one-product', getProductById)

ProductRouter.get('/', productDefault)

export default ProductRouter
