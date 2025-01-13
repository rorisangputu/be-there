import { Request, Response, Router } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/ola', async (req: Request, res: Response) => {
    res.send({ message: "HELLLLOO from User route! " })
});

export default router;