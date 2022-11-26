
import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router()
import Item from '../models/itemModel.js'

// fetches all items
// GET /api/viewitems
router.get('/', asyncHandler(async (req, res) => {
    const items = await Item.find({})
    res.json(items)
}))

// fetches single items
// GET /api/viewitems/:id
router.get('/:id', asyncHandler(async (req, res) => {
    // console.log(req.params.id)
    const item = await Item.findById(req.params.id)
    if (item){
        res.json(item)

    } else{
        res.status(404)
        throw new Error('Item not found')
    }
}))

export default router