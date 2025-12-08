const catchAllError = (req, res) => {
  try {
    return res.status(404).json({
      status: 'success',
      message: 'common router working ',
      url: req.originalUrl,
    })
  } catch (error) {}
}

export default catchAllError
