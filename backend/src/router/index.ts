import { Router } from 'express'
import auth from './auth'
import user from './user'

const router = Router();

router.use('/api/auth',auth)
router.use('/api/user',user)

export default router

