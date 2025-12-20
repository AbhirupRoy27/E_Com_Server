import { Router } from 'express'

const userRouter = Router()

userRouter.post('/add-user', (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
      message: 'API Working: Can add the User.',
      url: req.originalUrl,
    })
  } catch (error) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD REQUEST',
      url: req.originalUrl,
    })
  }
})

userRouter.get('/get-user', (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
      message: 'API Working: Can get the User.',
      url: req.originalUrl,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: error.message,
      url: req.originalUrl,
    })
  }
})

export default userRouter
