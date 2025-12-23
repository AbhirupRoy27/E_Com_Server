import { Router } from 'express'
import validateOrderFields from '../Middleware/Order/validateOrderFields.js'
import orderController from '../Controllers/orderController.js'
import findOrderController from '../Controllers/findOrderController.js'
import validateOrderId from '../Middleware/Order/validateOrderId.js'

const orderRouter = Router()

orderRouter.get('/find-order', validateOrderId, findOrderController)

orderRouter.patch('/order-confirm', validateOrderFields, orderController)

orderRouter.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'API Working(Order)',
    url: req.originalUrl,
  })
})

export default orderRouter
