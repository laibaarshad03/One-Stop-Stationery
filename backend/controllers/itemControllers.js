import asyncHandler from "express-async-handler";
import Item from '../models/itemModel.js'

// fetches all items
// GET /api/viewitems
const getItems=asyncHandler(async(req,res)=>{
    const items=await Item.find({})
    res.json(items)
})

// fetches single items
// GET /api/viewitems/:id
const getItemById=asyncHandler(async(req,res)=>{
    const item = await Item.findById(req.params.id)
    if (item){
        res.json(item)

    } else{
        res.status(404)
        throw new Error('Item not found')
    }
})
export{getItemById,getItems}