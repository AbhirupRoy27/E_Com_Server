import { Router } from 'express'
import connectBooks from '../../Controllers/Books/connectBooks.js'
import { Books } from '../../DB/Books/bookModel.js'

export const bookCovers = Router()

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
