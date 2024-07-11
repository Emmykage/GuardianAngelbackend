import { handleValidationError } from "../middleware/errorHandler.js";
import { Class } from "../models/classSchema.js";
import { Student } from "../models/studentSchema.js";

export const createClass = async(req, res, next) => {
    const { grade} = req.body;

    try {
        if(!grade){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Class.create({ grade})
        res.status(200).json({success: true, message: "Class is Created"})
    } catch (error) {
        next(error)
    }
}

export const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Class.find();
        res.status(200).json({

            success: true,
            classes
        })
    } catch (error) {
        next(error)
    }
}