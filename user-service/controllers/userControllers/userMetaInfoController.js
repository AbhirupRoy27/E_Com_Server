export default function userMetaInfoController(req, res) {
  return res.status(200).json({
    status: 'success',
    message: 'API: User-service Working.',
    possibleRoutes: [
      {
        name: 'Default Route',
        route: '/',
        devInfo: 'This Route handles default behaviour.',
        method: 'GET',
      },
      {
        name: 'Add User',
        route: '/add-user',
        devInfo: 'This Route handles adding a User to DB.',
        method: 'POST',
      },
      {
        name: 'User Login',
        route: '/user-login',
        devInfo: 'This Route handles User login and authentication.',
        method: 'POST',
      },
      {
        name: 'Get User',
        route: '/get-user',
        devInfo: 'This Route handles fetching a User from DB.',
        method: 'GET',
      },
    ],
  })
}