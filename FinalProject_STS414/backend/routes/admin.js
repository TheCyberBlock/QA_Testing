import express from 'express';
import User from "../models/user.js";
import Cart from "../models/cart.js";
import Product from "../models/product.js";
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';


const adminRouter = express.Router();





adminRouter.post('/create', expressAsyncHandler(async (req, res) => {

    const hashedPassword = await bcrypt.hash("admin", 12);

    try {
        const admin = await User.insertMany({
            "name": "admin",
            "email": "admin@admin.com",
            "password": hashedPassword,
            "isAdmin": true
        });
        const cart = Cart.insertMany({ "userId": admin._id })
        res.send(admin);
    } catch(error) {
        res.status(404).send(error.message)
    }

}));







adminRouter.get('/users/delete/:id', expressAsyncHandler(async (req, res) => {

    const userCart = await Cart.findOneAndDelete({ userId: req.params.id });
    const user = await User.findByIdAndDelete(req.params.id);

    res.send(user);

}));

adminRouter.get('/users', expressAsyncHandler(async (req, res) => {

    const users = await User.find({ isAdmin: false });
    if(users) {
        res.send(users);
    } else {
        res.status(404).send({ message: 'User Not Found!!' })
    }

}));








adminRouter.get('/products/delete/:id', expressAsyncHandler(async (req, res) => {

    const deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });
    res.send(deletedProduct);

}));

adminRouter.post('/product/insert', expressAsyncHandler(async (req, res) => {

    const name = req.body.name;
    const description = req.body.desc;
    const price = req.body.price;
    const img = req.body.img;
    const isGame = req.body.type;
    const category = req.body.category;

    try {
        const newProduct = Product.insertMany({
            "name": name,
            "description": description,
            "price": price,
            "img": img,
            "isGame": isGame,
            "category": category
        })
        res.send(newProduct);
    } catch(error) {
        console.log(error)
        res.status(404).send({"message":error.message})
    }

}));

adminRouter.post('/products/update/:id', expressAsyncHandler(async (req, res) => {

    const name = req.body.name;
    const description = req.body.desc;
    const price = req.body.price;
    const img = req.body.img;
    const isGame = req.body.type;
    const category = req.body.category;
    const options = { returnNewDocument: true };

    const update = {
        "$set": {
            "name": name,
            "description": description,
            "price": price,
            "img": img,
            "isGame": isGame,
            "category": category
        }
    };

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, update, options);
        res.send(updatedProduct);
    } catch(error) {
        console.log(error)
        res.status(404).send({"message":error.message})
    }
    

}));

adminRouter.get('/product/:id', expressAsyncHandler(async (req, res) => {

    const product = await Product.findById({ _id: req.params.id });
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found!!' })
    }

}));

adminRouter.get('/products', expressAsyncHandler(async (req, res) => {

    const products = await Product.find({});
    if(products) {
        res.send(products);
    } else {
        res.status(404).send({ message: 'Product Not Found!!' })
    }

}));



export default adminRouter;