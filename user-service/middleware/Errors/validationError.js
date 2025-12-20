export default function handleValidationError(error, req, res, next) {
  if (error.name == 'ValidationError') {
    const err = Object.keys(error.errors).length
    if (err > 1) {
      return res.status(400).json({
        message: 'validation failed',
        error: `${err} validation failed for: ${Object.keys(error.errors)}`,
      })
    }
    return res.status(400).json({
      message: 'validation failed',
      error: error.message,
    })
  }

  next(error)
}
