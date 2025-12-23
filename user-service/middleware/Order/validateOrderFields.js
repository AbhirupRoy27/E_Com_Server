import mongoose from 'mongoose'

const validateOrderFields = (req, res, next) => {
  const data = req.body
  if (!data) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Empty Body',
    })
  }

  const { email, order } = req.body

  if (!email || !order) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Missing fields in the request.',
    })
  }

  const countProp = Object.keys(order).length
  if (countProp < 1) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Missing fields.',
    })
  }

  if (!mongoose.isValidObjectId(order.productId)) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Invalid Id.',
    })
  }

  next()
}

export default validateOrderFields
