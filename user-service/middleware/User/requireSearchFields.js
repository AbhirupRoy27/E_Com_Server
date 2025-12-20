export default function requireSearchFields(req, res, next) {
  const data = req.body
  if (!data) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD REQUEST',
    })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({
      status: 'failure',
      message: 'BAD REQUEST: Missing or Invalid data',
    })
  }
  next()
}
