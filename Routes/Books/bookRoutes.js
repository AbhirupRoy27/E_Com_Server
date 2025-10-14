import Router from 'express'
export const BooksRoutes = Router()
import connectBooks from '../../Controllers/Books/connectBooks.js'
import { Books } from '../../DB/Books/bookModel.js'

BooksRoutes.get('/', async (req, res, next) => {
  try {
    connectBooks()
    const allBooks = await Books.find()
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
