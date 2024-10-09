
import userRoute from './routes/user.routes.js'
import coachRoute from './routes/coach.routes.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors';

const app = express()
//cors
app.use(cors());
// set json parser middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/users', userRoute)
app.use('/api/coach', coachRoute)


export default app