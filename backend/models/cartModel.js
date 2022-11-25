import mongoose from "mongoose"

const cartSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cartItems: [
        {
            name: {type: String, required: true},
            qty: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            item: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Item'
            }
        }
    ],
    shippingAdd: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    }
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart