import express from 'express'
import dotenv from 'dotenv'
import userRouter from './Routes/user.js'
import connectDB from './utils/connectDB.js'
import globalErrorHandler from './middleware/Errors/globalError.js'
import handleValidationError from './middleware/Errors/validationError.js'
import handleMongoError from './middleware/Errors/handleMogoError.js'
import notFound from './middleware/Errors/notFound.js'
import orderRouter from './Router/orderRouter.js'

const app = express()
dotenv.config()
app.use(express.json())
const res = await connectDB()

app.use('/api/orders', orderRouter)

app.use('/api/user', userRouter)

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'API Working',
    url: req.originalUrl,
  })
})

// NOT FOUND
app.use(notFound)

// ERROR Handlers
app.use(handleValidationError)
app.use(handleMongoError)
app.use(globalErrorHandler)

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Sever is running at host - http://localhost:${process.env.PORT || 3000}${
      !res ? ', but DB not connected!' : ''
    }`
  )
})

export default app
