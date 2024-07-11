import express from "express";
import { createEvents, getAllEvents } from "../controllers/eventController.js";

// import 

const router = express.Router()

router.get('/', getAllEvents)
router.post('/', createEvents)

export default router;