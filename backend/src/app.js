
import userRoute from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors';

const app = express()
//cors
app.use(cors({
    origin:'*',
    credentials: true
}));
// set json parser middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/users', userRoute)


export default app