import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    trim: true,
    index: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  coverImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

bookSchema.index({ title: 'text', createdAt: -1 })

export const Books = mongoose.model('books', bookSchema)
