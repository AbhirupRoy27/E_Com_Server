import express from 'express'
import dotenv from 'dotenv'
import userRouter from './Routes/user.js'

const app = express()
dotenv.config()
app.use(express.json())

app.use('/api/user', userRouter)

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'API Working',
    url: req.originalUrl,
  })
})

app.use((req, res) => {
  const error = new Error('NOT FOUND')
  return res.status(500).json({
    status: 'failure',
    message: 'NO SUCH ROUTE IN API',
    error: error.message,
    url: req.originalUrl,
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Sever is running at host - http://localhost:${process.env.PORT || 3000}`
  )
})

export default app
