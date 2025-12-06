import mongoose, { Mongoose } from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    seller: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      required: true,
      type: String,
      trim: true,
      index: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    coverImage: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export const Products = mongoose.model('product', productSchema)
