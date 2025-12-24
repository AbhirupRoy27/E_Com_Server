import { User } from '../../model/userModel.js'
import checkPass from '../../utils/Password/checkPass.js'
import userNotFound from '../../utils/User/userNotFound.js'

const userLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })

    if (!user) return userNotFound(res, email)

    const result = await checkPass(password, user.password)
    if (!result) {
      return res.status(401).json({
        status: 'failure',
        message: `auth failure for user email: ${email}`,
      })
    }
    return res.status(200).json({
      status: 'success',
      message: 'user found and auth success',
      user,
    })
  } catch (error) {
    next(error)
  }
}

export default userLoginController
