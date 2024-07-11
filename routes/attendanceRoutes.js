import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";
import { getAllAttendance, markAttendance } from "../controllers/attendanceController.js";

// import 

const router = express.Router()

router.get('/', getAllAttendance)
router.post('/', markAttendance)

export default router;   