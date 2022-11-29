import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import itemRoutes from './routes/itemRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
// const express=require('express')

dotenv.config()

connectDB()

const app = express()


const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/viewitems', itemRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
