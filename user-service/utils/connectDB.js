import mongoose from 'mongoose'

const MAX_RETRY = 5
const RETRY_DELAY = 2000

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function connectDB() {
  let attempt = 0

  while (attempt < MAX_RETRY) {
    try {
      attempt++
      await mongoose.connect(process.env.DB_URI)
      if (mongoose.connection.readyState == 1) {
        console.log(`connected on attempt: ${attempt}`)
        return 'connected'
      }
    } catch (error) {
      if (attempt > MAX_RETRY) {
        console.error('DB Connection failed')
        process.exit(1)
      }

      console.log(`Retry to connect in ${RETRY_DELAY / 1000}s...`)
      await sleep(RETRY_DELAY)
    }
  }
}
