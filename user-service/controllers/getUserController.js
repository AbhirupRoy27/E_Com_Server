import { User } from '../model/userModel.js'

export default async function getUserController(req, res, next) {
  try {
    const data = req.body
    const user = await User.findOne(data, {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
      password: 0,
    })
    return res.status(200).json({
      status: 'success',
      message: 'API Working: Can get the User.',
      userDetails: user,
    })
  } catch (error) {
    next(error)
  }
}
