import { Router } from 'express'
import { connectDB, disConnectDB } from '../utils/connectDB.js'

const ProductRouter = Router()

ProductRouter.get('/', async (req, res) => {
  try {
    const id = req.query.id
    if (!id) throw new Error('Request is incomplete or not complete')

    await connectDB()
    return res.status(404).json({
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

export default ProductRouter
