import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";
import { addExam, getAllExams } from "../controllers/examController.js";

// import 

const router = express.Router()

router.get('/', getAllExams)
router.post('/', addExam)

export default router;