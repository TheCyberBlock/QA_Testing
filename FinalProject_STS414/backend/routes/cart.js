import express from 'express';
import Cart from "../models/cart.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import expressAsyncHandler from 'express-async-handler';


const cartRouter = express.Router();


cartRouter.get('/:id', expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);
    const cart = await Cart.findOne({ userId: user._id.toString() });

    if (cart) {
        res.send(cart);
    } else {
        const newCart = await Cart.insertMany({ userId: user._id, total: 0 });
        res.send(newCart.items);
    }

}));

cartRouter.get('/addToCart/:userId/:productId/:qty', expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.params.userId);
    const cart = await Cart.findOne({ userId: user._id.toString() });
    const product = await Product.findById(req.params.productId);
    const qty = parseInt(req.params.qty);
    var total = 0;
    const itemList = cart.items;
    var productFound = false;


    itemList.forEach(item => {
        if (item.productId == product._id) {
            productFound = true;
            if (parseInt(item.qty) + qty > 3) {
                item.qty = 3;
            } else {
                item.qty = parseInt(item.qty) + qty;
            }
        }
    });

    if (!productFound) {
        itemList.push({
            "productId": product._id,
            "productName": product.name,
            "productPrice": product.price,
            "qty": qty
        });
    }

    itemList.forEach(item => {
        total = total + ( item.qty * item.productPrice );
    });

    const update = {
        "$set": {
            items: itemList,
            "total": total
        }
    };
    const options = { returnNewDocument: true };

    try {
        const updatedCart = await Cart.findByIdAndUpdate(cart.id, update, options);
        res.send(updatedCart);
    } catch(err) {
        res.status(404).send({"message":err.message})
    }

}))

cartRouter.get('/removeFromCart/:userId/:productId/:qty', expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.params.userId);
    const cart = await Cart.findOne({ userId: user._id.toString() });
    const product = await Product.findById(req.params.productId);
    const qty = parseInt(req.params.qty);
    var total = 0;
    var itemNumber = -1;
    const itemList = cart.items;

    itemList.forEach(item => {
        itemNumber = itemNumber + 1;
        if (item.productId == product._id) {
            if (parseInt(item.qty) - qty <= 0) {
                itemList.splice(itemNumber, 1);
            } else {
                item.qty = parseInt(item.qty) - qty;
            }
        }
    });

    itemList.forEach(item => {
        total = total + ( item.qty * item.productPrice );
    });

    const update = {
        "$set": {
            items: itemList,
            "total": total
        }
    };
    const options = { returnNewDocument: true };

    try {
        const updatedCart = await Cart.findByIdAndUpdate(cart.id, update, options);
        res.send(updatedCart);
    } catch(err) {
        res.status(404).send({"message":err.message})
    }

}))


export default cartRouter;