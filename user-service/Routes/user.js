import { Router } from 'express'
import addUserController from '../controllers/addUserController.js'
import validateBodySchema from '../middleware/User/validateBodySchema.js'
import requireSearchFields from '../middleware/User/requireSearchFields.js'
import getUserController from '../controllers/getUserController.js'
import findByUsernameController from '../controllers/findByUsernameController.js'
import userLoginController from '../controllers/userLoginController.js'
import validateLoginCreds from '../middleware/User/validateLoginCreds.js'

const userRouter = Router()

userRouter.post('/add-user', validateBodySchema, addUserController)

userRouter.get('/get-user', requireSearchFields, getUserController)

userRouter.post('/user-login', validateLoginCreds, userLoginController)

userRouter.get('/', findByUsernameController)

export default userRouter
