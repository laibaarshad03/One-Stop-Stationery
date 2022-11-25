import mongoose from "mongoose"

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    qtyInStock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
})

const Item = mongoose.model('Item', itemSchema)

export default Item