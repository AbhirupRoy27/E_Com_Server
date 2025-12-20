const userNotFound = (res, email) => {
  return res.status(404).json({
    status: 'failure',
    message: `No user found with email: ${email}`,
  })
}

export default userNotFound
