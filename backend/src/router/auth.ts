import { Router } from 'express'
import * as authController from '../controller/authController'
const router = Router()

router.post('/login',authController.login)

export default router 