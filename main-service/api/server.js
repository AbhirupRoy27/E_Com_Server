import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import handleErrors from '../Middleware/Error/Error.js'
import { BooksRoutes } from '../Routes/Books/bookRoutes.js'
import appLive from '../Routes/InitialGet/IG.js'
import { customError } from '../Routes/Error/error.js'
import { bookCovers } from '../Routes/Books/booksCover.js'
dotenv.config()

const app = express()
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://abhisecomnew.netlify.app'],
  })
)
app.use(express.json())

app.get('/', appLive)

app.use('/api/books', BooksRoutes)
app.use('/api/covers', bookCovers)

app.get('/:any', customError)

// Handling Final Error
app.use(handleErrors)

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`🚀 Local server running on port ${PORT}`))
}

export default app
