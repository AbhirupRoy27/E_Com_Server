import mongoose from 'mongoose'

export async function connectDB() {
  try {
    const DB_URI = process.env.DB_URI
    await mongoose.connect(DB_URI)
    console.log(mongoose.connection.readyState == 1 && 'Connected')
  } catch (error) {
    console.log(error)
  }
}

export async function disConnectDB() {
  try {
    const DB_URI = process.env.DB_URI
    await mongoose.disconnect(DB_URI)
    // console.log(mongoose.connection.readyState)
  } catch (error) {
    console.log(error)
  }
}
