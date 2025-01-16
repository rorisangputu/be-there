import { Router, Request, Response } from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.middleware';
import { body } from 'express-validator';

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 //5mb
    }
});

// api/my-event -- create event
router.post('/', verifyToken,
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("date").notEmpty().withMessage("Date is required"),
        body("location").notEmpty().withMessage("Location is required"),
    ],
    upload.single("bannerPhoto"),
    async (req: Request, res: Response) => {
    console.log(req.body);
})


export default router;