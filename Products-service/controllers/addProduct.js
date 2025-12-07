import { Products } from '../models/product.js'
import { connectDB } from '../utils/connectDB.js'

const addProduct = async (req, res) => {
  try {
    if (!req.body) throw Error('empty boody')

    const result = validateBody(req)
    if (!result) throw Error('Incomplete request')

    const input = req.body
    await connectDB()
    const response = await Products.create(input)
    if (!response) throw Error('Cannot Create Product')

    return res.status(200).json({
      status: 'success',
      message: 'Item add Complete',
      url: req.originalUrl,
      response,
    })
  } catch (error) {
    if (error.code == 11000) {
      return res.status(404).json({
        status: 'failure',
        duplicate_value: error.keyValue,
        message: `duplicate key error - Request Failed`,
        url: req.originalUrl,
      })
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'failure',
        // error: error.name,
        message: `${error.message} - Request Failed`,
        url: req.originalUrl,
      })
    }

    return res.status(404).json({
      status: 'failure',
      error,
      message: `(Not Found)${error.message} - Request Failed`,
      url: req.originalUrl,
    })
  }
}

const validateBody = (req) => {
  const title = req.body.title
  const seller = req.body.seller
  const description = req.body.description
  const price = Number(req.body.price)
  const category = req.body.category
  const stock = Number(req.body.stock)
  const coverImage = req.body.coverImage
  const productImages = req.body.productImages

  const isPresent = typeof productImages

  if (
    !title ||
    !seller ||
    !description ||
    isNaN(price) ||
    !category ||
    isNaN(stock) ||
    !coverImage ||
    isPresent != 'object'
  )
    return false

  return true
}

export default addProduct
