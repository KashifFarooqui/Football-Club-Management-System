
import userRoute from './routes/user.routes.js'
import coachRoute from './routes/coach.routes.js'
import cartRoute from "./routes/cart.routes.js"
import ticketRoute from "./routes/ticket.routes.js"
import paymentRoute from "./routes/payment.routes.js"
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors';

const app = express()
//cors
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"] 
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/users', userRoute)
app.use('/api/coach', coachRoute)
app.use('/api/shop/cart', cartRoute)
app.use('/api/shop/cart', paymentRoute);
app.use('/api/schedule', ticketRoute)

export default app