import { Router } from 'express'
import validateOrderFields from '../Middleware/Order/validateOrderFields.js'
import findOrderController from '../controllers/orderControllers/findOrderController.js'
import validateOrderId from '../Middleware/Order/validateOrderId.js'
import orderConfirmationController from '../controllers/orderControllers/orderConfirmationController.js'
import metaInfoConroller from '../controllers/orderControllers/orderMetaInfoController.js'

const orderRouter = Router()

orderRouter.get('/find-order', validateOrderId, findOrderController)

orderRouter.patch(
  '/order-confirm',
  validateOrderFields,
  orderConfirmationController
)

orderRouter.get('/', metaInfoConroller)

export default orderRouter
