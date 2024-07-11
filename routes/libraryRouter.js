import express from "express";
import { createBook, getAllBooks } from "../controllers/libraryController.js";

// import 

const router = express.Router()

router.get('/', getAllBooks)
router.post('/', createBook)

export default router;