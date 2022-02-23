import express from 'express';
import Product from "../models/product.js";
import expressAsyncHandler from 'express-async-handler';


const productRouter = express.Router();


productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found!!' })
    }
}));

productRouter.get('/search/:name', expressAsyncHandler(async (req, res) => {
    const productList = await Product.find({$text: {$search: req.params.name}});
    res.send(productList);
}));



export default productRouter;