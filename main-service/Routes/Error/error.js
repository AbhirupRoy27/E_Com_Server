export function customError(req, res, next) {
  const err = new Error('Custom Error')
  next(err)
}
