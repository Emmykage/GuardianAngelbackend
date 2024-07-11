import { handleValidationError } from "../middleware/errorHandler.js";
import { Assignment } from "../models/assignmentSchema.js";

export const createAssignment = async(req, res, next) => {
    const {title, description, grade, deadline} = req.body;

    try {
        if(!title || !description || !grade, !deadline){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Assignment.create({title, description, grade,deadline })
        res.status(200).json({success: true, message: "Assignment Created"})
    } catch (error) {
        next(error)
    }
}

export const getAllAssignments = async (req, res, next) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({
            success: true,
            assignments
        })
    } catch (error) {
        next(error)
    }
}