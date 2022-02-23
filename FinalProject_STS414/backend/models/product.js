import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    isGame: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    price: { type: String, required: true }
},{
    timestamps: true,
})

export default mongoose.model("Product", productSchema);