export default function OrderMetaInfoConroller(req, res) {
  return res.status(200).json({
    status: 'success',
    message: 'API: Order-service Working.',
    possibleRoutes: [
      {
        name: 'order-confirm',
        route: '/order-confirm',
        devInfo: 'This Route handles the Order confirm related API calls.',
        method: 'PATCH',
      },
      {
        name: 'find-order',
        route: '/find-order',
        devInfo: 'This Route handles the finding order related API calls.',
        method: 'GET',
      },
    ],
  })
}
