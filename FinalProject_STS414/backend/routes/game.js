import express from 'express';
import Product from "../models/product.js";
import expressAsyncHandler from 'express-async-handler';


const gameRouter = express.Router();


gameRouter.get('/', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ isGame: true });
    res.send(productList);
}));

gameRouter.get('/category/FPS', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ category: "FPS" });
    res.send(productList);
}));

gameRouter.get('/category/RPG', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ category: "RPG" });
    res.send(productList);
}));

gameRouter.get('/category/Fantasy', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({ category: "Fantasy" });
    res.send(productList);
}));



export default gameRouter;