import { Orders } from '../model/orderModel.js'
import { User } from '../model/userModel.js'

const orderController = async (req, res, next) => {
  try {
    let neworder
    try {
      neworder = await Orders.create(order)

      const user = await User.findOneAndUpdate(
        { email },
        { $push: { orders: neworder._id } },
        { new: true, select: 'name email orders', runValidators: true }
      )

      if (!user) throw Error('NO_USER')
      return res.json({
        user,
      })
    } catch (error) {
      // If user update fails, delete the orphaned order
      if (neworder) await Orders.findByIdAndDelete(neworder._id)
      return res.json({
        message: 'Orphan Deleted',
        error: error.message,
      })
    }
  } catch (error) {
    next(error)
  }
}

export default orderController
