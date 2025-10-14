import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    success: 'OK',
    message: 'Server is Running Fine',
  })
})

app.listen(process.env.PORT, () =>
  console.log(`Server at http://localhost:${process.env.PORT}`)
)
