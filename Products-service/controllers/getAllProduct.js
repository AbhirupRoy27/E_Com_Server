import { Products } from '../models/product.js'
import { connectDB } from '../utils/connectDB.js'

export default async function getAllProduct(req, res) {
  try {
    const page = req.query.page || 1
    const limit = req.query.limit || 1

    if (page < 0 || limit > 10 || limit < 0) throw Error('Bad Request')
    await connectDB()

    const response = await Products.find({}).skip(page).limit(limit)
    return res.status(200).json({
      status: 'success',
      message: 'Request Complete',
      url: req.originalUrl,
      response,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: error.message,
      url: req.originalUrl,
    })
  }
}
