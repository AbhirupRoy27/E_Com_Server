import { Products } from '../models/product.js'
import { connectDB } from '../utils/connectDB.js'

const getTrendingProducts = async (req, res) => {
  try {
    await connectDB()
    const trendingProducts = await Products.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    )
      .skip(0)
      .limit(6)

    return res.status(200).json({
      status: 'success',
      message: 'All trending Products listed in the API',
      url: req.originalUrl,
      trendingProducts,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: 'API Not Working',
      url: req.originalUrl,
    })
  }
}

export default getTrendingProducts
