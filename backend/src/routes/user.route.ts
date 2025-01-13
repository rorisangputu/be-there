import { Request, Response, Router } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

// router.get('/ola', async (req: Request, res: Response) => {
//     res.send({ message: "HELLLLOO from User route! " })
// });

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isString(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req); // Getting errors from express-validator

    if (!errors.isEmpty()) {
      res.status(400).json({ message: errors.array() });
      return; // End the function here
    }

    try {
      let user = await User.findOne({
        email: req.body.email,
      });

      if (user) {
        res.status(400).json({ message: "User already exists" });
        return; 
      }

      user = new User(req.body);
      await user.save();

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("bethere_auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });
      res.status(200).json({ message: "User has been created" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong" });
    }
  }
);


export default router;