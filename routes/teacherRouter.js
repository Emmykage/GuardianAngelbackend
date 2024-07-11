import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";
import { createTeacher, getAllTeachers } from "../controllers/teacherController.js";

// import 

const router = express.Router()

router.get('/', getAllTeachers)
router.post('/', createTeacher)

export default router;