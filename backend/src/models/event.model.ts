import mongoose, { Schema } from 'mongoose';
import { EventType } from '../shared/types';

const eventSchema = new Schema({
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
    }
}, { timestamps: true });

const Event = mongoose.model<EventType>("Event", eventSchema);

export default Event;