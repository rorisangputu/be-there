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

router.post('/:id/rsvp', verifyToken,
    [
        body("guestName").notEmpty().withMessage("Name is required"),
        body("guestEmail").notEmpty().withMessage("Email is required"),
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
      return res.status(500).json({ message: "Something went wrong" });
        }
    }
)

export default router;