import { Router } from 'express'
import { connectDB, disConnectDB } from '../utils/connectDB.js'
import addProduct from '../controllers/addProduct.js'

const ProductRouter = Router()

ProductRouter.get('/', async (req, res) => {
  try {
    const id = req.query.id
    if (!id) throw new Error('Request is incomplete or not complete')

    await connectDB()
    return res.status(200).json({
      status: 'success',
      message: 'Request Complete',
      url: req.originalUrl,
      id,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: error.message,
      url: req.originalUrl,
    })
  }
})

ProductRouter.post('/add-product', addProduct)

export default ProductRouter
