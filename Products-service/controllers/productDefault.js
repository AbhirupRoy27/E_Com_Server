const productDefault = async (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
      message: 'Request working at Products',
      possibleroutes: [
        '/add-product(POST)',
        '/all-product(GET)',
        '/one-product(GET)',
      ],
      url: req.originalUrl,
    })
  } catch (error) {
    return res.status(404).json({
      status: 'failure',
      message: error.message,
      url: req.originalUrl,
      q: req.query,
    })
  }
}

export default productDefault
