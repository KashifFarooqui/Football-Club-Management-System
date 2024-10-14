import { Router } from 'express'
import { login, logout, register, updateProfile} from '../controllers/user.controller.js'


const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.put('/profile', updateProfile)


export default router;

