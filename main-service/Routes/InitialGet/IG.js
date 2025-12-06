import { Router } from 'express'
const appLive = Router()

appLive.get('/', (req, res) => {
  res.status(200).json({
    success: 'OK',
    message: 'Server is Running Fine',
  })
})

export default appLive
