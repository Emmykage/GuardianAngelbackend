import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";
import { createClass, getAllClasses } from "../controllers/classController.js";

// import 

const router = express.Router()

router.get('/', getAllClasses)
router.post('/', createClass)

export default router;