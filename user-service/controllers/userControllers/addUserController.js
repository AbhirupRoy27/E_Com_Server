import { User } from '../../model/userModel.js'
import hashPass from '../../utils/Password/hashPass.js'

export default async function addUserController(req, res, next) {
  try {
    const data = req.body
    const hash = await hashPass(data.password)
    data.password = hash
    const insertedData = await User.create(data)

    if (!insertedData) {
      return res.status(500).json({
        status: 'failure',
        message: 'data is not added to DB',
      })
    }

    return res.status(200).json({
      status: 'success',
      message: 'data is added to DB',
      insertedData: {
        username: insertedData.username,
        email: insertedData.email,
        isSubscribed: insertedData.isSubscribed,
      },
    })
  } catch (error) {
    next(error)
  }
}
