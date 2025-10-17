export default function handleErrors(err, req, res, next) {
  try {
    if (!err) {
      return res.status(500).json({
        success: 'FAIL',
        message: 'Internel Server Error',
      })
    }

    throw err
  } catch (error) {
    if (error.code === 11000) {
      return res.status(404).json({
        success: 'FAIL',
        message: 'Duplicate Entry',
        errorIn: error.keyValue,
      })
    }
    return res.status(404).json({
      success: 'FAIL',
      message: err.message,
      client: `${req.url}`,
    })
  }
}
