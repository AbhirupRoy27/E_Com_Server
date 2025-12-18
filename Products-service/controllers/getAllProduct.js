import { Products } from '../models/product.js'
import { connectDB } from '../utils/connectDB.js'

export default async function getAllProduct(req, res) {
  try {
    const page = req.query.page || 1
    const limit = req.query.limit || 15

    if (page <= 0 || limit > 15 || limit <= 0)
      throw Error('Bad Request limit or Page not Valid')
    await connectDB()

    const response = await Products.find({})
      .skip(page - 1)
      .limit(limit)

    if (response.length > 0) {
      return res.status(200).json({
        status: 'success',
        message: 'Request Complete',
        url: req.originalUrl,
        response,
      })
    }
    return res.status(200).json({
      status: 'success',
      message: 'Request Complete - but no data',
      url: req.originalUrl,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: error.message,
      url: req.originalUrl,
    })
  }
}
