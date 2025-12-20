export default function handleMongoError(error, req, res, next) {
  if (error.name == 'MongoServerError') {
    if (error.code == 11000) {
      return res.status(400).json({
        status: 'failure',
        error: 'Duplicate Value found',
        key: error.keyValue,
        message: `${error.keyValue.email || 'key'} already present on the db.`,
      })
    }

    return res.status(400).json({
      status: 'failure',
      error: 'Other MongoServerError',
      message: error.message,
    })
  }

  next(error)
}
