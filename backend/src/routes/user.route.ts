import { Request, Response, Router } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

// router.get('/ola', async (req: Request, res: Response) => {
//     res.send({ message: "HELLLLOO from User route! " })
// });

router.post("/register", [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isString(),
    check("password", "Password must be 6 or more characters").isLength({
        min: 6
    }),
])

export default router;