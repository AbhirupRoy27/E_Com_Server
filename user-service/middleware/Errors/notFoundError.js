export default function notFoundError(req, res, next) {
  res.status(404).json({
    status: 'failure',
    message: 'No such route in API',
    url: req.originalUrl,
  })
}
