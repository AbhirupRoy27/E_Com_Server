import mongoose from 'mongoose'
import { connectDB } from '../utils/connectDB.js'
import { Products } from '../models/product.js'

const getProductById = async (req, res) => {
  try {
    // console.log(req.query.id)
    if (!req.query.id) {
      return res.status(400).json({
        status: false,
        message: 'Incomplete Request',
      })
    }

    const id = mongoose.isValidObjectId(req.query.id)
    if (!id) {
      return res.status(400).json({
        status: false,
        message: 'Invalid Request',
      })
    }

    await connectDB()
    const product = await Products.findById(req.query.id)

    if (!product) {
      return res.status(404).json({
        status: false,
        message: 'Product Not Found',
      })
    }

    return res.status(200).json({
      status: true,
      message: 'Working API',
      product,
    })
  } catch (error) {
    res.status(404).json({
      status: false,
      message: `Error: URL broke !`,
      error: error.message,
    })
  }
}

export default getProductById
