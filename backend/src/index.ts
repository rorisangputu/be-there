import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route'
import authRoutes from './routes/auth.route'
import myEventRoutes from './routes/my-event.route'
import eventRoutes from './routes/events.route'
import cookieParser from 'cookie-parser';


import { v2 as cloudinary } from 'cloudinary';

const cloudinaryConn = async () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        console.log("Cloudinary Connected.")
    } catch (error) {
         console.error('Db Connection Error:', error);
        process.exit(1); // Exit the process if cloudinary connection fails
    }
}

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN as string);
        console.log('Db Connected')
    } catch (error) {
        console.error('Db Connection Error: ', error)
        process.exit(1);
    }
}

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));


const PORT = process.env.PORT || 3000;

// app.use("/", (req: Request, res: Response) => {
//     res.send({ message: "Helllooo oOkakaa" })
// });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/my-events", myEventRoutes);
app.use("/api/events", eventRoutes)

//App listener
app.listen(PORT, () => {
    dbConn();
    cloudinaryConn();
    console.log("Listening on port:", PORT);
    
});