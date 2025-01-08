import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN as string);
        console.log('Db Connected')
    } catch (error) {
        
    }
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/", (req: Request, res: Response) => {
    res.send({ message: "Helllooo oOkakaa" })
});

//App listener
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});