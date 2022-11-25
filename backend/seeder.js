import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from "./data/users.js";
import items from "./data/items.js";
import User from "./models/userModel.js";
import Item from "./models/itemModel.js";
import Cart from "./models/cartModel.js";
import connectDB from "./config/db.js";

dotenv.config()

connectDB()



const importData = async() => {
    try {
        await Cart.deleteMany()
        await Item.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleItems  = items.map(item =>{
            return{ ...item}
        })

        await Item.insertMany(sampleItems)

        console.log('Data imported')
        process.exit()
    } catch(error) {
        console.error(`${error}`)
        process.exit(1)

    }
}

const destroyData = async() => {
    try {
        await Cart.deleteMany()
        await Item.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed')
        process.exit()
    } catch(error) {
        console.error(`${error}`)
        process.exit(1)

    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else {
    importData()
}