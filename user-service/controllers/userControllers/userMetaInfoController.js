export default function userMetaInfoController(req, res) {
  return res.status(200).json({
    status: 'success',
    message: 'API: Order-service Working.',
    possibleRoutes: [
      {
        name: '',
        route: '/add-user',
        devInfo: 'This Route handles adding User to DB',
        method: 'POST',
      },
      {
        name: '',
        route: '/user-login',
        devInfo: 'This Route handles the Order confirm related API calls.',
        method: 'POST',
      },
      {
        name: '',
        route: '/get-user',
        devInfo: 'This Route handles the Order confirm related API calls.',
        method: 'GET',
      },
      {
        name: 'Default Route',
        route: '/',
        devInfo: 'This Route handle Default behaviour.',
        method: 'GET',
      },
    ],
  })
}
