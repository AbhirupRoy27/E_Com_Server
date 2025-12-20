import { Router } from 'express'
import addUserController from '../controllers/addUserController.js'
import validateBodySchema from '../middleware/User/validateBodySchema.js'
import requireSearchFields from '../middleware/User/requireSearchFields.js'
import getUserController from '../controllers/getUserController.js'
import findByUsernameController from '../controllers/findByUsernameController.js'

const userRouter = Router()

userRouter.post('/add-user', validateBodySchema, addUserController)

userRouter.get('/get-user', requireSearchFields, getUserController)

userRouter.get('/', findByUsernameController)

export default userRouter
