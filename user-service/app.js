import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/DB/connectDB.js'
import orderRouter from './Routes/orderRouter.js'
import userRouter from './Routes/userRouter.js'
import notFoundError from './middleware/Errors/notFoundError.js'
import handleValidationError from './middleware/Errors/validationError.js'
import handleMongoError from './middleware/Errors/handleMogoError.js'
import globalErrorMiddleware from './middleware/Errors/globalError.js'

const app = express()
dotenv.config()
app.use(express.json())
const res = await connectDB()

app.use('/api/orders', orderRouter)

app.use('/api/auth', userRouter)

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

// NOT FOUND
app.use(notFoundError)

// ERROR Handlers
app.use(handleValidationError)
app.use(handleMongoError)
app.use(globalErrorMiddleware)

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Sever is running at host - http://localhost:${process.env.PORT || 3000}${
      !res ? ', but DB not connected!' : ''
    }`
  )
})

export default app
