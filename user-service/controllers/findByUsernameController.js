import { User } from '../model/userModel.js'

const findByUsernameController = async (req, res, next) => {
  try {
    const { username } = req.query
    if (!username) {
      return res.status(200).json({
        status: 'failure',
        message: `${req.originalUrl} is not a specified route`,
        routes: [`/api/user?username=YOUR_USERNAME`],
      })
    }

    const users = await User.find(
      { username },
      { password: 0, createdAt: 0, updatedAt: 0, __v: 0 }
    )
    if (!users || users.length < 1) {
      return res.status(404).json({
        status: 'success',
        message: `No user with username: ${username}`,
      })
    }

    return res.status(200).json({
      status: 'success',
      message: `list of user with username ${username} are`,
      users,
    })
  } catch (error) {
    next()
  }
}

export default findByUsernameController
