import mongoose from 'mongoose'

const validateOrderId = (req, res, next) => {
  const data = req.body
  if (!data) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Empty Body',
    })
  }

  const { orderId } = req.query

  if (!orderId) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Missing fields in the request.',
    })
  }

  if (!mongoose.isValidObjectId(orderId)) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD_REQUEST: Invalid Id.',
    })
  }

  next()
}

export default validateOrderId
