import { connectDB } from '../utils/connectDB.js'

const productDefault = async (req, res) => {
  try {
    const id = req.query.id
    if (!id) throw new Error("Request is incomplete or can't be completed")

    await connectDB()
    return res.status(200).json({
      status: 'success',
      message: 'Request Complete',
      url: req.originalUrl,
      id,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: error.message,
      url: req.originalUrl,
    })
  }
}

export default productDefault
