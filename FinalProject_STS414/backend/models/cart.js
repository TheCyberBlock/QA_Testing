import mongoose from 'mongoose';


const cartSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    items: [
        {
            productId: String,
            productName: String,
            productPrice: Number,
            qty: Number
        }
    ],
    total: { type: Number, default:0 }
},{
    timestamps: true,
})

export default mongoose.model("Cart", cartSchema);