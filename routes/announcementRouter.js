import express from "express";
import { createAnnouncement, getAllAnnouncement } from "../controllers/announcementController.js";

// import 

const router = express.Router()

router.get('/', getAllAnnouncement)
router.post('/', createAnnouncement)

export default router;