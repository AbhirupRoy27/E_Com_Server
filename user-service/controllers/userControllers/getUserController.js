import { User } from '../../model/userModel.js'

export default async function getUserController(req, res, next) {
  try {
    const { email, username } = req.body
    if (email) {
      const user = await User.findOne(
        { email },
        {
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
          password: 0,
        }
      )

      if (!user) {
        return res.status(404).json({
          status: 'failure',
          message: `NOT_FOUND: No user with email: ${email}`,
        })
      }

      return res.status(200).json({
        status: 'success',
        message: `API Working: User Data found with email: ${email}.`,
        userDetails: user,
      })
    }
    const user = await User.findOne(
      { username: username },
      {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        password: 0,
      }
    )

    if (!user) {
      return res.status(404).json({
        status: 'failure',
        message: `NOT_FOUND: No user with username: ${username}`,
      })
    }

    return res.status(200).json({
      status: 'success',
      message: `API Working: User Data found with username: ${username}.`,
      userDetails: user,
    })
  } catch (error) {
    next(error)
  }
}
