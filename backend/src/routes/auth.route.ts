import {Request, Response, Router} from 'express'
import { check, validationResult } from 'express-validator'
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router()
router.get("/validate-token", verifyToken, (req: Request, res: Response) => {
    res.status(200).json({ userId: req.userId })
    return;
});

router.post("/logout", (req: Request, res: Response) => {
    res.cookie("bethere_auth_token", "", {
        expires: new Date(0),
    });

    res.status(200).send();
});

export default router;