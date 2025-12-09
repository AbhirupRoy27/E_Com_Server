import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ProductRouter from './Router/products.js'
import startCallback from './utils/startCallback.js'
import catchAllError from './utils/catchAllError.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products', ProductRouter)

app.use(catchAllError)

app.listen(process.env.PORT || 4000, startCallback)

export default app
