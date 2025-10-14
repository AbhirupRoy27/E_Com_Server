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
    return res.status(404).json({
      success: 'FAIL',
      message: err.message,
      client: `${req.url}`,
    })
  }
}
