export default function validateBodySchema(req, res, next) {
  const data = req.body
  if (!data) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD REQUEST',
    })
  }

  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD REQUEST: Missing data',
    })
  }
  next()
}
