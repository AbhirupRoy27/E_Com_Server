import { User } from '../model/userModel.js'
import hashPass from '../utils/Password/hashPass.js'

export default async function addUserController(req, res, next) {
  try {
    const data = req.body
    const hash = await hashPass(data.password)
    data.password = hash
    const insertedData = await User.create(data)
    return res.status(200).json({
      status: 'success',
      insertedData,
    })
  } catch (error) {
    next(error)
  }
}
