import express, {Request, Response} from 'express';
import cors from 'cors';

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