import express from 'express';
import Product from "../models/product.js";
import expressAsyncHandler from 'express-async-handler';


const softwareRouter = express.Router();


softwareRouter.get('/', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ isGame: false });
    res.send(productList);
}));

softwareRouter.get('/category/Internet', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ category: "Internet" });
    res.send(productList);
}));

softwareRouter.get('/category/Productivity', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ category: "Productivity" });
    res.send(productList);
}));

softwareRouter.get('/category/Communication', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ category: "Communication" });
    res.send(productList);
}));



export default softwareRouter;