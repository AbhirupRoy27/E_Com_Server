import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  customerEmail: {
    type: String,
    trim: true,
    required: true,
  },
  productId: {
    type: String,
    trim: true,
    required: true,
  },
  puchaseDate: { type: Date, default: Date.now() },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  billingAddress: {
    type: {
      buildingNo: {
        type: Number,
      },
      pincode: {
        type: Number,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
  },
  shippingAddress: {
    type: {
      pincode: {
        type: Number,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
  },
})

export const Orders = mongoose.model('orders', orderSchema)
