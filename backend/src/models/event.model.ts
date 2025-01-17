import mongoose, { Schema } from 'mongoose';
import { EventType, RsvpType } from '../shared/types';

const rsvpSchema = new Schema<RsvpType>({
    userId: { type: String, required: true },
    guestName: { type: String, required: true },
    guestEmail: { type: String, required: true }
});


const eventSchema = new Schema<EventType>({
    userId: { type: String, required: true },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
        validate: {
            validator: (value: Date) => {
                return value.getTime() > Date.now();
            },
            message: 'Event date and time must be in the future.',
        },
    },
    location: {
        type: String,
        required: true
    },
    bannerPhoto: {
        type: String,
        required: true
    },
    rsvps: [rsvpSchema],
}, { timestamps: true });

const Event = mongoose.model<EventType>("Event", eventSchema);

export default Event;