import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import contactRouter from './routes/contact.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/listing", listingRouter);
app.use("/contact", contactRouter);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});