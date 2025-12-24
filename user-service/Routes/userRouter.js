import { Router } from 'express'
import validateBodySchema from '../middleware/User/validateBodySchema.js'
import requireSearchFields from '../middleware/User/requireSearchFields.js'
import validateLoginCreds from '../middleware/User/validateLoginCreds.js'
import addUserController from '../controllers/userControllers/addUserController.js'
import userLoginController from '../controllers/userControllers/userLoginController.js'
import getUserController from '../controllers/userControllers/getUserController.js'
import userMetaInfoController from '../controllers/userControllers/userMetaInfoController.js'

const userRouter = Router()

userRouter.post('/add-user', validateBodySchema, addUserController)

userRouter.post('/user-login', validateLoginCreds, userLoginController)

userRouter.get('/get-user', requireSearchFields, getUserController)

userRouter.get('/', userMetaInfoController)

export default userRouter
