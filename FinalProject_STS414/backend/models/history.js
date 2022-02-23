import mongoose from 'mongoose';


const historySchema = mongoose.Schema({
    userId: { type: String, required: true },
    purchase: [{
        items: [
            {
                productId: String,
                productName: String,
                productPrice: Number,
                qty: Number
            }
        ],
        bill: { type: Number, default:0, required: true },
        date: { type: Date, default: Date.now() },
        paymentId: { type: String, required: true }
    }],
},{
    timestamps: true,
})

export default mongoose.model("History", historySchema);