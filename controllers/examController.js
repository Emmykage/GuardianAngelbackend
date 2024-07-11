import { handleValidationError } from "../middleware/errorHandler.js";
import { Class } from "../models/classSchema.js";
import { Exam } from "../models/examSchema.js";
import { Student } from "../models/studentSchema.js";

export const addExam = async(req, res, next) => {
    const {name, registrationNumber, className, mark} = req.body;

    try {
        if(!name || !registrationNumber || !className || mark){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Exam.create({name, registrationNumber, className, mark})
        res.status(200).json({success: true, message: "A new exam has been Created"})
    } catch (error) {
        next(error)
    }
}

export const getAllExams = async (req, res, next) => {
    try {
        const exams = await Exam.find();
        res.status(200).json({
            success: true,
            exams
        })
    } catch (error) {
        next(error)
    }
}