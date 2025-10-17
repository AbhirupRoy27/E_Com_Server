import Router from 'express'
export const BooksRoutes = Router()
import connectBooks from '../../Controllers/Books/connectBooks.js'
import { Books } from '../../DB/Books/bookModel.js'

BooksRoutes.get('/', async (req, res, next) => {
  try {
    connectBooks()

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10

    if (page < 1 || limit < 1) {
      return res.status(404).json({
        status: 'FAIL',
        message: 'The URL is Brocken.',
        error: {
          page:
            req.query.page < 1
              ? 'Negative or Zero Page Number'
              : 'Not Mentioned',
          limit:
            req.query.limit < 1 ? 'Negative or Zero LIMIT' : 'Not Mentioned',
        },
      })
    }

    const skip = (page - 1) * limit
    const totalDoc = await Books.countDocuments()

    const allBooks = await Books.find().skip(skip).limit(limit)
    return res.json({
      allBooks,
      total: totalDoc,
      page: req.query.page,
      totalPages: Math.ceil(totalDoc / limit),
    })
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
