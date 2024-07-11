import { handleValidationError } from "../middleware/errorHandler.js";
import { Event } from "../models/eventSchema.js";

export const createEvents = async(req, res, next) => {
    const {event} = req.body;

    try {
        if(!event){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Event.create({event})
        res.status(200).json({success: true, message: "Event Created!"})
    } catch (error) {
        next(error)
    }
}

export const getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.status(200).json({
            success: true,
            events
        })
    } catch (error) {
        next(error)
    }
}