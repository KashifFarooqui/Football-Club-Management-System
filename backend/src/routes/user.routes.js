import { Router } from 'express'
import { login, logout, register } from '../controllers/user.controller.js'
import { coachlogin, coachregister } from '../controllers/coach.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

export default router;

