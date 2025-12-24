import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      required: true,
      minLength: [4, 'username should be at least 4 characters!'], // Minimum length of 3 characters
      maxLength: [15, 'username should be at less than 25 characters!'], // Maximum length of 15 characters
      trim: true,
    },
    email: {
      type: String,
      required: true,
      minLength: [11, 'username should be at least 11 characters!'],
      maxLength: [31, 'username should be at less than 31 characters!'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, 'username should be at least 6 characters!'],
      trim: true,
    },
    orders: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      default: [],
    },
    wishlist: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      default: [],
    },
    savedAddress: {
      type: {
        buildingNo: {
          type: Number,
        },
        pincode: {
          type: Number,
        },
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
      },
      default: {
        buildingNo: 0,
        pincode: 0,
        street: '',
        city: '',
        state: '',
      },
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export const User = mongoose.model('users', userSchema)
