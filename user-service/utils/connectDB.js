import mongoose from 'mongoose'

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI)
    if (mongoose.connection.readyState == 1) {
      return 'connected'
    }

    throw Error('DB not connected')
  } catch (error) {
    return error.message
  }
}
