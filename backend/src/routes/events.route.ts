import { Router, Request, Response } from 'express';
import { body, param, validationResult } from 'express-validator';
import Event from '../models/event.model';
import { verifyToken } from '../middleware/auth.middleware';
import { RsvpType } from '../shared/types';

const router = Router();

router.get('/:id', [param("id").notEmpty().withMessage("Event Id is required")],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
            return;
        }

        try {
            const event = await Event.findById(req.params.id);
            res.json(event);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error fetching event" });
        }
    }
);

router.get('/:id/rsvp-status',
    [param("id").notEmpty().withMessage("Event Id is required")],
    verifyToken,
    async (req: Request, res: Response) => {

    const { id } = req.params;
    const userId = req.userId;

    console.log("Event Id:", id, "user", userId)
    try {
        const event = await Event.findOne({ _id: id, 'rsvps.userId': userId.toString() });
        if (event) {
            res.status(200).json({ rsvpExists: true })
            return;
        } else {
            res.status(200).json({ rsvpExists: false })
            return;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
})

router.post('/:id/rsvp', verifyToken,
    [
        body("guestName").notEmpty().withMessage("Name is required"),
        body("guestEmail").notEmpty().withMessage("Email is required"),
        param("eventId").notEmpty().withMessage("Event Id is required")
    ],
    async (req: Request, res: Response) => {
        console.log(req.body, req.params.id)
        try {
            const newRsvp: RsvpType = {
                ...req.body,
                userId: req.userId
            };

            const event = await Event.findByIdAndUpdate({ _id: req.params.id }, {
                $push: { rsvps: newRsvp }
            });

            if (!event) {
                res.status(400).json({ message: "Event not found" })
                return;
            }

            await event.save();
            res.status(200).send(event);
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ message: "Something went wrong" });
            return;
        }
    }
)



export default router;