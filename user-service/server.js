import app from './src/app.js'
import connectDB from './utils/DB/connectDB.js'

const PORT = process.env.PORT || 3000

const startServer = async () => {
  const db = await connectDB()

  app.listen(PORT, () => {
    const dbStatus = db ? '' : ', but DB not connected!'
    console.log(`Server is running at http://localhost:${PORT}${dbStatus}`)
  })
}

startServer()