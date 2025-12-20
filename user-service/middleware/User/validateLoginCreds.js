export default function validateLoginCreds(req, res, next) {
  try {
    const data = req.body
    if (!data) {
      return res.status(400).json({
        status: 'failure',
        message: 'BAD REQUEST: Empty Body',
      })
    }

    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        status: 'failure',
        message: 'BAD_REQUEST: Missing required data',
      })
    }
  } catch (error) {
    next(error)
  }

  next()
}
