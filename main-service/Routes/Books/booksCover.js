import { Router } from 'express'
import connectBooks from '../../Controllers/Books/connectBooks.js'
import { Books } from '../../DB/Books/bookModel.js'

export const bookCovers = Router()

bookCovers.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'SUCCESS',
    message: 'API hit success but No-Data here.',
    client: req.originalUrl,
  })
})

bookCovers.get('/:any', (req, res, next) => {
  try {
    const some = req.params.any
    throw new Error(`Not Found`)
  } catch (error) {
    next(error)
  }
})

bookCovers.get('/img', async (req, res, next) => {
  try {
    connectBooks()

    let limit = parseInt(req.query.limit)
    if (limit < 1) throw new Error('Limit Not Valid')

    const data = await Books.find().limit(limit || 4)
    res.json({
      Covers: data.map((p) => p.coverImage),
      limit: limit || 'default',
    })
  } catch (error) {
    next(error)
  }
})
