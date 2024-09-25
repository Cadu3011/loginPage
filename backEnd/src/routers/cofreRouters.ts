import { Router } from 'express'
import { UserController } from '../controllers/userController'
const router = Router()


router.get('/api')
router.post('/api/user',UserController.loginUser)
export default router