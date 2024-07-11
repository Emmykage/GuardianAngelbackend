import { config } from "dotenv";
import express from "express"
import cors from 'cors'
import studentRouter from './routes/studentRouter.js'
import teacherRouter from './routes/teacherRouter.js'
import examRouter from './routes/examRoter.js'
import libraryRouter from './routes/libraryRouter.js'
import classRouter from './routes/classRouter.js'
import announcementRouter from './routes/announcementRouter.js'
import assignmentRouter from './routes/assignmentController.js'
import attendanceRouter from './routes/attendanceRoutes.js'
import eventRouter from './routes/eventRouter.js'

import { dbConnection } from "./database/dbConnection.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express()

config({path: "./config/config.env"})

app.use((err, req, res, next) =>{
    errorHandler(err, req, res, next)
    })
    app.use('/api/v1/students', studentRouter)
    app.use('/api/v1/teachers', teacherRouter)
    app.use('/api/v1/exams', examRouter)
    app.use('/api/v1/classes', classRouter)
    app.use('/api/v1/announcements', announcementRouter)
    app.use('/api/v1/assignments', assignmentRouter)
    app.use('/api/v1/attendance', attendanceRouter)
    app.use('/api/v1/events', eventRouter)
    app.use('/api/v1/library', libraryRouter)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

dbConnection()

export default app;