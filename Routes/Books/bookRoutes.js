import Router from 'express'
export const BooksRoutes = Router()
import connectBooks from '../../Controllers/Books/connectBooks.js'
import { Books } from '../../DB/Books/bookModel.js'

BooksRoutes.get('/', async (req, res, next) => {
  try {
    connectBooks()
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5

    const skip = (page - 1) * limit

    const allBooks = await Books.find().skip(skip).limit(limit)

    res.json(allBooks)
  } catch (error) {
    next(error)
  }
})

BooksRoutes.post('/add-books', async (req, res) => {
  connectBooks()
  const data = req.body
  const updated = await Books.create(data)

  res.status(200).json({
    success: 'OK',
    message: 'Server is Running Fine',
    data: updated,
  })
})
