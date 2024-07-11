import { handleValidationError } from "../middleware/errorHandler.js";
import { Student } from "../models/studentSchema.js";
import { Teacher } from "../models/teacheSchema.js";

export const createTeacher = async(req, res, next) => {
    const {name, email, subject} = req.body;

    try {
        if(!name || !registrationNumber || !grade){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Teacher.create({name, registrationNumber, grade})
        res.status(200).json({success: true, message: "Teacher Created"})
    } catch (error) {
        next(error)
    }
}

export const getAllTeachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json({
            success: true,
            teachers
        })
    } catch (error) {
        next(error)
    }
}