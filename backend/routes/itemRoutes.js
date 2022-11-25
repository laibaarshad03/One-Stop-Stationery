
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

export default router