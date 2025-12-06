import mongoose from 'mongoose'

export default function connectBooks() {
  try {
    mongoose.connect(process.env.DB_URI)
    console.log('connected')
  } catch (error) {
    return console.log('Not connected')
  }
}
