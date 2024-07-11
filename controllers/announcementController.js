import { handleValidationError } from "../middleware/errorHandler.js";
import { Announcement } from "../models/announcementSchema.js";

export const createAnnouncement = async(req, res, next) => {
    const {announcement} = req.body;

    try {
        if(!announcement){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Announcement.create({announcement})
        res.status(200).json({success: true, message: "Announcement Created"})
    } catch (error) {
        next(error)
    }
}

export const getAllAnnouncement = async (req, res, next) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json({
            success: true,
            announcements
        })
    } catch (error) {
        next(error)
    }
}