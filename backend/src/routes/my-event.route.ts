import { Router, Request, Response } from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.middleware';
import { body } from 'express-validator';
import cloudinary from "cloudinary";
import { EventType } from '../shared/types';
import Event from '../models/event.model';

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
        body("dateTime").notEmpty().withMessage("Date is required"),
        body("location").notEmpty().withMessage("Location is required"),
    ],
    upload.single("bannerPhotoFile"),
    async (req: Request, res: Response) => {
        //console.log(req.body, req.file);
        try {
            const bannerPhotoFile = req.file as Express.Multer.File;
            const newEvent: EventType = req.body;

            const bannerPhotoUrl = await uploadImages(bannerPhotoFile);
            newEvent.bannerPhoto = bannerPhotoUrl;
            newEvent.userId = req.userId

            const event = new Event(newEvent);
            await event.save();

            res.status(201).send(event);
        } catch (error) {
            console.log("Error creating event", error);
            res.status(500).json({ message: "Something went wrong" });
        }
        
    }
);

// api/my-event -- fetch events
router.get("/", verifyToken, async (req: Request, res: Response) => {
    try {
        const events = await Event.find({ userId: req.userId });
        res.json(events);

    } catch (error) {
        res.status(500).json({ message: "Error fetching events" });
    }
});

// Modify uploadImages to handle a single file
async function uploadImages(bannerPhotoFile: Express.Multer.File) {
    const b64 = Buffer.from(bannerPhotoFile.buffer).toString("base64"); //converting image to base64 string
    let dataURI = "data:" + bannerPhotoFile.mimetype + ";base64," + b64; //creating a string that describes image
    const res = await cloudinary.v2.uploader.upload(dataURI); //using cloudinary SDK to upload image
    return res.url;  // Return the URL of the uploaded image
};

export default router;