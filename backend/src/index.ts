import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route'

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;

// app.use("/", (req: Request, res: Response) => {
//     res.send({ message: "Helllooo oOkakaa" })
// });

app.use("/api/users", userRoutes);

//App listener
app.listen(PORT, () => {
    dbConn();
    console.log("Listening on port:", PORT);
    
});