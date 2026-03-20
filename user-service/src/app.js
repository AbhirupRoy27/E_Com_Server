import express from 'express'
import dotenv from 'dotenv'

import orderRouter from '../Routes/orderRouter.js'
import userRouter from '../Routes/userRouter.js'

import notFoundError from '../middleware/Errors/notFoundError.js'
import handleValidationError from '../middleware/Errors/validationError.js'
import handleMongoError from '../middleware/Errors/handleMogoError.js'
import globalErrorMiddleware from '../middleware/Errors/globalError.js'

dotenv.config()

const app = express()

// ─── Global Middleware ────────────────────────────────────────────────────────
app.use(express.json())

// ─── Routes ───────────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'API: User-Service is active and ready to use',
    possibleRoutes: [
      {
        name: 'order-service',
        route: '/api/orders',
        use: 'This Route handles the Order related API calls.',
      },
      {
        name: 'auth-service',
        route: '/api/auth',
        use: 'This Route handles the Auth related API calls.',
      },
    ],
  })
})

app.use('/api/orders', orderRouter)
app.use('/api/auth', userRouter)

// ─── Error Handling ───────────────────────────────────────────────────────────
app.use(notFoundError)
app.use(handleValidationError)
app.use(handleMongoError)
app.use(globalErrorMiddleware)

export default app