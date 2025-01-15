import mongoose, { Schema } from 'mongoose';
import { EventType } from '../shared/types';

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Event = mongoose.model<EventType>("Event", eventSchema);

export default Event;