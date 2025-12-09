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
    discount: {
      type: Number,
      min: 0,
      default: 0,
    },
    varified: {
      type: Boolean,
      default: false,
      required: true,
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
      trim: true,
    },
    productImages: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      validate: {
        validator: function (val) {
          return val.length <= 6
        },
        message: 'You can upload a maximum of 6 product images.',
      },
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

export const Products = mongoose.model('product', productSchema)
