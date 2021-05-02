import { Router } from 'express'
import { checkRole } from '../jwt/generarRole'
import * as userController from '../controller/userController'
import { verifyToken } from '../jwt/verifyToken'

const router = Router()

router.get('/', [ verifyToken, checkRole(['admin','user']) ], userController.getAll)

router.get('/:id', [ verifyToken, checkRole(['admin','user']) ], userController.getOne)

router.post('/',userController.saveOne)

router.delete('/delete',  [ verifyToken, checkRole(['admin']) ] , userController.deleteOne)

router.put('/edit/:id',  [ verifyToken, checkRole(['admin','user']) ] , userController.editOne)

export default router    