import express from 'express';
import { ticketCheckoutSession } from '../controllers/payment.controller.js'; 

const router = express.Router();

router.post('/ticket-checkout-session', ticketCheckoutSession);

export default router;