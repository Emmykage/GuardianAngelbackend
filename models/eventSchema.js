import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export const Event = mongoose.model('Event', eventSchema)