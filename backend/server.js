import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import itemRoutes from './routes/itemRoutes.js'
// const express=require('express')

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.use('/api/viewitems', itemRoutes)

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
