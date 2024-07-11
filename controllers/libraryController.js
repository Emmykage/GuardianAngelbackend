import { handleValidationError } from "../middleware/errorHandler.js";
import { Book } from "../models/librarySchema.js";

export const createBook = async(req, res, next) => {
    const {title, author} = req.body;

    try {
        if(!title || !author){
            // return next ("Please fill full form", 400)
            handleValidationError("Please fill the full form", 400)
        }
        await Book.create({title, author})
        res.status(200).json({success: true, message: "A Book Created"})
    } catch (error) {
        next(error)
    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            books
        })
    } catch (error) {
        next(error)
    }
}