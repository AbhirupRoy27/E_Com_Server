import { User } from '../model/userModel.js'

export default async function addUserController(req, res, next) {
  try {
    const data = req.body
    if (!data) throw Error('Incomplete Request')

    const insertedData = await User.create(data)
    return res.status(200).json({
      status: 'success',
      insertedData,
    })
  } catch (error) {
    next(error)
  }
}
