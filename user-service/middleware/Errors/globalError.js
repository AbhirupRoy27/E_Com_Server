export default function globalErrorHandler(err, req, res, next) {
  res.status(500).json({
    status: 'failure',
    message: err.message || 'Internal Server Error',
  })
}
