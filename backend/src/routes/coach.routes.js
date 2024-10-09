import { Router } from 'express'
import { coachlogin, coachregister } from '../controllers/coach.controller.js'

const router = Router()

router.post('/login', coachlogin)
router.post('/register', coachregister)

export default router