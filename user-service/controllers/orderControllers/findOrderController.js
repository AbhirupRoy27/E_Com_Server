import { Orders } from '../../model/orderModel.js'

const findOrderController = async (req, res, next) => {
  try {
    const { orderId } = req.query

    const order = await Orders.findById(orderId, { __v: 0 })

    if (!order) {
      return res.status(404).json({
        status: 'failure',
        message: `NOT_FOUND: Order Not Found with id: ${orderId}`,
      })
    }

    return res.status(200).json({
      status: 'Success',
      order,
    })
  } catch (error) {
    next(error)
  }
}

export default findOrderController
