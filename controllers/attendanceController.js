import { handleValidationError } from "../middleware/errorHandler.js";
import { Attendance } from "../models/attendanceSchema.js";
import { Student } from "../models/studentSchema.js";

export const markAttendance = async(req, res, next) => {
    const {attendanceDate, registrationNumber, grade} = req.body;

    try {
        if(!attendanceDate || !Array.isArray(attendanceDate) || attendanceDate.length === 0){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        const attendanceRecords = await Promise.all(attendanceDate.map(async (record) => {
            const {Student, status} = record
            return await Attendance.create({Student, status})
        }))
        res.status(200).json({success: true, message: "Student Created", attendanceRecords})
    } catch (error) {
        next(error)
    }
}

export const getAllAttendance = async (req, res, next) => {
    try {
        const attendanceRecords = await Attendance.find().populate("student", "name registrationNumber grade");
        res.status(200).json({
            success: true,
            attendanceRecords
        })
    } catch (error) {
        next(error)
    }
}